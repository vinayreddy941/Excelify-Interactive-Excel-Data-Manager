// Header.js
import React, { useEffect, useState } from "react";
import "./style.css"; // Create a separate CSS file for styling if needed

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const bgHeader = () => {
      const header = document.getElementById("header");
      const headerContent = document.querySelector(".header-content");

      if (window.scrollY >= 50) {
        header.classList.add("bg-header");
        headerContent.classList.add("text-dark");
        setIsScrolled(true);
      } else {
        header.classList.remove("bg-header");
        headerContent.classList.remove("text-dark");
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", bgHeader);

    return () => {
      window.removeEventListener("scroll", bgHeader);
    };
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <header id="header">
      <div className={`header-content ${isScrolled ? "text-dark" : ""}`}>
        <div className="header-left">Vinay Reddy</div>
        {/* Add other header elements if needed */}
      </div>
    </header>
  );
};

export default Header;
