import { HomePage } from "./Components/home";
import { WorkSpace } from "./Components/application/workspace";

function App() {
  return <>{Math.random() > 0.5 ? <HomePage /> : <WorkSpace />}</>;
}

export default App;
