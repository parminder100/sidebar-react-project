import "../Sidebar/Sidebar.css";
import logo from "../../asset/img/logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from "react";

const Sidebar = () =>{
    const [showSidebar, setShowSidebar] = useState(false);

    const handleShowSidebar = () =>{
        setShowSidebar(!showSidebar);
    }
    return(
        <>
            <main className="sidebar-main">
                <section className="sidebar-section">
                    <div className="sidebar-grid">
                        <div className="container">
                            <div className="row sidebar-row">
                                <div className="col-6">
                                    <img className="logo" src={logo} alt="logo" />
                                </div>
                                <div className="col-6">
                                    <ul className="nav-list d-none d-lg-flex">
                                        <li>Home</li>
                                        <li>About</li>
                                        <li>Projects</li>
                                        <li>Contact</li>
                                    </ul>
                                    <button className="navbar-toggle-btn d-flex d-lg-none" onClick={handleShowSidebar}>
                                        <i className="fa fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={`sidebar-container d-flex d-lg-none ${showSidebar ? 'active' : ''}`}>
                    <div className="sidebar-header">
                        <img src={logo} alt="logo" />
                        <button className="sidebar-close-btn" onClick={handleShowSidebar}>
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                    <ul className="sidebar-links">
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </section>
            </main>
        </>
    )
}
export default Sidebar;