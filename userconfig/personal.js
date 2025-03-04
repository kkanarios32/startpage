const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'USD',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Kryvyi Rih, UA',
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
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar',
    "c": 'fast-link'
  },
  disabled: [
    'todo-list'
  ],
  fastLink: "https://chat.openai.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      "name": "person",
      "background_url": "src/img/banners/cbg-9.gif",
      "categories": [
        {
          "name": "daily",
          "links": [
            {
              "url": "https://ticktick.com/webapp/#q/week/tasks",
              "name": "TickTick",
              "icon": "list-check",
              "icon_color": "#FFAA00"
            },
            {
              "url": "https://web.budgetbakers.com/dashboard",
              "name": "BudgetBakers",
              "icon": "wallet",
              "icon_color": "#4CAF50"
            },
            {
              "url": "https://gmail.com/",
              "name": "Gmail",
              "icon": "brand-gmail",
              "icon_color": "#ea4335"
            }
          ]
        },
        {
          "name": "car",
          "links": [
            {
              "url": "https://driver.top/",
              "name": "Driver Top",
              "icon": "steering-wheel",
              "icon_color": "#007BFF"
            },
            {
              "url": "https://e-drive.com.ua/",
              "name": "E-Drive",
              "icon": "bolt",
              "icon_color": "#28A745"
            }
          ]
        },
        {
          "name": "home",
          "links": [
            {
              "url": "https://www.novakom.com.ua/abonent/payment/index.html",
              "name": "Novakom Payment",
              "icon": "credit-card",
              "icon_color": "#007BFF"
            },
            {
              "url": "https://my.yasno.com.ua/cabinet/person/",
              "name": "Yasno Cabinet",
              "icon": "bulb",
              "icon_color": "#F1C232"
            }
          ]
        },
      ]
    },
    {
      "name": "forex",
      "background_url": "src/img/banners/cbg-4.gif",
      "categories": [
        {
          "name": "trading",
          "links": [
            {
              "url": "https://www.tradingview.com/chart/WChj2AGk/",
              "name": "TradingView",
              "icon": "trending-up",
              "icon_color": "#2962FF"
            },
            {
              "url": "https://app.fxreplay.com/auth/sessions",
              "name": "FX Replay",
              "icon": "player-play",
              "icon_color": "#4CAF50"
            },
            {
              "url": "https://www.notion.so/FX-Replay-1412ab2e4385807bb40dc2a41f63d361",
              "name": "FX Replay config",
              "icon": "notebook",
              "icon_color": "#505050"
            }
          ]
        },
        {
          "name": "darktrader",
          "links": [
            {
              "url": "https://discord.com/channels/1120774187368321167/1145806812709404834",
              "name": "Discord",
              "icon": "message-circle",
              "icon_color": "#5865F2"
            },
            {
              "url": "https://www.notion.so/Trading-strategy-1412ab2e4385809a82f8c266875faba4?pvs=25",
              "name": "Trading Strategy",
              "icon": "trending-up",
              "icon_color": "#4CAF50"
            },
            {
              "url": "https://drive.google.com/drive/folders/1YowZ6fyINbLyuSSXd0TW9s_1004waTEo",
              "name": "Lessons",
              "icon": "book",
              "icon_color": "#FF9800"
            },
            {
              "url": "https://www.notion.so/5-0-c9fe9452da5b481092608c379d95c031?pvs=25",
              "name": "Homework",
              "icon": "edit",
              "icon_color": "#3F51B5"
            }
          ]
        },
        {
          "name": "TS",
          "links": [
            {
              "url": "https://jumbled-hole-c5a.notion.site/74f713bda46740a680742fbe55920785",
              "name": "Бекстеты",
              "icon": "book",
              "icon_color": "#5865F2"
            },
          ]
        },
      ]
    },
    {
      "name": "crypto",
      "background_url": "src/img/banners/cbg-3.gif",
      "categories": [
        {
          "name": "trading",
          "links": [
            {
              "url": "https://www.tradingview.com/chart/6DaJFrFN/",
              "name": "TradingView",
              "icon": "trending-up",
              "icon_color": "#2962FF"
            },
            {
              "url": "https://tradersdiaries.com/diary/lk/crypto",
              "name": "Trader's Diaries",
              "icon": "book",
              "icon_color": "#8E44AD"
            },
            {
              "url": "https://tradermake.money/app2/account/index",
              "name": "TMM",
              "icon": "coins",
              "icon_color": "#27AE60"
            },
            {
              "url": "https://liner.scalpsecta.com/",
              "name": "Scalpsecta",
              "icon": "activity",
              "icon_color": "#C0392B"
            }
          ]
        },
        {
          "name": "websites",
          "links": [
            {
              "url": "https://bingx.com/",
              "name": "BingX",
              "icon": "chart-line",
              "icon_color": "#0052FF"
            },
            {
              "url": "https://www.bybit.com/ru-RU/",
              "name": "Bybit",
              "icon": "chart-line",
              "icon_color": "#F7931A"
            },
            {
              "url": "https://www.binance.com/ru",
              "name": "Binance",
              "icon": "chart-line",
              "icon_color": "#F3BA2F"
            },
            {
              "url": "https://www.okx.com/ru",
              "name": "OKX",
              "icon": "chart-line",
              "icon_color": "#000000"
            }
          ]
        },
        {
          "name": "spot",
          "links": [
            {
              "url": "https://dropstab.com/ru",
              "name": "Dropstab",
              "icon": "coins",
              "icon_color": "#0052FF"
            },
            {
              "url": "https://coinmarketcap.com/ru/",
              "name": "CoinMarketCap",
              "icon": "coins",
              "icon_color": "#0666EB"
            },
            {
              "url": "https://www.stakingrewards.com/",
              "name": "Staking Rewards",
              "icon": "wallet",
              "icon_color": "#1E88E5"
            }
          ]

        }
      ]
    },
    {
      "name": "sites",
      "background_url": "src/img/banners/cbg-7.gif",
      "categories": [
        {
          "name": "management",
          "links": [
            {
              "url": "https://dash.cloudflare.com/f777c13ecfd6ebae7cd61474485856a7",
              "name": "Cloudflare",
              "icon": "shield",
              "icon_color": "#F38020"
            },
            {
              "url": "https://search.google.com/u/0/search-console",
              "name": "Google Console",
              "icon": "search",
              "icon_color": "#4285F4"
            },
            {
              "url": "https://analytics.google.com/analytics/web/?authuser=0",
              "name": "Google Analytics",
              "icon": "chart-bar",
              "icon_color": "#E37400"
            },
            {
              "url": "https://app.amplitude.com/analytics/damp-butterfly-427504/home",
              "name": "Amplitude",
              "icon": "activity",
              "icon_color": "#1E88E5"
            }
          ]
        },
        {
          "name": "websites",
          "links": [
            {
              "url": "https://rucasino.win/admin",
              "name": "Casino",
              "icon": "shield",
              "icon_color": "#8B0000"
            },
            {
              "url": "https://lolfinder.net/parties",
              "name": "LoL Finder",
              "icon": "swords",
              "icon_color": "#1E90FF"
            },
            {
              "url": "https://lancer.club/dashboard",
              "name": "Lancer Club",
              "icon": "gauge",
              "icon_color": "#FF4500"
            }
          ]
        },
        {
          "name": "Error monitoring and logging",
          "links": [
            {
              "name": "Bugsnag",
              "url": "https://app.bugsnag.com/my-3/lolfinder/errors",
              "icon": "bug",
              "icon_color": "#ff4c4c"
            },
            {
              "url": "https://circleci.com/gh/TheMY3/lolfinder",
              "name": "CircleCI",
              "icon": "reload",
              "icon_color": "#343434"
            },
            {
              "url": "https://cloud.cypress.io/projects/b7knmv/runs",
              "name": "Cypress",
              "icon": "brand-cloudflare",
              "icon_color": "#f6821f"
            }
          ]
        }
      ]
    },
    {
      "name": "games",
      "background_url": "src/img/banners/cbg-13.gif",
      "categories": [
        {
          "name": "Nintendo",
          "links": [
            {
              "url": "https://ntdeals.net",
              "name": "Nintendo Deals",
              "icon": "shopping-cart",
              "icon_color": "#E60012"
            },
            {
              "url": "https://eshop-prices.com/",
              "name": "eShop Prices",
              "icon": "shopping-cart",
              "icon_color": "#F79E1B"
            },
            {
              "url": "https://romsfun.com/roms/nintendo-3ds",
              "name": "RomsFun",
              "icon": "package",
              "icon_color": "#0061A8"
            },
            {
              "url": "https://romspure.cc/roms/3ds",
              "name": "RomsPure",
              "icon": "package",
              "icon_color": "#008080"
            }
          ]
        },
        {
          "name": "PlayStation",
          "links": [
            {
              "url": "https://vitadb.rinnegatamante.it/",
              "name": "VitaDB",
              "icon": "database",
              "icon_color": "#4A90E2"
            },
          ]
        },
      ]
    }
  ]
});
