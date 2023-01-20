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

  return (
    <div>
      <h1>
        {title}: {counte}
      </h1>
    </div>
  );
}

export default App;
