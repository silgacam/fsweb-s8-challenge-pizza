import { useLocation, Link } from "react-router-dom";
import { Footer } from "./footer";
import "./siparis.css";

export function Siparis() {
  const konum = useLocation();
  const siparis = konum.state?.siparis;

  if (!siparis) {
    return (
      <>
        <div className="onay-sayfasi">
          <h1>Teknolojik Yemekler</h1>
          <h2>SİPARİŞ BİLGİSİ BULUNAMADI</h2>
          <Link to="/">Ana sayfaya dön</Link>
        </div>
        <Footer />
      </>
    );
  }

  const boyutEkFiyati = {
    S: 0,
    M: 20,
    L: 40,
  };

  const secimler =
    (boyutEkFiyati[siparis.boyut] || 0) +
    siparis.malzemeler.length * 5;

  return (
    <>
      <div className="onay-sayfasi">
        <h1>Teknolojik Yemekler</h1>
        <p className="slogan">lezzetin yolda</p>

        <h2>SİPARİŞ ALINDI</h2>

        <hr />

        <div className="onay-bilgileri">
          <h3>Position Absolute Acı Pizza</h3>

          <p>
            Boyut: <strong>{siparis.boyut}</strong>
          </p>

          <p>
            Hamur: <strong>{siparis.hamur}</strong>
          </p>

          <p>
            Ek Malzemeler:{" "}
            <strong>{siparis.malzemeler.join(", ")}</strong>
          </p>
        </div>

        <div className="onay-toplam">
          <h3>Sipariş Toplamı</h3>

          <p>
            <span>Seçimler</span>
            <strong>{secimler.toFixed(2)}₺</strong>
          </p>

          <p>
            <span>Toplam</span>
            <strong>{siparis.toplam.toFixed(2)}₺</strong>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}