import React, { Component } from 'react';
import {Route, NavLink, HashRouter} from "react-router-dom";
import Dashboard from "./view/Dashboard";
import Order from "./view/Order";
import Produk from "./view/Produk";
import Portofolio from "./view/Portofolio";
import Mesin from "./view/Mesin";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="header">
            <i id="menu" className="fas fa-bars fa-lg" onClick={()=> document.getElementById("sidebar").style.display="block"}></i>
            <h1>KEMBAR PUTRI</h1>
        </div>
        <div className="sidebar" id="sidebar">
            <i id="close" class="fas fa-times" onClick={()=> document.getElementById("sidebar").style.display="none"}></i>
            <a><NavLink to="/"><i className="fas fa-home"></i>Dashboard</NavLink></a>
            <a><NavLink to="/order"><i className="fas fa-shopping-cart"></i>Order</NavLink></a>
            <a><NavLink to="/produk"><i className="fas fa-list-ul"></i>Produk</NavLink></a>
            <a><NavLink to="/portofolio"><i className="fas fa-pen"></i>Portofolio</NavLink></a>
            <a><NavLink to="/Mesin"><i className="fas fa-cogs"></i>Mesin</NavLink></a>
        </div>
        <div className="main" id="content">
            <Route exact path="/" component={ Dashboard }/>
            <Route path="/Order" component={ Order }/>
            <Route path="/Produk" component={ Produk }/>
            <Route path="/Portofolio" component={ Portofolio }/>
            <Route path="/Mesin" component={ Mesin }/>
        </div>
      </HashRouter>
    );
  }
}
export default Main;
