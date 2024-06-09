import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  return (
    <div className="btn-wrapper text-lg">
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.url}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
{socialLinks.xiaohongshu && (
  <Button
    className="btn-icon-only rounded-circle ml-1"
    // color="instagram"
    rel="noopener"
    aria-label="Xiaohongshu"
    href={socialLinks.xiaohongshu}
    target="_blank"
  >
    {/* <span className="btn-inner--icon"> */}
      <img className="icon-style btn-icon-only rounded-circle position-relative"  src="/img/icons/SimpleIconsXiaohongshu.png" alt="Xiaohongshu" />
    {/* </span> */}
  </Button>
)}

      {socialLinks.wechat && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="success"
          rel="noopener"
          aria-label="Wechat"
          href={socialLinks.linkedin}
          target="_blank"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-weixin" />
          </span>
        </Button>
      )}

      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.phone && (
        <Button
          className="btn-icon-only rounded-circle ml-1"
          color="white"
          href={socialLinks.phone}
          target="_blank"
          rel="noopener"
          aria-label="phone"
        >
          <span className="btn-inner--icon">
            <i className="fa fa-phone" />
          </span>
        </Button>
      )}

    </div>
  );
};

export default SocialLinks;
