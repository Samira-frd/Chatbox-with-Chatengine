import {Switch, Route} from "react-router-dom";

//components
import Login from "./components/Login";
import Chats from "./components/Chats";

// Context
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Switch>
        <Route path="/chat" component={Chats}/>
        <Route path="/" component={Login}/>
      </Switch>
      </AuthContextProvider>
    </div>
  );
}

export default App;
