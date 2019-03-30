import React, { Component } from 'react';

import './css/main.css';
import Content from './components/content';
import AboutUs from './components/AboutUs';
import index_hero from './images/index_hero.jpg';
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import'./css/responsive.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';
import {BrowserRouter, Route,Switch} from "react-router-dom";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Menu from "./components/Menu";
import Login from "./components/Login";
import Doctors from "./components/Doctors";
import News from "./components/News";
import './plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import './plugins/OwlCarousel2-2.2.1/animate.css';
import'./css/responsive.css';
import './plugins/OwlCarousel2-2.2.1/owl.theme.default.css';


class App extends Component {
  render() {
    const index_heroBG=  {
      backgroundImage: `url(${index_hero})`
    }
    return (
		
			<div class="super_container">		
        
						<BrowserRouter>

								
								<Menu></Menu>
								
								<Route path='/' component={Layout}>
								<Switch>
								<Route path='/home' component={Content}></Route>
								<Route path='/about' component={AboutUs}></Route>
								<Route path='/services' component={Services}></Route>
								<Route path='/doctors' component={Doctors}></Route>
								<Route path='/news' component={News}></Route>
								<Route component={Content}></Route>
								<Route path='/login' component={Login}> </Route>
								</Switch>
								</Route>
								

								<Footer></Footer>
						</BrowserRouter>
			</div>



    );
  }
}

export default App;
