import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Footer } from "./footer";
import "./Order.css";

const malzemeler = [
  "Pepperoni",
  "Sosis",
  "Kanada Jambonu",
  "Tavuk Izgara",
  "Soğan",
  "Domates",
  "Mısır",
  "Sucuk",
  "Jalapeno",
  "Sarımsak",
  "Biber",
  "Ananas",
  "Kabak",
];

export function Order({ setSiparis }) {
  const history = useHistory();

  const [boyut, setBoyut] = useState("");
  const [hamur, setHamur] = useState("");

  const [seciliMalzemeler, setSeciliMalzemeler] = useState([
    "Pepperoni",
    "Sosis",
    "Mısır",
    "Jalapeno",
    "Ananas",
  ]);

  const [siparisNotu, setSiparisNotu] = useState("");
  const [adet, setAdet] = useState(1);
  const [hata, setHata] = useState("");
  const [yukleniyor, setYukleniyor] = useState(false);

  const boyutFiyati = {
    S: 0,
    M: 20,
    L: 40,
  };

  const secimlerToplam =
    (boyutFiyati[boyut] || 0) + seciliMalzemeler.length * 5;

  const toplamFiyat = (85.5 + secimlerToplam) * adet;

  function malzemeSec(malzeme) {
    if (seciliMalzemeler.includes(malzeme)) {
      setSeciliMalzemeler(
        seciliMalzemeler.filter((secim) => secim !== malzeme)
      );
    } else if (seciliMalzemeler.length < 10) {
      setSeciliMalzemeler([...seciliMalzemeler, malzeme]);
    }
  }
  
function siparisVer(event) {
  event.preventDefault();
  setHata("");

  if (boyut === "" || hamur === "") {
    setHata("Boyut ve hamur seçmelisin.");
    return;
  }

  if (
    seciliMalzemeler.length < 4 ||
    seciliMalzemeler.length > 10
  ) {
    setHata("4 ile 10 arasında malzeme seçmelisin.");
    return;
  }

const siparis = {
  boyut: boyut,
  hamur: hamur,
  malzemeler: seciliMalzemeler,
  not: siparisNotu,
  adet: adet,
  secimlerToplam: secimlerToplam,
  toplam: toplamFiyat,
};

  setYukleniyor(true);

  axios
    .post("https://reqres.in/api/pizza", siparis, {
      headers: {
        "x-api-key": "free_user_3KUxntufRhJ0T1hq152mfdeJ1ca",
      },
    })
    .then(function (cevap) {
      console.log("Sipariş gönderildi:", cevap.data);

      setSiparis(siparis);
      history.push("/siparis");
    })
    .catch(function (hata) {
      console.error("Hata mesajı:", hata.message);
      setHata("Sipariş gönderilemedi.");
    })
    .finally(function () {
      setYukleniyor(false);
    });
}

  return (
    <>
      <div className="siparis-sayfasi">
        <header className="ust-kisim">
          <h1>Teknolojik Yemekler</h1>
        </header>

        <div className="hero-section">
          <div className="hero-banner">
            <img
              src="/images/iteration-2-images/pictures/form-banner.png"
              alt="Pizza"
              className="pizza-resim"
            />
          </div>

          <div className="hero-icerik">
            <p className="yol">
              Anasayfa - <span className="aktif-yol">Sipariş Oluştur</span>
            </p>

            <h2>Position Absolute Acı Pizza</h2>

            <div className="fiyat-satiri">
              <h3>85.50₺</h3>

              <div className="puan-bilgisi">
                <span>4.9</span>
                <span>(200)</span>
              </div>
            </div>

            <p className="aciklama">
              Frontend Dev olarak hâlâ position:absolute kullanıyorsan
              bu çok acı pizza tam sana göre. Pizza, domates, peynir
              ve çeşitli malzemelerle hazırlanan lezzetli bir yemektir.
            </p>
          </div>
        </div>

        <main className="form-icerik">
          <form className="siparis-formu" onSubmit={siparisVer}>
            <div className="form-satiri">
              <div className="form-alani">
                <label className="alan-baslik">
                  Boyut Seç <span className="zorunlu">*</span>
                </label>

                <div className="boyut-secimi">
                  {["S", "M", "L"].map((secenek) => (
                    <label
                      key={secenek}
                      className={`boyut-label ${
                        boyut === secenek ? "secili" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="boyut"
                        value={secenek}
                        checked={boyut === secenek}
                        onChange={(event) =>
                          setBoyut(event.target.value)
                        }
                        required
                      />

                      <span>{secenek}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-alani">
                <label htmlFor="hamur" className="alan-baslik">
                  Hamur Seç <span className="zorunlu">*</span>
                </label>

                <select
                  id="hamur"
                  value={hamur}
                  onChange={(event) => setHamur(event.target.value)}
                  required
                >
                  <option value="">Hamur kalınlığı seç</option>
                  <option value="İnce">İnce Hamur</option>
                  <option value="Normal">Normal Hamur</option>
                  <option value="Kalın">Kalın Hamur</option>
                </select>
              </div>
            </div>

            <div className="form-alani">
              <h3 className="alan-baslik">Ek Malzemeler</h3>

              <p className="sub-text">
                En az 4, en fazla 10 malzeme seçebilirsiniz. Her biri 5₺.
              </p>

              <div className="malzeme-listesi">
                {malzemeler.map((malzeme) => (
                  <label key={malzeme} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={seciliMalzemeler.includes(malzeme)}
                      onChange={() => malzemeSec(malzeme)}
                    />

                    <span className="custom-checkbox"></span>
                    <span className="malzeme-adi">{malzeme}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-alani">
              <label htmlFor="siparisNotu" className="alan-baslik">
                Sipariş Notu
              </label>

              <textarea
                id="siparisNotu"
                value={siparisNotu}
                onChange={(event) => setSiparisNotu(event.target.value)}
                placeholder="Siparişine eklemek istediğin bir not var mı?"
                rows={2}
              />
            </div>

            <hr className="cizgi" />

            <div className="siparis-alt-kisim">
              <div className="adet-secimi">
                <button
                  type="button"
                  className="adet-btn"
                  onClick={() => setAdet(Math.max(1, adet - 1))}
                >
                  -
                </button>

                <span className="adet-sayisi">{adet}</span>

                <button
                  type="button"
                  className="adet-btn"
                  onClick={() => setAdet(adet + 1)}
                >
                  +
                </button>
              </div>

              <div className="toplam-ve-buton">
                <div className="toplam-kutusu">
                  <h3>Sipariş Toplamı</h3>

                  <div className="toplam-satir">
                    <span>Seçimler</span>
                    <span>{secimlerToplam.toFixed(2)}₺</span>
                  </div>

                  <div className="toplam-satir kirmizi">
                    <span>Toplam</span>
                    <span>{toplamFiyat.toFixed(2)}₺</span>
                  </div>
                </div>

                <button
                  className="siparis-butonu"
                  type="submit"
                  disabled={yukleniyor}
                >
                  {yukleniyor ? "GÖNDERİLİYOR..." : "SİPARİŞ VER"}
                </button>
              </div>
            </div>

            {hata && <p className="hata-mesaji">{hata}</p>}
          </form>
        </main>
      </div>

      <Footer />
    </>
  );
}