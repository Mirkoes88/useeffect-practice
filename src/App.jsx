import { useState } from "react";

import "./App.css";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";

function App() {
  /* Start off by reading the description in the component (inside 'components' folder. Render the tasks to the screen by uncommenting them, one at a time. When you move on to the next task, comment out the one you've completed */
  return (
    <div className="mainPageContent">
      <h1>useEffect() - Practice</h1>
      {/* Uncomment only one task at a time */}

      {/* <Task1 /> */}
      {/* <Task2 /> */}
      <Task3 />
      {/* <Task4 /> */}
    </div>
  );
}

export default App;
