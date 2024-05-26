import React, { useState, useEffect } from "react";
import "./css/home.css";
// import Slideshow from './Slideshow';
// import FacebookEmbed from "./FacebookEmbed";
import img1 from "./image/banner-1.jpg";
import img2 from "./image/banner-2.jpg";
import img3 from "./image/banner-3.jpg";
import img4 from "./image/banner-4.jpg";
import img5 from "./image/banner-5.jpg";
import library from "./image/libraryicon.jpg";
import transport from "./image/transport.jpg";
import activity from "./image/activityicon.jpg";

import sunilSir from "../school/image/sunilSIr.jpg";
import Sudarsansir from "./image/SudarsanSir.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

function Home() {
  const images = [img1, img2, img3, img4, img5];
  const [currentIndex, setCurrentIndex] = useState(0);
  const s = "=>";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="school_home_contaner">
        <div className="school_home_contaner_inner">
          {/* <Slideshow /> */}
          <div style={{ height: "100%", zIndex: 0 }}>
            <img
              src={images[currentIndex]}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                marginTop: "",
                border: "1px solid black",
                boxShadow: "0px 0px 5px black",
                padding: "5px",
              }}
            />
          </div>
        </div>
        <div style={{ textAlign: "left", color: "blue", margin: "20px" }}>
          <h2 style={{ margin: "20px", color: "black" }}>
            Welcome to P.P.M School{" "}
          </h2>
          <p className="School_paragraph">
            P.P.M. School is a co-ed Senior Secondary School, situated in the
            Venkateshwar nagar , Arwal more neighbourhood of Jehanabad District
            of Bihar, India. It was founded by a Great saint and scholar ‘Shri
            Shri 1008 Swami Dharnidharcharya ji Maharaj’ on 10th of January 2003
            and since then it is being managed by N.G.O ‘JYOTI’ (Reg. By Govt.
            of Bihar). It was inaugurated by then D.M of JehanabadSri Santosh
            Kumar Mal (I.A.S) and Dr. Arunish Chawla (I.A.S).
          </p>
          <p className="School_paragraph">
            It is affiliated to the Central Board of Secondary Education , Delhi
            upto 12th standard (Affiliation No- 330255 , School No- 65258). The
            school since its origin has been carving a reputation for itself as
            it promotes Knowledge, Education, and Sacraments under the guidance
            of its chairman Dr. Surendra Kumar Sunil. Who himself is a renowned
            Educationalist.{" "}
          </p>
          <p className="School_paragraph">
            The environment of the campus is completely favourable for learning
            as it is situated far from the hustle and bustle of the town and is
            a lush green campus. It is fully children friendly from the safety
            point of view. Besides education the students are taught to be a
            society friendly secular human being. The school in line with the
            RTE Act , 2009 reserves its 25% seats for economically and socially
            underprivileged children.
          </p>
        </div>

        <div style={{ margin: "20px " }}>
          <div className="School_CBSE">
            <h5>CBSE Mandary Disclosure</h5>
            <ul>
              <li>GENERAL INFORMATION</li>
              <li>DOCUMENT & INFORMATION </li>
              <li>RESULT AND ACADMIC</li>
            </ul>
            <ul>
              <li>STAF TEACHING</li>
              <li>SCHOOL INFARASTRUCTURE</li>
              <li>MANDATORY PUBLIC DISCLOSERE</li>
            </ul>
          </div>
          <hr style={{ boxShadow: "0px 0px 0px 1px black" }} />
          <div className="DR_SK_SUnil">
            <div className="DR_SK_SUnil1">
              <img src={sunilSir} alt="" />
              <div>
                <h4>Dr. S.K Sunil</h4>
                <p>chairman (Presedent Awardee)</p>
                <p>
                  {" "}
                  Welcome To P.P.M. School. An Education Initiative By The
                  "JYOTI", A Society ...{" "}
                </p>
                <button>Read More »</button>
              </div>
            </div>
            <div className="DR_SK_SUnil1">
              <div>
                <h4>Sudarshan Sharma</h4>
                <p>Principal</p>
                <p>
                  It Is My Pleasure To Welcome You To The PPM School Community.
                  ...
                </p>
                <button>Read More »</button>
              </div>


              
              <img src={Sudarsansir} alt="" />
            </div>
          </div>
        </div>

        <div className="School_Facility">
          <div className="School_facility1">
            <h4 className="SFB1">Our</h4>
            <h4 className="SFB2">Facility</h4>
          </div>
          <div >
            <div className="OurFaclititys">
              <div className="OurFaclititys1">
                <div  className="OurFaclititys2">
                  <h5>library</h5>
                  <p>Annual Budget for Library for 2019-20.</p>
                  <button>Read More »</button>
                </div>
                <img className="img1" src={library} alt="" />
              </div>
              <div className="OurFaclititys1">
                <img className="img2" src={library} alt="" />
                <div className="OurFaclititys3">
                  <h5>library</h5>
                  <p>Annual Budget for Library for 2019-20.</p>
                  <button>Read More »</button>
                </div>
              </div>
            </div>
            <div className="OurFaclititys">
              <div className="OurFaclititys1">
                <div  className="OurFaclititys2">
                  <h5>library</h5>
                  <p>Annual Budget for Library for 2019-20.</p>
                  <button>Read More »</button>
                </div>
                <img className="img1" src={library} alt="" />
              </div>
              <div className="OurFaclititys1">
                <img className="img2" src={library} alt="" />
                <div className="OurFaclititys3">
                  <h5>library</h5>
                  <p>Annual Budget for Library for 2019-20.</p>
                  <button>Read More »</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="school_home_contaner_inner1">
          <h3>New notification</h3>

          <ul className="S_notification">
            <Link href="">
              <li>
                {" "}
                <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. lorm10 Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Suscipit doloribus excepturi at dolorum dolores. Eum ipsam
                consequuntur explicabo doloribus modi, dignissimos, accusantium
                assumenda repellat atque quam quidem magnam harum maxime?
              </li>
            </Link>
            <Link href="">
              <li>
                {" "}
                <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. lorm10{" "}
              </li>
            </Link>
            <Link href="">
              <li>
                {" "}
                <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. lorm10{" "}
              </li>
            </Link>
            <Link href="">
              <li>
                {" "}
                <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. lorm10{" "}
              </li>
            </Link>
          </ul>
        </div>

        <div className="school_home_contaner_inner2">
          <h2>Social Media</h2>
          <div style={{ justifyContent: "space-between" }}>
            <a
              className="social_media_icon"
              href="https://www.facebook.com/ronit.king.73"
            >
              <FacebookIcon className="s_icon" fontSize="40px" />
            </a>
            <a
              className="social_media_icon"
              href="https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            >
              <LinkedInIcon className="s_icon" fontSize="40px" />
            </a>
            <a
              className="social_media_icon"
              href="https://www.facebook.com/ronit.king.73"
            >
              <InstagramIcon className="s_icon" fontSize="40px" />
            </a>
            <a
              className="social_media_icon"
              href="https://github.com/Ripukesh870"
            >
              <GitHubIcon className="s_icon" fontSize="40px" />
            </a>
            <a
              className="social_media_icon"
              href="https://github.com/Ripukesh870"
            >
              <TwitterIcon className="s_icon" fontSize="40px" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
