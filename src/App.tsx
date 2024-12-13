import { useState } from "react";
import "./App.css";
import { D3Widget } from "@d3-inc/marketplace-widget";

function App() {
  const [count, setCount] = useState(0);
  const walletConnectKey = "";

  return (
    <>
      <D3Widget
        appName="Your app name"
        config={{
          appearance: "light", // light | dark | auto
          apiKey: import.meta.env.VITE_D3_API_KEY, // Get your api key from https://developers.d3.app
          tlds: [], // One or more TLDs or leave blank to list all available TLDs
          apiEndpoint: "https://api-public.d3.app",
          walletConfig: {
            walletConnectKey, // Optional. If provided, widget will use wallet-connect
          },
        }}
      />
    </>
  );
}

export default App;
