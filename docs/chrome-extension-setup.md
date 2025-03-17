# Setting Up Dawn as a Chrome New Tab Extension

This guide will walk you through the process of setting up Dawn as your new tab page in Chrome using the extension functionality.

## Installation Steps

### 1. Clone or Download the Repository

First, clone this repository or download it to your local machine:

```bash
git clone https://github.com/TheMY3/dawn.git
cd dawn
```

### 2. Configure Your Personal Settings

#### A. Create a Local Configuration File

Create a file named `config.local.json` in the root directory with your preferred default configuration:

```json
{
  "defaultConfig": "your_config_name"
}
```

Replace `your_config_name` with the name of your configuration file (without the .js extension) from the `userconfig` directory.

> **Note**: This file is ignored by git and won't be tracked, ensuring your personal preferences remain private.

#### B. Create Your Personal Configuration

If you haven't already, create your personal configuration file in the `userconfig` directory:

```js
// userconfig/your_config_name.js
const CONFIG = new Config({
  // Your personal configuration here
  // ...
});
```

### 3. Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" by toggling the switch in the top-right corner
3. Click "Load unpacked" and select the dawn directory
4. The extension should now be installed and will override your new tab page

## Configuration Options

### Default Configuration

The extension will try to load configurations in the following order:

1. URL parameter: `?config=name` (e.g., opening a new tab with `?config=work`)
2. Local configuration file: `config.local.json` (your private settings)
3. Template configuration: `config.template.json` (the default template)
4. Fallback to `default` configuration

### Changing the Default Configuration

To change your default configuration:

1. Edit the `config.local.json` file:
   ```json
   {
     "defaultConfig": "new_config_name"
   }
   ```
2. Refresh your new tab page

## Troubleshooting

### Extension Not Loading

If the extension isn't loading properly:

1. Check the console for errors (F12 or Right-click > Inspect > Console)
2. Ensure all paths in your configuration are correct
3. Try reloading the extension from the `chrome://extensions/` page

### Content Security Policy Issues

If you encounter Content Security Policy (CSP) errors:

1. Make sure you're not using inline scripts in any HTML files
2. Check that all external resources are properly declared in the `manifest.json` file
3. Reload the extension after making changes

## Updating the Extension

When you pull updates from the repository:

1. Navigate to `chrome://extensions/`
2. Find the Dawn extension and click the refresh icon
3. Open a new tab to see the changes

Your personal configuration in `config.local.json` and any custom userconfig files will be preserved as they are not tracked by git.
