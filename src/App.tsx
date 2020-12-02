import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "./components/common/Toast";
import Home from "./pages/Home";
import { observer } from "mobx-react";
import { toast } from "./utils/Store";
import Lobby from "./pages/Lobby";

const App = observer(() => {
  return (
    <Router>
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
        <Route path="/lobby/:id" component={Lobby} />
      </Switch>
    </Router>
  );
});

export default App;
