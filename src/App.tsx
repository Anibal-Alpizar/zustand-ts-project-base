import { useCounterStore } from "./store/counterStore";
import shallow from "zustand/shallow";

function App() {
  const { counte, title } = useCounterStore(
    (state) => ({
      counte: state.count,
      title: state.title,
    }),
    shallow
  );
  const { increment } = useCounterStore();

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
    </div>
  );
}

export default App;
