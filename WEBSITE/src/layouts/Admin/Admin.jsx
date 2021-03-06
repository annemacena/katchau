/*!

=========================================================
* Black Dashboard React v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

// core components
import AdminNavbar from "components/Navbars/AdminNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
// import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import Auth from '../../services/auth';
import routes from "./routes.js";

import Progress from 'components/ProgressBar/Progress'
import NotificationAlert from "react-notification-alert";

import logo from "assets/img/react-logo.png";

var ps;

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      backgroundColor: "blue",
      sidebarOpened:
        document.documentElement.className.indexOf("nav-open") !== -1
    };

    this.handleLoadingStatus = this.handleLoadingStatus.bind(this);      
    this.notify = this.notify.bind(this);
  }
  notify = (options) => {
    var _options = {
      place: "tr",
      autoDismiss: 6,
      ...options
    };
    this.refs.notificationAlert.notificationAlert(_options);
  };
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel, { suppressScrollX: true });
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
  }
  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  // this function opens and closes the sidebar on small devices
  toggleSidebar = () => {
    document.documentElement.classList.toggle("nav-open");
    this.setState({ sidebarOpened: !this.state.sidebarOpened });
  };
  getRoutes = routes => {

    var component = this;

    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={
              props => <prop.component {...props} 
              handleLoadingStatus={component.handleLoadingStatus} 
              notify={component.notify}/>
            }
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  //custom
  signOutClick = (e) => {

    e.preventDefault();

    var _class = this;
    _class.handleLoadingStatus(true);
    console.log("Signing out...");

    Auth.signOut()
      .then(function () {

        console.log("Signed out.");

        const { history } = _class.props;
        _class.handleLoadingStatus(false);
        history.push("/login");

      }).catch(function (error) {
        console.log(error);
        _class.handleLoadingStatus(false);
      });
  };
  handleLoadingStatus(value) {
    this.setState({
      isLoading: value
    })
  }

  render() {

    return (
      <>
        <div className="wrapper" style={this.state.isLoading ? { pointerEvents: "none" } : { pointerEvents: "auto" }}>
          <Progress isAnimating={this.state.isLoading} />
          <div className="react-notification-alert-container">
            <NotificationAlert ref="notificationAlert" />
          </div>
            <Sidebar
              {...this.props}
              routes={routes}
              bgColor={this.state.backgroundColor}
              logo={{
                outterLink: "https://www.creative-tim.com/",
                text: "Creative Tim",
                imgSrc: logo
              }}
              username={this.props.user.username}
              toggleSidebar={this.toggleSidebar}
            />
            <div
              className="main-panel border-0"
              ref="mainPanel"
              data={this.state.backgroundColor}
            >
              <AdminNavbar
                {...this.props}
                brandText={ //if para se for a página de dashboard (se tirar nao aparece a o pathName)
                  this.props.location.pathname.indexOf("dashboard") !== -1 ? "Painel de controle": this.getBrandText(this.props.location.pathname)
                }
                toggleSidebar={this.toggleSidebar}
                sidebarOpened={this.state.sidebarOpened}
                signOutClick={this.signOutClick}
              />
              <Switch>
                {this.getRoutes(routes)}
                <Redirect from="/admin" to="/admin/devices" />
              </Switch>
              {// we don't want the Footer to be rendered on map page
              this.props.location.pathname.indexOf("maps") !== -1 ? null : (
                <Footer fluid />
              )}
            </div>
        </div>
      </>
    );
  }
}

export default Admin;
