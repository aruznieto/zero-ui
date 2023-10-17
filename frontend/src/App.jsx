import "@fontsource/roboto";

import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Theme from "./components/Theme/Theme.jsx";
import Bar from "./components/Bar/Bar.jsx";

import Home from "./routes/Home/Home.jsx";
import NotFound from "./routes/NotFound/NotFound.jsx";
import Network from "./routes/Network/Network.jsx";
import Settings from "./routes/Settings/Settings.jsx";

function App() {
  return (
    <Theme>
      <BrowserRouter basename="/app">
        <Bar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/network/:nwid" component={Network} />
          <Route path="/404" component={NotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
