import React, {Fragment} from "react";
import {Mainpage} from "./Mainpage";
import Footer from "./Footer";
import Header from "./Header";
//import Container from "./Container";
import Sidebar from "./Sidebar";
function App(){
    return(
        <Fragment>
            <Sidebar />
            <Mainpage>
                <Header />
            </Mainpage>
            <Footer />
        </Fragment>
    );
}

export default App;