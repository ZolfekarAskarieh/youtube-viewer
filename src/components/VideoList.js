import React from "react";
import Video from "./Video";

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    const renderedList = videos.map((video, idx) => {
      return <Video key={idx} video={video} onVideoSelect={onVideoSelect} />;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
  }
}

VideoList.defaultProps = {
  videos: []
};

export default VideoList;
