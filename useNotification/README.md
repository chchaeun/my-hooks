# Usage
브라우저 알림이 허용돼있는 경우 알림을 발생시킨다.

```javascript
const App = () => {
    const triggerNotif = useNotification("Hi there", {
      body: "this is option"
    });
    return (
      <div>
        <button onClick={triggerNotif}>click this</button>
      </div>
    );
  };
```
  