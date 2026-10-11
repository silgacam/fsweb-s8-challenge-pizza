import { useState } from 'react'
import './App.css'
import "./components.css"
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
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Order} />
        <Route path="/siparis" component={Siparis} />
      </Switch>
    </BrowserRouter>
  );
}


export default App;