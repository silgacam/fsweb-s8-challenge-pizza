import { Link } from "react-router-dom";

export function Header () {
   return (
    <header>
    <img src="images/iteration-1-images/logo.svg" alt="Teknolojik Yemekler" className="logo"/>
      <p className="firsat">fırsatı kaçırma</p>
      <h1 className="anareklam">KOD ACIKTIRIR <br/>
        PIZZA, DOYURUR </h1>
        <Link to="/order" className="btn">
          SİPARİŞ VER
        </Link>
        </header>
)}