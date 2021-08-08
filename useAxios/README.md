# Usage
refetch가 발생할 때마다 API 요청을 처리해준다.

```javascript
import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json "
  });

  console.log(loading, refetch);

  return (
    <div>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>);
};
```

## Logic
1. useAxios를 호출하면서 API url을 인자로 보내준다.
2. opts.url(API url)이 존재하면 useEffect가 호출되어 axiosInstance를 부른다. 이 때 인자로 opts를 보낸다.
3. 성공하면 data를 setState하고 실패하면 error를 setState한다. 요청이 완료되어 loading 하지 않는 상태임으로 false로 세팅한다.
4. refetch가 되면 loading을 true로 세팅하고 trigger를 Date.now()(겹치지 않는 숫자 발생)로 세팅한다. refetch로 인해 loading이 true로  변경된다.
5. trigger가 변경되었으므로 다시 요청을 시도한다. 요청이 완료되었으니 loading은 false로, 성공 여부에 따라 data 또는 error가 세팅된다.