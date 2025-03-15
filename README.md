# dawn - Nord Theme Fork

<p align="center">
  <img src="https://i.imgur.com/vjfMONS.png">
</div>

<p align="center">
  <img src="https://i.imgur.com/VVMKIQ9.png">
  <a href="http://start.molchan.me/">LIVE PREVIEW</a>
</div>

## About This Fork

This is a fork of the original [dawn](https://github.com/b-coimbra/dawn) start page, incorporating improvements from [Tartarus startpage](https://github.com/AllJavi/tartarus-startpage) and adapted specifically for the Nord color theme. The Nord theme provides a clean, minimalist aesthetic with its arctic-inspired color palette.

Key improvements in this fork include:
- Full Nord theme color scheme integration (not the best, but I'm trying)
- Fast link component with hotkey support (`c` key by default) and clickable button (idea from Tartarus startpage)
- Various UI and performance improvements
- Streamlined configuration
- Dynamic configuration support

## Keybindings

- <kbd>Numrow</kbd> Switch tabs
- <kbd>t</kbd> Open the create task panel
  - <kbd>Enter</kbd> Create a task
  - <kbd>Tab</kbd> Go to next field
- <kbd>s</kbd> Open the search dialog
- <kbd>c</kbd> Activate the fast link (navigate to the configured URL)
- <kbd>Esc</kbd> Close the edit/create task panel (when field is focused)

## Configuration

For now, some settings can be tweaked by changing the `CONFIG` object located in `./work.js`.

### Disabling a component

To disable a component, put their name into the list of `disabled` components:

```js
const CONFIG = new Config({
    // ...
    disabled: ['todo-list'] // search-bar, crypto-rate, current-time, weather-forecast, status-bar
});
```

### Tabs

Create new tabs and categories like so:

```js
const CONFIG = new Config({
    // ...
    openLastVisitedTab: false,
    tabs: [
        {
            name: 'boards',
            background_url: 'src/res/banners/bg-1.gif',
            categories: [{
                name: 'fun',
                links: [{
                    url: 'https://youtube.com',
                    name: 'youtube',
                    icon: 'brand-youtube',
                    icon_color: '#996767'
                }]
            }]
        }
    ]
)
```

All the available icons can be found on [tabler-icons](https://tabler-icons.io).


### Fast Link

The Fast Link component provides quick access to your most frequently used website. You can configure it in your config file:

```js
const CONFIG = new Config({
  // ...
  fastLink: {
    url: "https://chat.openai.com/",
    icon: "src/img/openai.png"
  },
});
```

You can access the Fast Link by clicking on its icon in the status bar or by using the `c` hotkey (configurable in keybindings).

### Dynamic Configuration

This fork supports dynamic configuration loading based on URL parameters. You can create multiple configuration files in the `userconfig` directory and load them by appending `?config=filename` to the URL.

For example:
- Create a file `userconfig/work.js` for your work setup
- Create a file `userconfig/personal.js` for your personal setup
- Access them via:
  - `http://start.molchan.me/?config=work`
  - `http://start.molchan.me/?config=personal`

If no config parameter is provided, it will default to `userconfig/default.js`.

### Clock

Change the clock format in the status bar using [strftime.org](https://strftime.org) format.

Config example (`work.js`):

```js
const CONFIG = new Config({
  // ...
  clock: {
    format: 'h:i p',        // 13:30 PM
    // format: 'do B Y - h:i', // 18th January 2021 - 13:30
    // format: 'h:i - m/b/Y',  // 13:30 - 3/Jul/2021
    iconColor: 'grey'
  }
});
```

### Weather temperature

Change your location and temperature scale (celius, fahrenheit) like such:

```js
const CONFIG = new Config({
  // ...
  temperature: {
    location: 'New York',
    scale: 'C'
  }
});
```

Alternatively, click on the weather widget to swap between Celius and Fahrenheit.

### Crypto status

For the live crypto status, provide a crypto coin and a FIAT currency. Example:

```js
const CONFIG = new Config({
  // ...
  crypto: {
    coin: 'ETH', // BTC, LINK, DOGE etc
    currency: 'USD', // EUR, JPY, BRL etc
    refreshIn: 15 // refresh time (in seconds)
  },
});
```

Alternatively, click on the crypto widget to change the settings:

<p align="left">
  <img src="https://i.imgur.com/aUnoJLA.png">
</div>

## Credits

- [Dawn Startpage](https://github.com/b-coimbra/dawn) - The original startpage this fork is based on ([preview](https://startpage.metaphoric.dev/))
- [Tartarus Startpage](https://github.com/AllJavi/tartarus-startpage) - Inspiration for the fastlink feature and other improvements ([preview](https://alljavi.github.io/tartarus-startpage/))
