import {useEffect} from 'react';

const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
      return;
    }
    const onLeaveHandler = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };
    useEffect(() => {
      document.addEventListener("mouseleave", onLeaveHandler);
      return () => document.removeEventListener("mouseleave", onLeaveHandler);
    }, []);
  };