import React, { PureComponent } from 'react';
import Lottie from 'react-lottie';
import animation from '../../../assets/animations/hero-girl.json';

class HeroGirl extends PureComponent {
  private defaultOptions = {
    animationData: animation,
    width: '100%',
    height: '100%',
    loop: true,
    autoPlay: true,
  }

  render() {
    return (
      <Lottie
        options={this.defaultOptions}
        width={500}
        height={500}
        isClickToPauseDisabled
      />
    );
  }
}

export default HeroGirl;
