# Usage
윈도우 창을 닫을 때 정말 닫을 것인지 확인한다.

```javascript
export const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
      <div>
        <button onClick={enablePrevent}>protect</button>
        <button onClick={disablePrevent}>unprotect</button>
      </div>
    );
  };
```