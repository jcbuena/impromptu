import React from 'react';
import { requireNativeComponent } from 'react-native';

class VideoView extends React.Component {
  render() {
    return <Video {...this.props} />;
  }
}

VideoView.propTypes = {
  /**
   * When this property is set to `true` and a valid camera is associated
   * with the map, the camera’s pitch angle is used to tilt the plane
   * of the map. When this property is set to `false`, the camera’s pitch
   * angle is ignored and the map is always displayed as if the user
   * is looking straight down onto it.
   */
   paused: React.PropTypes.bool,
   path: React.PropTypes.string,
   file: React.PropTypes.string,
};

// requireNativeComponent automatically resolves this to "RCTMapManager"

var Video = requireNativeComponent('Video', VideoView);
module.exports = VideoView