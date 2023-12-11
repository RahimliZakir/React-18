import AutoBatching from "./components/AutoBatching";
import UseId from "./components/UseId";
import SuspenseOnDataFetching from "./components/SuspenseOnDataFetching";
import UseTransition from "./components/UseTransition";
import UseDeferredValue from "./components/UseDeferredValue";

const App = () => {
  return (
    <div className="App mt-5">
      <div className="container">
        {/* <AutoBatching /> */}
        {/* <UseId /> */}
        {/* <UseId /> */}
        {/* <SuspenseOnDataFetching /> */}
        {/* <UseTransition /> */}
        <UseDeferredValue />
      </div>
    </div>
  );
};

export default App;
