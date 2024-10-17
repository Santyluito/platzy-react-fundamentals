import "./App.css";

import AppUi from "./App/AppUi";
import { TodoProvider } from "./Context";

function App() {
  return (
    <TodoProvider>
      <AppUi />
    </TodoProvider>
  );
}

export default App;
