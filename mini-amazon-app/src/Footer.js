import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__top">
        <div className="footer__topSection">
          <div className="footer__topSectionTitle">
            <h3>Get To Know Us</h3>
          </div>
          <div className="footer__topSectionItems">
            <p>Careers</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Blog</p>
          </div>
          <div className="footer__topSectionItems">
            <p>About Amazon</p>
          </div>
        </div>
        <div className="footer__topSection">
          <div className="footer__topSectionTitle">
            <h3>Make Money with us</h3>
          </div>
          <div className="footer__topSectionItems">
            <p>Sell on Amazon</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Sell Your Apps on Amazon</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Become an Affiliate</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Host an Amazon Hub</p>
          </div>
        </div>
        <div className="footer__topSection">
          <div className="footer__topSectionTitle">
            <h3>Amazom Payment Products</h3>
          </div>
          <div className="footer__topSectionItems">
            <p>Amazon.com Store Card</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Amazon Business Card</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Shop with Points</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Amazon Currency Converter</p>
          </div>
        </div>
        <div className="footer__topSection">
          <div className="footer__topSectionTitle">
            <h3>Lst Us Help You</h3>
          </div>
          <div className="footer__topSectionItems">
            <p>Your Account</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Your Orders</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Amazon Prime</p>
          </div>
          <div className="footer__topSectionItems">
            <p>Amazon Assistant</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <p>
          This is a personal project build by Xinxin in order to practice and
          learn, not a real Amazon website!
        </p>
        <p className="copyright">
          Copyright © 2020 Powered by Xinxin(Stephen) Wang
        </p>
      </div>
    </div>
  );
}

export default Footer;
