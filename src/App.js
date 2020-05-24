import React from "react";

import Home from "./pages/Home";
import Layout from "./components/Layout";

import "./assets/service/css/app.css";
import "./assets/service/css/search.css";
import Search from "./components/Search";
import {Route} from "react-router-dom";

const App = () => (
    <Layout>
        <Route
            path="/"
            exact={true}
            component={Home}
        />
        <Route
            path="/search"
            exact={true}
            component={Search}
        />
    </Layout>
);

export default App;
