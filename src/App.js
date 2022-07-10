import { BrowserRouter, Route, Switch } from "react-router-dom";
import { usePublicRoutes } from "./routes/useRoutes";
// import SpinnerComponent from "./components/SpinnerComponent/SpinnerComponent";

function App() {
  return (
    <div className="">
      {/* <SpinnerComponent /> */}
      <BrowserRouter>
        <Switch>
          {usePublicRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={() => {
                    return route.component;
                  }}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              );
            }
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
