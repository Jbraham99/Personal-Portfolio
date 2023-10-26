import Menu from "./Menu";
import Routes from "./Routes";


function Layout() {
    return <div className="container-fluid" id="wrapper" style={{backgroundColor: "#f5f2dc"}}>
        <div>
            <div>
                <Menu />
            </div>
            <div>
                <Routes />
            </div>
        </div>
    </div>
}

export default Layout;