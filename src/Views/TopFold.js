import React,{useEffect,useState} from "react";
import "./TopFold.css";

import webcafeLogo from "../assets/images/logo512.png";
import webcafeCup from "../assets/images/webcafe-cup-v1.png";
import VideoModal from "../components/VideoModal";



const TopFold=() => {
  const [isVideoOpen,setIsVideoOpen]=useState(false);

  const videoId="e7_24mA5X8g"; // <-- change this to YOUR YouTube video id
  const videoUrl=`https://www.youtube.com/embed/e7_24mA5X8g`;

  const openVideo=() => {
    setIsVideoOpen(true);
  };

  const closeVideo=() => {
    setIsVideoOpen(false);
  };

  useEffect(() => {
    const onKeyDown=(e) => {
      if (e.key === "Escape") closeVideo();
    };

    if (isVideoOpen) {
      document.addEventListener("keydown",onKeyDown);
      document.body.style.overflow="hidden";
    }

    return () => {
      document.removeEventListener("keydown",onKeyDown);
      document.body.style.overflow="";
    };
  },[isVideoOpen]);

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
              <span className="wcSalesNumber">+65 8946 4808</span>
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
              How are you today?
            </h1>

            <p className="wcHeroSubtitle">Hope you and me always on the way.</p>

            <div className="wcHeroCtas">
              <a
                className="wcBtn wcBtnPrimary wcBtnHero"
                href="https://github.com/plxxf"
                target="_blank"
                rel="noopener noreferrer"
             >
               Start Free Trial
             </a>

              <button
                className="wcVideoBtn"
                type="button"
                onClick={openVideo}
                aria-label="Watch video"
              >
                <i className="fa-brands fa-youtube wcYoutubeIcon" aria-hidden="true" />
                <span className="wcVideoText">Watch video</span>
              </button>
            </div>
          </div>

          {/* Right visual */}
          <div className="wcHeroRight" aria-hidden="true">
            <div className="wcVisualSimple">
              <div className="wcCardSimple">
                {/* ✅ 删除 Subject 行（红框文字） */}
                <div className="wcCardSimpleBody wcCardSimpleBodyFull">
                  <div className="wcEmailMockSimple">
                    {/* ✅ 图片居中 */}
                    <div className="wcEmailCenter">
                      <img className="wcCupImgSimple" src={webcafeCup} alt="" />
                    </div>

                    {/* ✅ 删除 Buy it（红框文字/按钮） */}
                  </div>
                </div>
              </div>

              <div className="wcVisualGlow" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen ? (
        <div className="wcModalOverlay" role="dialog" aria-modal="true" aria-label="Video">
          <button className="wcModalBackdrop" type="button" onClick={closeVideo} aria-label="Close video" />
          <div className="wcModalCard">
            <button className="wcModalClose" type="button" onClick={closeVideo} aria-label="Close">
              ✕
            </button>

            <div className="wcModalFrame">
              <iframe
                title="YouTube video"
                src={videoUrl}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default TopFold;
