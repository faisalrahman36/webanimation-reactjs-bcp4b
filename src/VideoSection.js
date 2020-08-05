import React from 'react';
import './App.css';

function VideoSection() {
  return (
      <div className="VideoS">
          <br /> <br /> <br />
          <h1 >Mutify demo page for Panacloud Bootcamp 2020</h1>
          <p>This is just a demo page for learning purposes.</p>
          <br /><br /><br />

          <p className="myButton2">Download</p>
          <p className="myButton3">Buy</p>

    <div className="Videop">
        <video width="35%" height="35%" autoplay>
  <source src="https://mutify.app/videos/main-screen@1x.mp4" type="video/mp4" />
</video>
          </div>
          </div>
  );
}

export default VideoSection;
