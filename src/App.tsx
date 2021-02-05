import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "./components/common/Toast";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
import { room, toast } from "./store/Store";
import { GlobalStyles } from "twin.macro";
import Spinner from "./components/common/Spinner";
import Boards from "./pages/Boards";

const App = observer(() => {
  return (
    <Router>
      <GlobalStyles />
      {room.loading && <Spinner />}
      {toast.isVisible && (
        <Toast
          shortText="Confirmation successful"
          longText="Your choices have been saved."
          onClick={() => toast.setVisible(false)}
        />
      )}

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/lobby" component={Lobby} />
        <Route exact path="/boards" component={Boards} />
        <Route path="/lobby/:id" component={Room} />
      </Switch>
    </Router>
  );
});

export default App;
