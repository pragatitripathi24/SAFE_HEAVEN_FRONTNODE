import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Schemes from "../Schemes/Schemes"
import Ngo from "../Ngo/Ngo"
import LostChildren from "../LostChildren/LostChildren"
import BlogsComp from "../Blogs/BlogsComp"
import Marquee from "../home/Marquee/Marquee"

const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Marquee />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/schemes' component={Schemes} />
          <Route exact path='/ngo' component={Ngo} />
          <Route exact path='/lc' component={LostChildren} />
          <Route exact path='/media' component={BlogsComp} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages
