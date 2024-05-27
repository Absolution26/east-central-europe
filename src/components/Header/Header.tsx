import React from "react";
import cn from "classnames";

interface Props {
  year: string;
}

export const Header: React.FC<Props> = ({ year }) => {
  return (
    <header className="header">
      <div className="header__row">
        <ul className="header__links">
          <li className="header__link">
            <a href="/" className="link link--linkedin" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          <li className="header__link">
            <a href="/" className="link link--instagram" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li className="header__link">
            <a href="/" className="link link--facebook" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          </li>
        </ul>

        <h1 className="header__title title">
          Центрально-Східна Європа кінця XVIII cт.
        </h1>
      </div>

      <div
        className={cn("header__row", "header__row--bottom", { hidden: !year })}
      >
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="/" className="nav__link">
                Фото
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Інформація
              </a>
            </li>
            <li className="nav__item">
              <a href="/" className="nav__link">
                Попереднє фото
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
