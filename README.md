# D3 DNS Explorer

This app allows you to resolve Web3 DNS address for several chains by using the [DNS Connect SDK](https://docs.d3.app/resolve-d3-names#d3-connect-sdk)

## Setup

Clone this repo and install deps:

```bash
git clone https://github.com/jhuang314/dnsapp.git

cd dnsapp

npm install
```

Obtain a [D3 api key](https://developers.d3.app), and create a .env file

```bash
touch .env
echo 'VITE_D3_API_KEY=<YOUR_D3_API_KEY>' >> .env
```

```bash
npm run dev
```

Open up localhost:5173

## Docker stuff

You can productionize the app and deploy with docker using the supplied Dockerfile.

```bash
docker build -t jh3141/dnsapp:0.0.3 .
```


## Technologies

This app uses Vite + React + Bulma components, with [DNS Connect SDK](https://docs.d3.app/resolve-d3-names#d3-connect-sdk) to handle resolving.
It also uses the [D3 Embed widget](https://docs.d3.app/channel-partner-integrations/d3-embed), which supports searches and purchasing domains.
