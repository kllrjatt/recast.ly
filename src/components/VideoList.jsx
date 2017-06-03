
// pass videos to video list 
// map over videos array 
// add video as part of video list entry 
// set video for video list entry as item from videos array

var VideoList = ({ videos, playVideo }) => (
  <div className="video-list media">
    {videos.map((video, i) =>
      <VideoListEntry
        key={i}
        video={video}
        playVideo={playVideo}
      />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
