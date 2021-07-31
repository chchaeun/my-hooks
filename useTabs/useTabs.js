export const useTabs = (initialTab, allTabs) =>{
    if(!allTabs || !Array.isArray(allTabs)){
      return;
    }
    const [currentIndex, setIndex] = useState(initialTab);
    return {
      currentItem: allTabs[currentIndex],
      changeItem: setIndex
    }
};