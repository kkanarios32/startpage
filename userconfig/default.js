const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true,
  temperature: {
    location: 'London, UK',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      r: ['https://www.reddit.com/search/?q=', 'Reddit']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar',
    "c": 'fast-link'
  },
  disabled: [],
  fastLink: {
    url: "https://chat.openai.com/",
    icon: "src/img/openai.png"
  },
  openLastVisitedTab: false,
  tabs: [
    {
      "name": "daily",
      "background_url": "src/img/banners/cbg-9.gif",
      "categories": [
        {
          "name": "productivity",
          "links": [
            {
              "url": "https://calendar.google.com",
              "name": "Calendar",
              "icon": "calendar",
              "icon_color": "#4285f4"
            },
            {
              "url": "https://gmail.com",
              "name": "Gmail",
              "icon": "brand-gmail",
              "icon_color": "#ea4335"
            },
            {
              "url": "https://drive.google.com",
              "name": "Drive",
              "icon": "brand-google-drive",
              "icon_color": "#fbbc05"
            }
          ]
        },
        {
          "name": "development",
          "links": [
            {
              "url": "https://github.com",
              "name": "GitHub",
              "icon": "brand-github",
              "icon_color": "#333"
            },
            {
              "url": "https://stackoverflow.com",
              "name": "Stack Overflow",
              "icon": "brand-stackoverflow",
              "icon_color": "#f48024"
            },
            {
              "url": "https://developer.mozilla.org",
              "name": "MDN",
              "icon": "brand-firefox",
              "icon_color": "#ff9400"
            }
          ]
        }
      ]
    },
    {
      "name": "media",
      "background_url": "src/img/banners/cbg-4.gif",
      "categories": [
        {
          "name": "social",
          "links": [
            {
              "url": "https://twitter.com",
              "name": "Twitter",
              "icon": "brand-twitter",
              "icon_color": "#1da1f2"
            },
            {
              "url": "https://reddit.com",
              "name": "Reddit",
              "icon": "brand-reddit",
              "icon_color": "#ff4500"
            },
            {
              "url": "https://linkedin.com",
              "name": "LinkedIn",
              "icon": "brand-linkedin",
              "icon_color": "#0077b5"
            }
          ]
        },
        {
          "name": "entertainment",
          "links": [
            {
              "url": "https://youtube.com",
              "name": "YouTube",
              "icon": "brand-youtube",
              "icon_color": "#ff0000"
            },
            {
              "url": "https://netflix.com",
              "name": "Netflix",
              "icon": "brand-netflix",
              "icon_color": "#e50914"
            },
            {
              "url": "https://spotify.com",
              "name": "Spotify",
              "icon": "brand-spotify",
              "icon_color": "#1db954"
            }
          ]
        }
      ]
    },
    {
      "name": "news",
      "background_url": "src/img/banners/cbg-3.gif",
      "categories": [
        {
          "name": "tech",
          "links": [
            {
              "url": "https://news.ycombinator.com",
              "name": "Hacker News",
              "icon": "letter-y",
              "icon_color": "#ff6600"
            },
            {
              "url": "https://techcrunch.com",
              "name": "TechCrunch",
              "icon": "news",
              "icon_color": "#00a562"
            },
            {
              "url": "https://theverge.com",
              "name": "The Verge",
              "icon": "brand-vercel",
              "icon_color": "#e2127d"
            }
          ]
        },
        {
          "name": "crypto",
          "links": [
            {
              "url": "https://coinmarketcap.com",
              "name": "CoinMarketCap",
              "icon": "currency-bitcoin",
              "icon_color": "#17181b"
            },
            {
              "url": "https://coingecko.com",
              "name": "CoinGecko",
              "icon": "currency-ethereum",
              "icon_color": "#8dc63f"
            }
          ]
        }
      ]
    }
  ]
});
