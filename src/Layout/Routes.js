import {Redirect, Switch, Route} from "react-router-dom"
import NotFound from "../Errors/NotFound";
import Home from "../Pages/Home";
import About from "../Pages/About"
import Projects from "../Pages/Projects";
import Contact from "../Pages/Contact";
import ThankYouCard from "../Pages/ThankYouCard";
function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Redirect to={"/About"} />
            </Route>
            <Route path="/About">
                <About />
            </Route>
            <Route path="/Projects">
                <Projects />
            </Route>
            <Route path="/Contact">
                <Contact />
            </Route>

            <Route path="/Thank-you!">
                <ThankYouCard />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;