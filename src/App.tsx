import { useState } from "react";
import "./App.css";
import { D3Widget } from "@d3-inc/marketplace-widget";
import { DNSConnect } from "@webinterop/dns-connect";
import { Button, Form, Columns, Container } from "react-bulma-components";

const { Input, Field, Control, Label, Select } = Form;

function App() {
  const [chain, setChain] = useState("CORE");
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const walletConnectKey = "";
  const dnsConnect = new DNSConnect();

  async function resolve() {
    // Resolves `example.core` name on `CORE` blockchain
    const walletAddress = await dnsConnect.resolve(input, chain);
    if (walletAddress) {
      setResult(walletAddress);
    }
    console.log(walletAddress);
  }

  async function reverseResolve() {
    // Reverse resolves wallet address `0xaaaa` on `CORE` blockchain
    const domainName = await dnsConnect.reverseResolve(input, chain);
    if (domainName) {
      setResult(domainName);
    }
    console.log(domainName);
  }

  return (
    <>
      <Columns className="is-centered">
        <h1 className="title is-1 has-text-primary">D3 DNS Explorer</h1>
      </Columns>

      <Container className="is-max-tablet padding-top">
        <Columns>
          <Field className="column ">
            <Label>Domain to resolve</Label>
            <Control>
              <Input
                placeholder="test.core"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </Control>
          </Field>

          <Field className="column is-one-quarter">
            <Label>Select a chain</Label>
            <Control>
              <Select
                onChange={function updateChain(value) {
                  console.log(value.currentTarget.value);
                  setChain(value.currentTarget.value);
                }}
                value={chain}
              >
                <option value="ETH">ETH</option>
                <option value="BTC">BTC</option>
                <option value="BONE">BONE</option>
                <option value="CORE">CORE</option>
                <option value="VIC">VIC</option>
                <option value="MATIC">MATIC</option>
                <option value="ADA">ADA</option>
                <option value="APE">APE</option>
              </Select>
            </Control>
          </Field>
        </Columns>
      </Container>

      <Container className="is-max-tablet padding-top">
        <Columns className="is-centered">
          <Field className="column is-one-quarter">
            <Button onClick={resolve}>Resolve</Button>
          </Field>
          <Field className="column is-one-quarter">
            <Button onClick={reverseResolve}>Reverse Resolve</Button>
          </Field>
        </Columns>
      </Container>

      <Container className="is-max-tablet padding-top">
        <div>Resolved result: {result}</div>
      </Container>

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
