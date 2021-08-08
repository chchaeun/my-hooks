# Usage
네트워크의 online/offline 상태를 업데이트하고 값을 반환한다. 

```javascript
const App = () => {
    const handleNetworkChange = (online) => {
      console.log(online ? "We just went online" : "We are offline");
    };
    const onLine = useNetwork(handleNetworkChange);
    return <div></div>;
  };
```