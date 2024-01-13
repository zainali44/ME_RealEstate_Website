import React, {useEffect, useState, CSSProperties} from "react";
import { NavbarWithMegaMenu } from "./header";
import { FooterWithSocialLinks } from "./Footer";
import Home from "./Home";
import InvestwithME from "./InvestwithME";
import ContactUS from "./contactus";
import BookingCard from "./Residentail";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preloader from "./Preloader";
import  Ourteam  from "./Ourteam";
import Companyprofile from "./companyprofile";
import InvestorLogin from "./Investorlogin.js";
import {PropertyManage} from "./propertymanage.js";
import RingLoader from "react-spinners/RingLoader";
import OutlinedTimeline from "./InvestorPortal/Timeline";
import InvestorPortal from "./InvestorPortal/InvestorPortal";
import JobPoratal from "./WorkAtME/work";
import Listing from "./Listing/Listing";
import Test from "./test";
import Underdeveloped from "./Pageunderdeveloped.js";
import Commercial from "./commercial.js";
import FeaturedProperties from "./Feature";
import Brokrage from "./Brokrage/brokrage";
import Construction from "./Construction/construction";
import Gallery from "./Construction/Gallery";
import N1555Street from "./Construction/1555NStreet";
import Willson_298 from "./Construction/298_Willson";
import Chittenden313 from "./Construction/313_Chittenden";
import E63Ave from "./Construction/63_E_6th_Ave";
import USCC from "./Construction/USCC.js";
import Pie from "./pie.js";
// import './App.css';
function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

    return (
        <div className="App">
          {
            loading ? 
            <Preloader className="flex justify-center items-center h-screen" /> :
            <Router>
              <NavbarWithMegaMenu />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/InvestwithME" element={<InvestwithME />} />
                <Route path="/contactus" element={<ContactUS />} />
                <Route path="/Residentail" element={<BookingCard />} />
                <Route path="/Ourteam" element={<Ourteam />} />
                <Route path="/companyprofile" element={<Companyprofile />} />
                <Route path="/Investorlogin" element={<InvestorLogin />} />
                <Route path="/propertymanage" element={<PropertyManage />} />
                <Route path="/Timeline" element={<OutlinedTimeline />} />
                <Route path="/InvestorPortal" element={<InvestorPortal />} />
                <Route path="/work" element={<JobPoratal />} />
                <Route path="/Listing" element={<Listing />} />
                <Route path="/test" element={<Test />} />
                <Route path="/underdeveloped" element={<Underdeveloped />} />
                <Route path="/commercial" element={<Commercial />} />
                <Route path="/FeaturedProperties" element={<FeaturedProperties />} />
                <Route path="/brokrage" element={<Brokrage />} />
                <Route path="/construction" element={<Construction />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/1555NStreet" element={<N1555Street />} />
                <Route path="/298_Willson" element={<Willson_298 />} />
                <Route path="/313_Chittenden" element={<Chittenden313 />} />
                <Route path="/63_E_6th_Ave" element={<E63Ave />} />
                <Route path="/USCC" element={<USCC />} />
                <Route path="/pie" element={<Pie />} />

              </Routes>
              <FooterWithSocialLinks />
            </Router>
          }
        </div>
    );
  }


export default App;
