import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-50 pt-20">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start"> */}
          {/* <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Twitter</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </p>
          </div> */}
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Contacts</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="tel:+971559374070">
                <span className="text-[15px] ml-[6px]">+971559374070</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="tel:+249118515166">
                <span className="text-[15px] ml-[6px]">+249118515166</span>
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a href="mailto: babikir.mosalih@email.com">
                <span className="text-[15px] ml-[6px]">
                  babikir.mosalih@gmail.com
                </span>
              </a>
              <a href="tel:+249118515166">call me</a>
            </p>
          </div> */}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; Created by a human from the
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 uppercase">
            {" "}
            matrix.{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
