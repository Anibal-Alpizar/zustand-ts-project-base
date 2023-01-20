import { useEffect } from "react";
import { useCounterStore } from "./store/counterStore";
import shallow from "zustand/shallow";

function App() {
  const { counte, title } = useCounterStore(
    (state) => ({
      counte: state.count,
      title: state.title,
      posts: state.posts,
    }),
    shallow
  );
  const { increment, getPosts, posts, clearStore } = useCounterStore();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <h1>
        {title}: {counte}
      </h1>
      <button
        onClick={() => {
          increment(10);
        }}
      >
        Increment by 10
      </button>
      <button onClick={() => clearStore()}>clear</button>
      <hr />
      {JSON.stringify(posts)}
    </div>
  );
}

export default App;
