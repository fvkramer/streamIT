import React from 'react';

const iTag = {
  width: '30px',
  height: '30px',
};

const homeStyle = {
  display: 'block',
  width: '100%',
  height: '100%',
  fill: '#909090',
};

const SideBarMain = () => (
  <div className="sidebar-main-top">
    <ul className="sidebar-ul-links">
      <li>
        <a href="">
          <i style={iTag}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={homeStyle}>
              <g className="style-scope yt-icon">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8" className="style-scope yt-icon" />
              </g>
            </svg>
          </i>
          <span>Home</span>
        </a>
      </li>

      <li>
        <a href="">
          <i style={iTag}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={homeStyle}>
              <g className="style-scope yt-icon">
                <path d="M17.53 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66-1.46-1.46-1.78-3.87-.85-5.72-.9.23-1.75.75-2.45 1.32C8.9 6.4 7.9 10.07 9.1 13.22c.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12-.06-.05-.1-.1-.15-.17-1.1-1.43-1.28-3.48-.53-5.12C5.87 10 5 12.3 5.12 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.3 1.5-6.6l-.13-.26c-.2-.45-.47-.87-.78-1.25zm-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.38-2.2-.16-2.88-.82 1.2-.28 1.9-1.16 2.1-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.2-2.06.15.38.35.76.58 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.26z" className="style-scope yt-icon" />
              </g>
            </svg>
          </i>

          {/* <i className="core-links-trending-icon" /> */}
          <span>Trending</span>
        </a>

      </li>
      <li>
        <a href="">
          <i style={iTag}>
            <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="style-scope yt-icon" style={homeStyle}>
              <g className="style-scope yt-icon">
                <path d="M11.9 3.75c-4.55 0-8.23 3.7-8.23 8.25H.92l3.57 3.57.04.13 3.7-3.7H5.5c0-3.54 2.87-6.42 6.42-6.42 3.54 0 6.4 2.88 6.4 6.42s-2.86 6.42-6.4 6.42c-1.78 0-3.38-.73-4.54-1.9l-1.3 1.3c1.5 1.5 3.55 2.43 5.83 2.43 4.58 0 8.28-3.7 8.28-8.25 0-4.56-3.7-8.25-8.26-8.25zM11 8.33v4.6l3.92 2.3.66-1.1-3.2-1.9v-3.9H11z" className="style-scope yt-icon" />
              </g>
            </svg>
          </i>
          <span>History</span>
        </a>
      </li>
    </ul>
  </div>
);

export default SideBarMain;
