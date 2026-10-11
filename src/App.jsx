import { useState } from "react";
import "./App.css";
import "./components.css";

import { Header } from "./Components/header";
import { Section } from "./Components/section";
import { Main } from "./Components/htmlMain";
import { Footer } from "./Components/footer";

import { Order } from "./Components/order";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Siparis } from "./Components/siparis";

function Home() {
  return (
    <>
      <Header />
      <Section />
      <Main />
      <Footer />
    </>
  );
}

function App() {
  const [siparis, setSiparis] = useState(null);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route
          path="/order"
          render={() => (
            <Order setSiparis={setSiparis} />
          )}
        />

        <Route
          path="/siparis"
          render={() => (
            <Siparis siparis={siparis} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;