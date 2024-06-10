import React from "react";
import cn from "classnames";

interface Props {
  year: string;
}

export const Header: React.FC<Props> = ({ year }) => {
  return (
    <header id="top" className="header">
      <div className="header__row">
        <ul className="header__links">
          <li className="header__link">
            <a
              href="https://www.linkedin.com/in/anastasiia-lisnycha-82889427a/"
              className="link link--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="header__link">
            <a
              href="https://www.instagram.com/_sierra_rosa/?igsh=dXdkN3pwcXhjb3Y0&utm_source=qr"
              className="link link--instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="header__link">
            <a
              href="https://www.facebook.com/people/Anastasiia-Kazantseva/pfbid0s7zraJ67v1paudvTv4oSaqaWkuJZMDjP8Jnm4PaK8h95Then36VZD7fi1uk5fYYbl/"
              className="link link--facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>

        <h1 className="header__title title">
          <a href="#top" className="title__link">
            Центрально-Східна Європа кінця XVIII cт.
          </a>
        </h1>
      </div>

      <div
        className={cn("header__row", "header__row--bottom", { hidden: !year })}
      >
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#territories" className="nav__link">
                Мапа
              </a>
            </li>
            <li className="nav__item">
              <a href="#information" className="nav__link">
                Інформація
              </a>
            </li>
            <li className="nav__item">
              <a href="#emperors" className="nav__link">
                Правителі
              </a>
            </li>
            <li className="nav__item">
              <a href="#main-events" className="nav__link">
                Основні події
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
