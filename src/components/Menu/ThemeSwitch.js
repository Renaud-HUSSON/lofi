const ThemeSwitch = () => {
  return <div>
    <div className="flex flex-col md:flex-row justify-between items-center p-6">
      <p>THEME:</p>
      <div className="flex items-center">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="13" cy="13" rx="6.8087" ry="6.80952" fill="#DECA19"/>
          <rect x="12.3811" width="1.23795" height="5.57143" fill="#C4C4C4"/>
          <rect x="12.3811" y="20.4286" width="1.23795" height="5.57143" fill="#C4C4C4"/>
          <rect x="12.3811" y="20.4286" width="1.23795" height="5.57143" fill="#C4C4C4"/>
          <rect x="12.3795" width="1.23795" height="5.57143" fill="#DECA19"/>
          <rect x="12.3811" y="20.4286" width="1.23795" height="5.57143" fill="#DECA19"/>
          <rect width="1.23798" height="5.57126" transform="matrix(0.865645 -0.500658 0.500568 0.865697 5.95702 2.05618)" fill="#DECA19"/>
          <rect width="1.23798" height="5.57126" transform="matrix(0.865645 -0.500658 0.500568 0.865697 16.1826 19.7406)" fill="#DECA19"/>
          <rect width="1.23806" height="5.57092" transform="matrix(0.499451 -0.866342 0.86629 0.499542 1.43011 7.04285)" fill="#DECA19"/>
          <rect width="1.23806" height="5.57093" transform="matrix(0.499451 -0.866342 0.86629 0.499542 19.1256 17.2469)" fill="#DECA19"/>
          <rect width="1.23806" height="5.57093" transform="matrix(-0.506005 -0.862531 0.862477 -0.506096 2.10205 20.1126)" fill="#DECA19"/>
          <rect width="1.23806" height="5.57093" transform="matrix(-0.506005 -0.862531 0.862477 -0.506096 19.7197 9.77472)" fill="#DECA19"/>
          <rect width="1.23798" height="5.57126" transform="matrix(-0.867112 -0.498113 0.498023 -0.867164 7.06265 24.5811)" fill="#DECA19"/>
          <rect width="1.23798" height="5.57126" transform="matrix(-0.867112 -0.498113 0.498023 -0.867164 17.2363 6.86673)" fill="#DECA19"/>
          <rect x="0.00326538" y="13.6534" width="1.2381" height="5.57076" transform="rotate(-90.1513 0.00326538 13.6534)" fill="#DECA19"/>
          <rect x="20.4293" y="13.6" width="1.23809" height="5.57076" transform="rotate(-90.1466 20.4293 13.6)" fill="#DECA19"/>
        </svg>

        <div className="w-10 h-5 bg-white rounded-xl relative cursor-pointer mx-3">
          <div className="w-4 h-4 bg-black rounded-lg absolute left-0.5 top-0.5"></div>
        </div>

        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M24 19.9836C22.6362 20.6008 21.1218 20.9444 19.527 20.9444C13.5356 20.9444 8.67866 16.0942 8.67866 10.1111C8.67866 5.6691 11.3558 1.8515 15.1868 0.179594C14.4814 0.061479 13.7569 0 13.018 0C5.82835 0 0 5.8203 0 13C0 20.1797 5.82835 26 13.018 26C17.6337 26 21.6884 23.6011 24 19.9836Z" fill="white"/>
        </svg>
      </div>

    </div>
  </div>
}

export default ThemeSwitch