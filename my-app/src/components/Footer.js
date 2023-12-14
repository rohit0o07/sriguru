import React from "react";
import image from "../assets/images/logo-791027083.png";
import { CiFacebook } from "react-icons/ci";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import "../components/Footer.css";

function Footer() {
  return (
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <img
              src={image}
              alt="logo"
              style={{ width: "163.46px", height: "63px" }}
            />
            <br />
            <h3 style={{ fontSize: "18px" }}>
              SRI GURU INFRA BUILDERS PVT LTD
            </h3>
          </div>
          <div class="footer-col">
            <h4>
              <span>U</span>seful Tags
            </h4>
            <br />
            <li>
              <a href="#"># Sri Guru infra Builders Pvt ltd</a>
            </li>
          </div>
          <div class="footer-col">
            <h4>
              <span>Q</span>uick Links
            </h4>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Updates</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Media</a>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>
              <span>R</span>each Us
            </h4>
            <ul>
              <li>
                <a href="#">Email Us</a>
                <br />
                <a href="#">Sriguruinfrabuilderspvtltd@gmail.com</a>
              </li>
              <li>
                <a href="#">Call Us</a>
                <br />
                <p>+91 9459921234</p>
                <p>+91 9459931234</p>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Address</a>
                <br />
                <p>
                  Flat 201,202, Survey No 34, CSR Pride,
                  <br /> Timberlake Colony, Beside KIMS <br /> Gachibowli,
                  Raidurgam, Beside KIMS
                  <br /> Gachibowli Hyderabad Telangana <br /> India - 500008 .
                </p>
              </li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>
              <span>S</span>ocials
            </h4>
            <div class="social-links">
              <li>
                <a href="#">
                  <CiFacebook style={{ color: "lightgreen" }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <TiSocialLinkedinCircular style={{ color: "lightgreen" }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaInstagram style={{ color: "lightgreen" }} />
                </a>
              </li>
              <li>
                <a href="#">
                  <IoIosGlobe style={{ color: "lightgreen" }} />
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-lang">
        <select
          class="goog-te-combo"
          aria-label="Language Translate Widget"
          data-ddg-inputType="unknown"
        >
          <option value="af">Afrikaans</option>
          <option value="sq">Albanian</option>
          <option value="am">Amharic</option>
          <option value="ar">Arabic</option>
          <option value="hy">Armenian</option>
          <option value="as">Assamese</option>
          <option value="ay">Aymara</option>
          <option value="az">Azerbaijani</option>
          <option value="bm">Bambara</option>
          <option value="eu">Basque</option>
          <option value="be">Belarusian</option>
          <option value="bn">Bengali</option>
          <option value="bho">Bhojpuri</option>
          <option value="bs">Bosnian</option>
          <option value="bg">Bulgarian</option>
          <option value="ca">Catalan</option>
          <option value="ceb">Cebuano</option>
          <option value="ny">Chichewa</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="zh-TW">Chinese (Traditional)</option>
          <option value="co">Corsican</option>
          <option value="hr">Croatian</option>
          <option value="cs">Czech</option>
          <option value="da">Danish</option>
          <option value="dv">Dhivehi</option>
          <option value="doi">Dogri</option>
          <option value="nl">Dutch</option>
          <option value="en">English</option>
          <option value="eo">Esperanto</option>
          <option value="et">Estonian</option>
          <option value="ee">Ewe</option>
          <option value="tl">Filipino</option>
          <option value="fi">Finnish</option>
          <option value="fr">French</option>
          <option value="fy">Frisian</option>
          <option value="gl">Galician</option>
          <option value="ka">Georgian</option>
          <option value="de">German</option>
          <option value="el">Greek</option>
          <option value="gn">Guarani</option>
          <option value="gu">Gujarati</option>
          <option value="ht">Haitian Creole</option>
          <option value="ha">Hausa</option>
          <option value="haw">Hawaiian</option>
          <option value="iw">Hebrew</option>
          <option value="hi">Hindi</option>
          <option value="hmn">Hmong</option>
          <option value="hu">Hungarian</option>
          <option value="is">Icelandic</option>
          <option value="ig">Igbo</option>
          <option value="ilo">Ilocano</option>
          <option value="id">Indonesian</option>
          <option value="ga">Irish Gaelic</option>
          <option value="it">Italian</option>
          <option value="ja">Japanese</option>
          <option value="jw">Javanese</option>
          <option value="kn">Kannada</option>
          <option value="kk">Kazakh</option>
          <option value="km">Khmer</option>
          <option value="rw">Kinyarwanda</option>
          <option value="gom">Konkani</option>
          <option value="ko">Korean</option>
          <option value="kri">Krio</option>
          <option value="ku">Kurdish (Kurmanji)</option>
          <option value="ckb">Kurdish (Sorani)</option>
          <option value="ky">Kyrgyz</option>
          <option value="lo">Lao</option>
          <option value="la">Latin</option>
          <option value="lv">Latvian</option>
          <option value="ln">Lingala</option>
          <option value="lt">Lithuanian</option>
          <option value="lg">Luganda</option>
          <option value="lb">Luxembourgish</option>
          <option value="mk">Macedonian</option>
          <option value="mai">Maithili</option>
          <option value="mg">Malagasy</option>
          <option value="ms">Malay</option>
          <option value="ml">Malayalam</option>
          <option value="mt">Maltese</option>
          <option value="mi">Maori</option>
          <option value="mr">Marathi</option>
          <option value="mni-Mtei">Meiteilon (Manipuri)</option>
          <option value="lus">Mizo</option>
          <option value="mn">Mongolian</option>
          <option value="my">Myanmar (Burmese)</option>
          <option value="ne">Nepali</option>
          <option value="no">Norwegian</option>
          <option value="or">Odia (Oriya)</option>
          <option value="om">Oromo</option>
          <option value="ps">Pashto</option>
          <option value="fa">Persian</option>
          <option value="pl">Polish</option>
          <option value="pt">Portuguese</option>
          <option value="pa">Punjabi</option>
          <option value="qu">Quechua</option>
          <option value="ro">Romanian</option>
          <option value="ru">Russian</option>
          <option value="sm">Samoan</option>
          <option value="sa">Sanskrit</option>
          <option value="gd">Scots Gaelic</option>
          <option value="nso">Sepedi</option>
          <option value="sr">Serbian</option>
          <option value="st">Sesotho</option>
          <option value="sn">Shona</option>
          <option value="sd">Sindhi</option>
          <option value="si">Sinhala</option>
          <option value="sk">Slovak</option>
          <option value="sl">Slovenian</option>
          <option value="so">Somali</option>
          <option value="es">Spanish</option>
          <option value="su">Sundanese</option>
          <option value="sw">Swahili</option>
          <option value="sv">Swedish</option>
          <option value="tg">Tajik</option>
          <option value="ta">Tamil</option>
          <option value="tt">Tatar</option>
          <option value="te">Telugu</option>
          <option value="th">Thai</option>
          <option value="ti">Tigrinya</option>
          <option value="ts">Tsonga</option>
          <option value="tr">Turkish</option>
          <option value="tk">Turkmen</option>
          <option value="ak">Twi</option>
          <option value="uk">Ukrainian</option>
          <option value="ur">Urdu</option>
          <option value="ug">Uyghur</option>
          <option value="uz">Uzbek</option>
          <option value="vi">Vietnamese</option>
          <option value="cy">Welsh</option>
          <option value="xh">Xhosa</option>
          <option value="yi">Yiddish</option>
          <option value="yo">Yoruba</option>
          <option value="zu">Zulu</option>
        </select>
        <p style={{ color: "white" }}>Powered by GoogleTranslateTranslate</p>
      </div>
      <hr />
      <div className="footer-last">
        <li>@ 2023 Sri Guru Infra Builders Pvt Ltd</li>
        <li>SiteMap</li>
        <li>9446 views</li>
        <li>Report Abuse</li>
      </div>
      <div>
        <a
          class=""
          target="_blank"
          rel="noopener nofollow"
          href="https://api.whatsapp.com/send?phone=919459921234&amp;text=Hi, Sri Guru Infra Builders Pvt Ltd need more information about Sri Guru Infra Builders Pvt Ltd. please contact me."
        >
          <img
            class="quick-float-icon"
            src="https://sriguruinfrabuilders.com/img/svg-icons/whatsapp.svg"
            alt="WhatsApp"
            title="message Sri Guru Infra Builders Pvt Ltd on WhatsApp"
          />
        </a>
        <a
          class="_click_record"
          data-websiteid="1506813"
          data-type="map"
          target="_blank"
          rel="noopener nofollow"
          href="https://www.google.com/maps/?q=380.0,380.0"
        >
          <img
            class="quick-float-icon"
            src="https://sriguruinfrabuilders.com/img/svg-icons/google.svg"
            alt="Google Map"
            title="view Sri Guru Infra Builders Pvt Ltd on google map"
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;
