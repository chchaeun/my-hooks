# Usage
조건에 따라 페이지 title을 변경시킨다.

```javascript
const App = () => {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 5000);
    return <div></div>;
  };
```