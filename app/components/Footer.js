import React from 'react';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div id="footer">
      <p>
        Website &copy; Copyright Aryan Srivastava { currentYear } <br />
        <a href="https://newsapi.org/" target="_blank">Powered by News API</a>
      </p>
    </div>
  );
}

export default Footer;