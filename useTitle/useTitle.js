import React, { useState, useEffect } from "react";

// useEffect는 componentDidMount/Unmount/Update 역할 둘다 함

const useTitle = (initialTitle) => {
  const [Title, setTitle] = useState(initialTitle);

  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = Title;
  };
  useEffect(updateTitle, [Title]);
  return setTitle;
};