import { Link } from "react-router-dom";

export function Main () {
  return (
    <main>  
      <section className="yemekler">

        <div className="yemekbir">
          <h3>Özel Lezzetus</h3>
          <p>Position: Absolute Acı Burger</p>
          <Link to="/order" className="siparis">
          SİPARİŞ VER
        </Link>
        </div>

        <div className="saggorseller">

        <div className="yemekiki">
          <h3>Hackatlon Burger Menü</h3>
          <Link to="/order" className="siparis">
          SİPARİŞ VER
        </Link>
        </div>

        <div className="yemekuc">
          <h3><span className="cok">Çoooook</span> hızlı npm gibi kurye</h3>
          <Link to="/order" className="siparis">
          SİPARİŞ VER
        </Link>
        </div>

        </div>

        </section>

        <section className="ikibaslik">
          <p className="renkliyazi"> en çok paketlenen menüler</p>
          <h3 className="ortayazi">Acıktıran Kodlara Doyuran Lezzetler</h3>
        </section>

      <section className ="yemekler2">
        
          <nav className="yemekler2list">
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/1.svg"/>Ramen</a>
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/2.svg"/>Pizza</a>
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/3.svg"/>Burger</a>
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/4.svg"/>French Fries</a>
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/5.svg"/>Fast Food</a>
              <a href="" className="butoniki">
                <img src="/images/iteration-2-images/icons/6.svg"/>Soft Drinks</a>
            </nav>
            </section>
    

      <section className="pizzalar">

        <div className="pizza1">
          <img src="/images/iteration-2-images/pictures/food-1.png"/>

        <div className="pizza1alt">
          <h4>Terminal Pizza</h4>
          <p> <span className="oy">4.9</span>
              <span className="goruntuleme">(200)</span>
              <span className="fiyat">60₺</span> </p>     
        </div>
        </div>

        <div className="pizza2">
          <img src="/images/iteration-2-images/pictures/food-2.png"/>

        <div className="pizza2alt">
          <h4>Position Absolute Acı Pizza</h4>
          <p> <span className="oy">4.9</span>
              <span className="goruntuleme">(200)</span>
              <span className="fiyat">60₺</span> </p>     
        </div>
        </div>

        <div className="pizza3">
          <img src="images/iteration-2-images/pictures/food-3.png"/>

        <div className="pizza3alt">
          <h4>useEffect Tavuklu Burger</h4>
          <p> <span className="oy">4.9</span>
              <span className="goruntuleme">(200)</span>
              <span className="fiyat">60₺</span> </p>     
        </div>
        </div>

            </section>
            </main>
            )}