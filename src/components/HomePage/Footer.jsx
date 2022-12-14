import React from "react";

import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="footer_main">
        <div className="footer_top">
          <div className="footer_paragraphs">
            <p className="footer_parag">Создать заказ</p>
            <p className="footer_parag">Как стать исполнителем</p>
            <p className="footer_parag">Журнал</p>
            <p className="footer_parag">Дополнительные услуги</p>
            <p className="footer_parag" onClick={() => navigate("/payment")}>
              Купить VIP подписку
            </p>
            <p className="footer_parag">О сервисе</p>
          </div>
          <div className="footer_media">
            <img
              className="home_page_social_media_icons"
              src="https://www.hairkult.ru/assets/templates/kult/images/download-on-app-store-badge-ru-blk.png"
              alt="error("
            />
            <img
              className="home_page_social_media_icons"
              src="https://www.seekpng.com/png/full/9-96076_get-it-on-google-play-logo-png.png"
              alt="error("
            />
            <img
              className="home_page_social_media_icons"
              src="https://iforum-ru.c.hihonor.com/ru_data/images/2020/9/22/c2f291ae-9d54-4127-80db-aeba1eba57ed.png"
              alt="error("
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
