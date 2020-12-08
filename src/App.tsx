import { AnimatePresence, motion } from "framer-motion";
import { observer } from "mobx-react";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Toast from "./components/common/Toast";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Room from "./pages/Room";
import { toast } from "./utils/Store";

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
      <AnimatePresence exitBeforeEnter>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/lobby" component={Lobby} />
            <Route path="/lobby/:id" component={Room} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Router>
  );
});

export default App;
