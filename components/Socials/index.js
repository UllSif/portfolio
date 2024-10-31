import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";
import {useTheme} from "next-themes";

const Socials = ({ className }) => {
  const {theme, setTheme} = useTheme();
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
            <img
                className="h-6 m-2"
                src={`/images/${
                    theme === "dark" ? social.logoDark : social.logo
                }`}
            ></img>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
