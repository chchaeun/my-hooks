# Usage

```javascript
import useInput from "my-hooks/useInput"

const App = () => {
  const validator = value => value.length < 10;
  const name = useInput("unknown", validator);
  return (
    <div className="App">
      <h1>Input</h1>
      <input placeholder="Name" {...name.props} />
    </div>
  );
};
```