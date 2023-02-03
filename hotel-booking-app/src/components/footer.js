import React from 'react';

export default function Footer () {
    return (

      // footer component with date and other informations
      
      <footer data-testid="footer" className="text-center ptb-2 bg-dark text-white footer mt-auto">
        <span data-testid="divider"> |  </span>
        
        {/* return the current date value */}
        <b data-testid="copyright-info">{new Date().getFullYear()} Morph Rooms</b>
        <span data-testid="divider"> | </span>
        <ul data-testid="footer-links" id="footer-list">
          <li>
            <a className="footer-link" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="footer-link" href="/about">
              About us
            </a>
          </li>
          <li>
            <a className="footer-link" href="/about">
              Contact info: +094-0000000000
            </a>
          </li>
        </ul>
      </footer>
    );
};