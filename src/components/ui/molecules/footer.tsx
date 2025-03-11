import React from "react";

function Footer() {
  return (
    <footer className="py-4 bg-gray-800 text-white text-center">
      <p>&copy; {new Date().getFullYear()} Collins Maduka. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
