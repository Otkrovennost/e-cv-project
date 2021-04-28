import React, { useRef, useEffect } from 'react';
import lottie from 'lottie-web';
import './Success.scss';
function Success() {
  const lottieContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      animationData: require('../../../animations/okay-animation.json'),
    });
  }, []);
  return <div className="success" ref={lottieContainer}></div>;
}

export default Success;
