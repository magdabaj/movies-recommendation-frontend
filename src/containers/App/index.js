import React from 'react';
import { Switch, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "../HomePage";
import {ToastContainer} from "react-toastify";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
            </Switch>
            <ToastContainer />
        </div>
    );
}

App.propTypes = {
};

export default App;
