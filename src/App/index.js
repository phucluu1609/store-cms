import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import LoadingIndicator from "../containers/LoadingIndicator";
import LoginPage from "../containers/LoginPage";
import Footer from "../UI/Layouts/Footer";
import Header from "../UI/Layouts/Header";
import Sidebar from "../UI/Layouts/Sidebar";
import { routes } from "./privateRoutes";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  // const location = useLocation();
  // const [urlPage, setUrlpage] = useState("");
  const [toggleMenu, setToggleMenu] = useState(false);

  const loading = useSelector(
    (state) => state.loadingIndicatorReducer.requesting
  );
  const login = useSelector((state) => state.loginPageReducer.isLogin);

  // useEffect(() => {
  //   setUrlpage(location.pathname);
  // }, [location]);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div>
      {loading && <LoadingIndicator />}
      {/* {login && urlPage && !== '/error_page' && <Header onClick={handleToggleMenu} />} */}
      <Header onClick={handleToggleMenu} />

      {toggleMenu && <Sidebar onClick={handleToggleMenu} />}

      <div>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              exact={route.exact}
              path={route.path}
              element={
                route.protected ? (
                  <ProtectedRoute isSignedIn={true}>
                    {route.component}
                  </ProtectedRoute>
                ) : (
                  route.component
                )
              }
            />
          ))}
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      {/* {login && urlPage && !== '/error_page' && <Footer />} */}
      <Footer />
    </div>
  );
}

export default App;
