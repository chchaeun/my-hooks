import React, {useRef} from 'react';

const useFullscreen = (callback) => {
    const element = useRef();
    const runCallback = (tof) => {
      if (callback && typeof callback === "function") {
        callback(tof);
      }
    };
    const triggerFull = () => {
      if (element.current) {
        if (element.current.requestFullscreen) {
          element.current.requestFullscreen();
        } else if (element.current.mosRequestFullScreen) {
          element.current.mosRequestFullScreen();
        } else if (element.current.webkitRequestFullscreen) {
          element.current.webkitRequestFullscreen();
        } else if (element.current.msRequestFullscreen) {
          element.current.msRequestFullscreen();
        }
        runCallback(true);
      }
    };
    const exitFull = () => {
      const fullElement = document.fullscreenElement;
      if (fullElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      runCallback(false);
    };
    return { element, triggerFull, exitFull };
  };
  