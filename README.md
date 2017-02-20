# Advanced Angular Workshop - Echte Erfahrungen aus echten Projekten

[Hackschool Karlsruhe](https://www.meetup.com/de-DE/Hackschool-KA/events/237247729/), 25. Februar 2017, 13:00–17:00 Uhr, Duale Hochschule Baden-Württemberg Karlsruhe.

[Christian Liebel](https://twitter.com/chris_liebel), Software Architect, Thinktecture AG, Karlsruhe.

## Setup

### Prerequisites

- [Node.js 6.9.4 LTS or higher](https://nodejs.org/en/)
- [Git](https://git-scm.com/) (recommended)
- Editor ([WebStorm](https://www.jetbrains.com/webstorm/), [Visual Studio Code](https://code.visualstudio.com/), …)
- Laptop (well, obviously)

### Please try this at home

As KA-WLAN has a relatively limited bandwidth, I kindly ask you to install the required third-party packages at home or any place with a stable internet connection. On your command line, please run:

```
npm uninstall -g angular-cli @angular/cli
npm cache clear
npm install -g @angular/cli@1.0.0-beta.32.3
```

Yes, that’s latest and greatest software. The speaker’s got a nerve!

Next, navigate to a folder of your choice and execute:

```
git clone git@github.com:chliebel/hackschool-angular.git
cd hackschool-angular
npm install   # or yarn (if installed)
```

If SSH doesn’t work for you, feel free to use the HTTPS checkout URL: `https://github.com/chliebel/hackschool-angular.git`

That’s all for now! See you on Saturday. If you have any questions in the meantime, feel free to [drop me a Tweet](https://twitter.com/chris_liebel).
