// Load scripts sequentially to ensure proper dependency order
async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function fetchDefaultConfig() {
  // First try to load the local config file (not tracked in git)
  try {
    const localResponse = await fetch('config.local.json');
    if (localResponse.ok) {
      const localConfig = await localResponse.json();
      return localConfig.defaultConfig || 'default';
    }
  } catch (e) {
    // Local config doesn't exist, try the template
    try {
      const templateResponse = await fetch('config.template.json');
      if (templateResponse.ok) {
        const templateConfig = await templateResponse.json();
        return templateConfig.defaultConfig || 'default';
      }
    } catch (templateErr) {
      console.warn('Could not load any config file, using default config');
    }
  }
  return 'default';
}

async function init() {
  // Get config from URL or use default from config.json
  const defaultConfig = await fetchDefaultConfig();
  const configType = new URLSearchParams(window.location.search).get('config') || defaultConfig;
  
  // Core dependencies
  const coreDeps = [
    'src/common/utils.js',
    'src/common/storage.js',
    'src/common/notify.js',
    'src/common/actions.js',
    'src/common/config.js',
    'src/common/strftime.js',
    'src/common/component.js'
  ];

  // Load core dependencies first
  for (const src of coreDeps) {
    await loadScript(src);
  }

  // Try to load specified config, fallback to default if fails
  try {
    await loadScript(`userconfig/${configType}.js`);
  } catch (e) {
    console.warn(`Failed to load config '${configType}', falling back to default`);
    await loadScript('userconfig/default.js');
  }

  // Load components in order
  const componentScripts = [
    'src/components/shared/modal/modal.component.js',
    'src/components/tabs/tabs.component.js',
    'src/components/search/search.component.js',
    'src/components/clock/clock.component.js',
    'src/components/todo/task-priority.component.js',
    'src/components/todo/task-edit.component.js',
    'src/components/todo/task.component.js',
    'src/components/todo/todo.component.js',
    'src/components/crypto/crypto.api.js',
    'src/components/crypto/crypto-diff.component.js',
    'src/components/crypto/crypto-popup.component.js',
    'src/components/crypto/crypto.component.js',
    'src/components/fast-link/fast-link.component.js',
    'src/components/weather/weather.api.js',
    'src/components/weather/weather.component.js',
    'src/components/statusbar/statusbar.component.js'
  ];

  // Load components sequentially
  for (const src of componentScripts) {
    await loadScript(src);
  }

  // Finally load the module that registers all components
  await loadScript('src/common/module.js');
}

// Start loading when DOM is ready
document.addEventListener('DOMContentLoaded', init);
