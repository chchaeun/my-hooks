import React, {useState} from 'react';

export const useTabs = (initialTab, allTabs) =>{
    const [currentIndex, setIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)){
      return;
    }
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setIndex
    }
};