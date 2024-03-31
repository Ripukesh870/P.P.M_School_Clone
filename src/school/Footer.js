import React from 'react'
import "./css/footer.css";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Footer() {
  return (
    <>
      <div className='school_footer'>
        <div className='school_footer_contaner'>
          <div className='s_f_inner'>
            <div className='s_f_inner_box1'>
              <img src="" alt="" />
              <div>
                <h3 style={{fontSize:"17px"}}>P.P.M School </h3>
                <h6 style={{fontSize:"14px"}}>basantpur, jehanabad (bihar)</h6>
              </div>
            </div>
            <div className='s_f_inner_box11'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ea?
            </div>
          </div>


          <div className='s_f_inner'>
            <div className='s_f_inner_box2'>
              <h4>QUICK LINKS</h4>
              <ul>
                <li><a href="">About School </a></li>
                <li><a href="">Result Download</a></li>
                <li><a href="">Notifications</a></li>
                <li><a href="">Home</a></li>
              </ul>
            </div>

          </div>


          <div className='s_f_inner'>
              <div className='s_f_inner_box3'>
                <h4>EXPLORE</h4>
                <ul>
                  <li><a href="">Facility</a></li>
                  <li><a href="">Deparment</a></li>
                  <li><a href="">Courses</a></li>
                </ul>
              </div>
          </div>
          <div className='s_f_inner'>
            <div className='s_f_inner_box4'>
              <h4>CONTACT DETAILS</h4>
              <div>
                <p><b>Address : </b> P.P.M School, basantpur , shakurabad jehanabad (Bihar) 804425</p>
                <p> <b>Emaill : </b>ripukesh@100@gmail.com </p>
              </div>
              <div className='s_f_inner_box4_logo'>
                    <a className='' href="https://www.facebook.com/ronit.king.73"><FacebookIcon className='s_f_inner_box4_icon' fontSize='30px'/></a>
                    <a className='' href="https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='s_f_inner_box4_icon' fontSize='' /></a>
                    <a className='' href="https://www.facebook.com/ronit.king.73"><InstagramIcon className='s_f_inner_box4_icon' fontSize=''/></a>
                    <a className='' href="https://github.com/Ripukesh870"><GitHubIcon className='s_f_inner_box4_icon' fontSize=''/></a>
                    <a className='' href="https://github.com/Ripukesh870"><TwitterIcon className='s_f_inner_box4_icon' fontSize=''/></a>
                
              </div>
            </div>
          </div>
        </div>
        <div className='school_footer2'>
          <div>
            <b> Copyright © 2024-2025 : </b> P.P.M School basntpur jehanabad (Bihar).
          </div>
          <div>
            <b>Developed & Maintained by : </b> Ripukesh kumar sharma
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
