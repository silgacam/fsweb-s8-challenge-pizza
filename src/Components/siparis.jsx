import React from "react";
import { Footer } from "./footer";
import "./Siparis.css";

export const Siparis = ({ siparis }) => {
  if (!siparis) {
    return (
      <>

        <main className="onay-sayfasi">
          <h2>Sipariş bilgisi bulunamadı.</h2>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
    
      <main className="onay-sayfasi">
        <h1>Teknolojik Yemekler</h1>

        <p className="slogan">lezzetin yolda</p>

        <h2>SİPARİŞ ALINDI</h2>

        <hr />

        <div className="onay-bilgileri">
          <h3>Position Absolute Acı Pizza</h3>

          <p>
            Boyut: <b>{siparis.boyut}</b>
          </p>

          <p>
            Hamur: <b>{siparis.hamur}</b>
          </p>

          <p>
            Ek Malzemeler:{" "}
            <b>{siparis.malzemeler.join(", ")}</b>
          </p>
        </div>

        <div className="onay-toplam">
          <h3>Sipariş Toplamı</h3>

          <p>
            <span>Seçimler</span>
            <span>{Number(siparis.secimlerToplam).toFixed(2)}₺</span>
          </p>

          <p>
            <span>Toplam</span>
            <b>{Number(siparis.toplam).toFixed(2)}₺</b>
          </p>
        </div>
      </main>

      <Footer />
    </>
  );
};