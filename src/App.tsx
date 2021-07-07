
import { BrowserRouter, Route,  } from 'react-router-dom';

import { Home } from "./page/Home";
import { NewRoom } from "./page/NewRoom";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component = {Home}/>
      <Route path="/rooms/new" component = {NewRoom}/>
    </BrowserRouter>
  );
}

export default App;
