import React from "react";
import "./VideoItem.css";

class Video extends React.Component {
  render() {
    const { video, onVideoSelect } = this.props;
    const { title, thumbnails } = video.snippet;
    return (
      <div className="video-item item" onClick={() => onVideoSelect(video)}>
        <img className="ui image" src={thumbnails.default.url} alt={title} />
        <div className="content">
          <div className="header">{title}</div>
        </div>
      </div>
    );
  }
}

export default Video;
