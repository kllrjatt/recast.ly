// extend a react class 
class App extends React.Component {
  // add constructor pass props
  constructor(props) {
    // add super and pass props
    super(props);
    // add state 
    this.state = {
      // add video - video will store a list of videos 
      video: [],
      // add current video -- current video will be the video playing in the player 
      currentVideo: null
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
    console.log(this.props);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer />
        </div>
        <div className="col-md-5">
          <VideoListEntry />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

