import React from 'react';
import waveCafeVideo from '../video/wave-cafe-video-bg.mp4';

class HomePage extends React.Component {
  handleVideoControlClick = () => {
    const video = document.getElementById('tm-video');
    const videoControlButton = document.getElementById('tm-video-control-button');

    if (video.paused) {
      video.play();
      videoControlButton.classList.remove('fa-play');
      videoControlButton.classList.add('fa-pause');
    } else {
      video.pause();
      videoControlButton.classList.remove('fa-pause');
      videoControlButton.classList.add('fa-play');
    }
  }

  render() {
    return (
      <div className="tm-video-wrapper">
        <i
          id="tm-video-control-button"
          className="fas fa-pause"
          onClick={this.handleVideoControlClick}
        ></i>
        <video autoPlay muted loop id="tm-video">
          <source src={waveCafeVideo} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default HomePage;
