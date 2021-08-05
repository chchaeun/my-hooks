import React, { useState, useEffect } from "react";

const useScroll = () => {
    const [state, setState] = useState({
      x: 0,
      y: 0
    });
    const onScroll = () => {
      // setState({x: window.scrollX, y: windowscrollY});
      setState({ x: window.pageXOffset, y: window.pageYOffset });
    };
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
    return state;
  };