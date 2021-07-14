# Open InVidious

A minimal effort PWA that lets you quickly open youtube videos in invidious.
It only works on Android (Chrome). iOS (Safari) doesn't support share_target
API :(

## How does it work?
When the app is installed it registers itself as a [share target](https://web.dev/web-share-target/), 
which makes it possible to share youtube videos from the youtube app to it. Also works with mobile
web youtube client.

Hosted on [open-invidious.netlify.app](https://open-invidious.netlify.app)

## TODO
- Make it possible to configure preferable invidious instance.
- Make a react-native version, so it works also on iOS?