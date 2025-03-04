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
    "s": 'search-bar'
  },
  disabled: [
    'todo-list'
  ],
  fastLink: "https://chat.openai.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      "name": "main",
      "background_url": "src/img/banners/cbg-6.gif",
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
              "name": "Github",
              "url": "https://github.com/freelancehunt/freelancehunt.com",
              "icon": "brand-github",
              "icon_color": "#6e40c9"
            },
            {
              "url": "https://app.circleci.com/pipelines/github/freelancehunt/freelancehunt.com",
              "name": "CircleCI",
              "icon": "reload",
              "icon_color": "#343434"
            },
            {
              "url": "https://app.currents.dev/projects/mrW9Mp/runs",
              "name": "Currents.dev",
              "icon": "brand-cloudflare",
              "icon_color": "#f6821f"
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
          "name": "Tasks",
          "links": [
            {
              "name": "Reverse project",
              "url": "https://app.asana.com/0/1208954596088448/1208954551103924",
              "icon": "brand-asana",
              "icon_color": "#ff5733"
            },
            {
              "name": "Batman",
              "url": "https://app.asana.com/0/1202506978686328/list",
              "icon": "brand-asana",
              "icon_color": "#ff8c00"
            },
            {
              "name": "Focus",
              "url": "https://app.asana.com/0/534203904994086/list",
              "icon": "brand-asana",
              "icon_color": "#ffa500"
            },
            {
              "url": "https://meet.google.com",
              "name": "Google Meet",
              "icon": "video",
              "icon_color": "#34A853"
            }
          ]
        },
        {
          "name": "Error monitoring and logging",
          "links": [
            {
              "name": "Datadog",
              "url": "https://app.datadoghq.com/logs",
              "icon": "dog",
              "icon_color": "#774aa4"
            },
            {
              "name": "Bugsnag",
              "url": "https://app.bugsnag.com/freelancehunt/php/errors",
              "icon": "bug",
              "icon_color": "#ff4c4c"
            },
            {
              "name": "Pydantic Logfire",
              "url": "https://logfire.pydantic.dev/freelancehunt/polyglot?env=production",
              "icon": "terminal",
              "icon_color": "#008080"
            },
            {
              "name": "Better Uptime",
              "url": "https://uptime.betterstack.com/team/3891/monitors",
              "icon": "clock",
              "icon_color": "#2e8b57"
            }
          ]
        }
      ]
    },
    {
      name: 'devops',
      background_url: 'src/img/banners/cbg-8.gif',
      categories: [
        {
          "name": "Infrastructure",
          "links": [
            {
              "url": "https://dash.cloudflare.com/",
              "name": "Cloudflare",
              "icon": "brand-cloudflare",
              "icon_color": "#f6821f"
            },
            {
              "url": "https://cloud.linode.com/linodes",
              "name": "Linode Manager",
              "icon": "server",
              "icon_color": "#00a95c"
            },
            {
              "url": "https://us-east-2.console.aws.amazon.com/console/home",
              "name": "Amazon S3",
              "icon": "brand-amazon",
              "icon_color": "#ff9900"
            },
            {
              "url": "https://app.terraform.io/app/freelancehunt/workspaces/cloudflare/runs",
              "name": "Terraform Cloud",
              "icon": "layers-intersect",
              "icon_color": "#623ce4"
            }
          ]
        },
        {
          "name": "Monitoring and alerting",
          "links": [
            {
              "url": "https://app.datadoghq.com/kubernetes",
              "name": "K8s",
              "icon": "hexagon",
              "icon_color": "#326ce5"
            },
            {
              "url": "https://app.sleuth.io/freelancehunt/freelancehunt",
              "name": "Sleuth",
              "icon": "search",
              "icon_color": "#4caf50"
            },
            {
              "url": "https://console.vantage.sh/",
              "name": "Vantage",
              "icon": "chart-line",
              "icon_color": "#4a90e2"
            },
            {
              "url": "https://dmarcdigests.com/",
              "name": "DMARC Digests",
              "icon": "mail",
              "icon_color": "#ff9800"
            },
            {
              "url": "https://hetrixtools.com/",
              "name": "Hetrix",
              "icon": "activity",
              "icon_color": "#ff4757"
            }
          ]
        },
        {
          "name": "Documentation",
          "links": [
            {
              "url": "https://freelancehunt.atlassian.net/wiki/spaces/DEV/pages/265650177/Standard+Operating+Procedures+SOP",
              "name": "Standard Operating Procedures",
              "icon": "book",
              "icon_color": "#0052cc"
            },
            {
              "url": "https://kubernetes.io/docs/reference/kubectl/quick-reference/",
              "name": "Kubectl Cheat Sheet",
              "icon": "terminal",
              "icon_color": "#326ce5"
            }
          ]
        }
      ]
    },
    {
      name: 'Prod',
      background_url: 'src/img/banners/cbg-3.gif',
      categories: [
        {
          "name": "Core",
          "links": [
            {
              "url": "https://platform.openai.com/usage",
              "name": "OpenAI",
              "icon": "brand-openai",
              "icon_color": "#4a4a4a"
            },
            {
              "url": "https://localise.biz/session/auth/login/",
              "name": "Localise",
              "icon": "language",
              "icon_color": "#3498db"
            },
            {
              "url": "https://unleash.freelancehunt.net/",
              "name": "Unleash",
              "icon": "toggle-right",
              "icon_color": "#ff5733"
            },
            {
              "url": "https://cockpit.sumsub.com/checkus#/home",
              "name": "SumSub",
              "icon": "user-check",
              "icon_color": "#007bff"
            },
          ]
        },
        {
          "name": "Administration",
          "links": [
            {
              "url": "https://admin.google.com/u/0/ac/home",
              "name": "Google Admin",
              "icon": "settings",
              "icon_color": "#4285f4"
            },
            {
              "url": "https://atomic.center/login/",
              "name": "AtomPark",
              "icon": "user-circle",
              "icon_color": "#00b5ad"
            },
            {
              "url": "https://checkmobi.com/",
              "name": "CheckMobi",
              "icon": "device-mobile",
              "icon_color": "#f39c12"
            },
            {
              "url": "https://cloudinary.com/console/",
              "name": "Cloudinary",
              "icon": "cloud",
              "icon_color": "#3498db"
            }
          ]
        },
        {
          "name": "Marketing and advertising",
          "links": [
            {
              "url": "https://app.getbeamer.com/home",
              "name": "Beamer",
              "icon": "speakerphone",
              "icon_color": "#ff6c37"
            },
            {
              "url": "https://mail.missiveapp.com/",
              "name": "Missive",
              "icon": "message",
              "icon_color": "#ff6c37"
            },
            {
              "url": "https://getresponse.freelancehunt.com/",
              "name": "GetResponse",
              "icon": "mail",
              "icon_color": "#1dbf73"
            },
            {
              "url": "https://app.sendgrid.com/",
              "name": "SendGrid",
              "icon": "mail",
              "icon_color": "#f1f1f1"
            },
          ]
        },
      ]
    },
    {
      name: 'Dev',
      background_url: 'src/img/banners/cbg-7.gif',
      categories: [
        {
          "name": "Development tools",
          "links": [
            {
              "url": "https://hub.docker.com/orgs/freelancehunt",
              "name": "Docker Hub",
              "icon": "brand-docker",
              "icon_color": "#2496ed"
            },
            {
              "url": "https://freelancehunt.postman.co/workspaces",
              "name": "Postman",
              "icon": "flask",
              "icon_color": "#ff6c37"
            },
            {
              "url": "https://accounts.lambdatest.com/dashboard",
              "name": "Lambda Test",
              "icon": "test-pipe-2",
              "icon_color": "#2d72d9"
            },
            {
              "url": "https://dashboard.ngrok.com/",
              "name": "ngrok",
              "icon": "link",
              "icon_color": "#5c5b5b"
            },
          ]
        },
        {
          "name": "Code security",
          "links": [
            {
              "url": "https://app.aikido.dev/",
              "name": "Aikido Security",
              "icon": "shield-lock",
              "icon_color": "#ff6c37"
            },
            {
              "url": "https://dashboard.gitguardian.com/",
              "name": "GitGuardian",
              "icon": "git-commit",
              "icon_color": "#4f565e"
            },
            {
              "url": "https://semgrep.dev/orgs/freelancehunt",
              "name": "Semgrep",
              "icon": "code",
              "icon_color": "#e91e63"
            }
          ]
        },
        {
          "name": "Code quality",
          "links": [
            {
              "url": "https://codeclimate.com/repos/649ed5bd5394ee0105779501",
              "name": "Code Climate",
              "icon": "thermometer",
              "icon_color": "#52c41a"
            },
            {
              "url": "https://coveralls.io/",
              "name": "Coveralls.io",
              "icon": "box",
              "icon_color": "#ffcc00"
            },
          ]
        },

      ]
    },
    {
      name: 'other',
      background_url: 'src/img/banners/cbg-9.gif',
      categories: [
        {
          "name": "Work",
          "links": [
            {
              "url": "https://docs.google.com/spreadsheets/u/0/d/1CDeInulHEaSo_g8hk889ANnTCYxevihKLKd67YzLyQ0/htmlview",
              "name": "Freelancehunt",
              "icon": "table",
              "icon_color": "#0F9D58"
            },
            {
              "url": "https://dashboard.peoplebox.ai/dashboard",
              "name": "Peoplebox",
              "icon": "users",
              "icon_color": "#4CAF50"
            },
            {
              "url": "https://docs.google.com/document/d/1Z0Ge38orFgBHgx_mHNTo4BZ6Vmbh7hBPYtqa3oRNT0s/edit?disco=AAAAxjhRUrE",
              "name": "Proposals",
              "icon": "file-text",
              "icon_color": "#F57C00"
            },
            {
              "url": "https://docs.google.com/document/d/1YNWn9V9MIpp5Hu2bGFGEk3RJK9aLNyHz8xNZO7qshYw/edit",
              "name": "DevOps questions",
              "icon": "file",
              "icon_color": "#1976D2"
            }
          ]

        },
        {
          "name": "Docs",
          "links": [
            {
              "url": "https://freelancehunt.atlassian.net/wiki/spaces/DEV/overview",
              "name": "Confluence",
              "icon": "book",
              "icon_color": "#0052CC"
            },
            {
              "url": "https://www.conventionalcommits.org/en/v1.0.0/#summary",
              "name": "Conventional Commits",
              "icon": "align-left",
              "icon_color": "#F1C232"
            },
            {
              "url": "https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type",
              "name": "Angular commit types",
              "icon": "git-merge",
              "icon_color": "#DD0031"
            }
          ]
        },
        {
          "name": "Relax",
          "links": [
            {
              "url": "https://www.chess.com/home",
              "name": "Chess",
              "icon": "chess",
              "icon_color": "#B6A136"
            },
            {
              "url": "https://monkeytype.com/",
              "name": "Monkeytype",
              "icon": "align-left",
              "icon_color": "#F1C232"
            },
            {
              "url": "https://leetcode.com/",
              "name": "LeetCode",
              "icon": "code",
              "icon_color": "#FFA500"
            },
            {
              "url": "https://tetris.com/",
              "name": "Tetris",
              "icon": "brand-apple-arcade",
              "icon_color": "#008C00"
            }
          ]

        },
      ]
    }
  ]
});
