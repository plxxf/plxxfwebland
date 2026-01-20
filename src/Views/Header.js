import React from "react";
import "./Header.css";

import webcafeLogo from "../assets/images/logo512.png";
import webcafeCup from "../assets/images/webcafe-cup-v1.png";

const Header = () => {
  return (
    <header className="wcHeader">
      <div className="wcNav">
        <div className="wcNavInner">
          {/* Left: Logo */}
          <a className="wcBrand" href="/">
            <img className="wcBrandLogo" src={webcafeLogo} alt="Webcafe" />
            <div className="wcBrandText">
              <div className="wcBrandName">Webcafe</div>
              <div className="wcBrandTagline">Automate everything</div>
            </div>
          </a>

          {/* Middle: Links */}
          <nav className="wcNavLinks" aria-label="Primary">
            <button className="wcNavLink" type="button">
              Industries and Solutions <span className="wcChevron">▾</span>
            </button>
            <button className="wcNavLink" type="button">
              Integrations <span className="wcChevron">▾</span>
            </button>
            <button className="wcNavLink" type="button">
              Resources <span className="wcChevron">▾</span>
            </button>
            <a className="wcNavLink wcNavAnchor" href="#switch">
              Switch to Mailchimp
            </a>
            <a className="wcNavLink wcNavAnchor" href="#pricing">
              Pricing
            </a>
          </nav>

          {/* Right: Controls */}
          <div className="wcNavRight">
            <button className="wcIconBtn" type="button" aria-label="Search">
              <span className="wcIcon">⌕</span>
            </button>

            <button className="wcLangBtn" type="button" aria-label="Language">
              <span className="wcGlobe">🌐</span>
              <span className="wcLang">EN</span>
              <span className="wcChevron">▾</span>
            </button>

            <div className="wcSales">
              <span className="wcSalesLabel">Sales:</span>
              <span className="wcSalesNumber">+65 800 321 2034</span>
            </div>

            <button className="wcBtn wcBtnGhost" type="button">
              Log In
            </button>
            <button className="wcBtn wcBtnPrimary" type="button">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="wcHero">
        <div className="wcHeroInner">
          {/* Left copy */}
          <div className="wcHeroLeft">
            <h1 className="wcHeroTitle">
              
              <br />
              Just for 霹雳小旋风
              <br />
              Hope you have a great day!
            </h1>

            <p className="wcHeroSubtitle">
              Hope you and me always on the way.
            </p>

            <div className="wcHeroCtas">
              <button className="wcBtn wcBtnPrimary wcBtnHero" type="button">
                Start Free Trial
              </button>
            </div>
          </div>

          {/* Right visual (simplified: only major cup visual) */}
          <div className="wcHeroRight" aria-hidden="true">
            <div className="wcVisualSimple">
              <div className="wcCardSimple">
                <div className="wcCardSimpleTop">
                  <div className="wcCardSubject">
                    <span className="wcCardLabel">Subject:</span> You forgot this
                  </div>
                </div>

                <div className="wcCardSimpleBody">
                  <div className="wcEmailMockSimple">
                    <div className="wcEmailHeader">
                      <div className="wcEmailBrand">WEBCAFE</div>
                      <div className="wcEmailHeadline">It just might be your new favorite brew</div>
                    </div>

                    <div className="wcEmailImageWrapSimple">
                      <img className="wcCupImgSimple" src={webcafeCup} alt="" />
                    </div>

                    <button className="wcBuyBtn" type="button">
                      Buy it
                    </button>
                  </div>
                </div>
              </div>

              {/* Soft background glow (subtle, improves clarity) */}
              <div className="wcVisualGlow" />
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
