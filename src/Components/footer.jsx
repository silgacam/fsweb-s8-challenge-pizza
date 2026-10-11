export function Footer () {
  return (
    <footer className="footer"> 
     <div className="iletisim">
      <img src="/images/iteration-2-images/footer/logo-footer.svg" className="footerlogo" />
      <ul className="iletisimbilgileri">
        <li><img src="images/iteration-2-images/footer/icons/icon-1.png" className="kontakikon"/>
          <p>341 Londonderry Road,<br/>Istanbul Türkiye</p>
        </li>
        <li><img src="images/iteration-2-images/footer/icons/icon-2.png" className="kontakikon"/>
          <a href="">aciktim@teknolojikyemekler.com</a>
        </li>
        <li><img src="images/iteration-2-images/footer/icons/icon-3.png" className="kontakikon"/>
          <a href="">+90 216 123 45 67</a>
        </li>
      </ul>
    </div>
     <div className="hotmenu">
      <h3>Hot Menu</h3>
      <ul>
        <li><a href="">Terminal Pizza</a></li>
        <li><a href="">5 Kişilik Hackathlon Pizza</a></li>
        <li><a href="">useEffect Tavuklu Pizza</a></li>
        <li><a href="">Beyaz Console Frosty</a></li>
        <li><a href="">Testler Geçti Mutlu Burger</a></li>
        <li><a href="">Position Absolute Acı Burger</a></li>
      </ul>
    </div>

   
    <div className="instagorseller">
      <h3>Instagram</h3>
      <div className="insta-grid">
        <img src="images/iteration-2-images/footer/insta/li-0.png" alt="Instagram 1" />
        <img src="images/iteration-2-images/footer/insta/li-1.png" alt="Instagram 2" />
        <img src="images/iteration-2-images/footer/insta/li-2.png" alt="Instagram 3" />
        <img src="images/iteration-2-images/footer/insta/li-3.png" alt="Instagram 4" />
        <img src="images/iteration-2-images/footer/insta/li-4.png" alt="Instagram 5" />
        <img src="images/iteration-2-images/footer/insta/li-5.png" alt="Instagram 6" />
      </div>
    </div>
        

        <div className="footeralt">
        <p className="footeraltyazi"> © 2023 Teknolojik Yemekler. Tüm hakları saklıdır.</p>
        <img src="images/iteration-2-images/footer/insta/twitter-brands-solid-full.svg" alt="Twitter"/>
        </div>

      </footer>  
  )}