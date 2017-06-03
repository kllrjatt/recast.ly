// extend a react class 
class App extends React.Component {
  // add constructor pass props
  constructor(props) {
    // add super and pass props
    super(props);
    // add state 
    this.state = {
      // add video - video will store a list of videos 
      videos: window.exampleVideoData,
      // add current video -- current video will be the video playing in the player 
      currentVideo: window.exampleVideoData[0]
    };
  }
  // add a play video method
  playVideo(video) {
    // on click change current video to video that was clicked 
    // use setstate to manage change
    this.setState({
      currentVideo: video
    });
  }

  // add render method to app. 
  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          {/*pass in current video to video player to assign the play sequence */}
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          {/* pass videos from the current state into the list to help create a video list
          Pass play video to bind the event handler into the function as well
         */}
          <VideoList
            playVideo={this.playVideo.bind(this)}
            videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

