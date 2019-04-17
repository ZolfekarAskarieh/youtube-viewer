import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";

class App extends React.Component {
  state = { loading: false, videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit("football");
  }
  onTermSubmit = async term => {
    this.setState({
      loading: true
    });

    const res = await youtube.get("/search", {
      params: { q: term }
    });
    this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
      loading: false
    });
  };
  onVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo
    });
  };
  render() {
    const { videos, selectedVideo, loading } = this.state;
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {selectedVideo && <VideoDetails video={selectedVideo} />}
            </div>
            <div className="five wide column">
              {!loading ? (
                <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
              ) : (
                "Loading..."
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
