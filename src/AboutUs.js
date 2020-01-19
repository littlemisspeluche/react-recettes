import React from "react";
import "./AboutUs.css";
import LogoAboutUs from "./assets/img/about-logo@2x.png";
import shapeIcon from "./assets/img/shape.svg";
import pathIcon from "./assets/img/path.svg";

export default function AboutUs() {
  return (
    <div className="about-us">
      <h3>ABOUT US</h3>
      <div className="about-us-content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque
          viverra justo nec ultrices dui sapien eget mi. Eu volutpat odio
          facilisis mauris sit amet massa vitae tortor. Arcu non odio euismod
          lacinia at. Sit amet est placerat in egestas erat. Id faucibus nisl
          tincidunt eget nullam non nisi est sit. Sit amet est placerat in
          egestas erat. Ut tortor pretium viverra suspendisse potenti nullam ac.
          Elementum nibh tellus molestie nunc non. Pellentesque dignissim enim
          sit amet venenatis.
          <br />
          <br /> Lorem ipsum dolor sit amet consectetur. At consectetur lorem
          donec massa sapien faucibus et molestie. Nunc lobortis mattis aliquam
          faucibus purus in massa tempor. Nibh sed pulvinar proin gravida
          hendrerit. Sagittis eu volutpat odio facilisis.
        </p>
        <div className="about-us-logo">
          <img src={LogoAboutUs} className="logo-icon" alt="logo-icon" />
        </div>
        <br />
        <div className="about-download">
          <div className="download-apple">
            <img src={shapeIcon} className="apple-icon" alt="apple-icon" />
            <p>
              <span className="apple-text1">Download on the</span>
              <br />
              <span className="apple-text2">App Store</span>
            </p>
          </div>
          <div className="download-android">
            <img src={pathIcon} className="android-icon" alt="android-icon" />
            <p>
              <span className="android-text1">Get it on</span>
              <br />
              <span className="android-text2">Google Play</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
