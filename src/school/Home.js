import React,{useState,useEffect} from 'react'
import "./css/home.css";
// import Slideshow from './Slideshow';
import FacebookEmbed from "./FacebookEmbed";
import img1 from "./image/img1.jpg"
import img2 from "./image/img2.jpg"
import img3 from "./image/img3.jpg"
import img4 from "./image/img4.jpg"

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';


function Home() {
    const images=[img1,img2,img3,img4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const s="=>";

    useEffect(() => {

        const interval = setInterval(() => {
          // Increment index, but loop back to 0 if we reach the end
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        },4000); // Change image every 2 seconds
    
        return () => clearInterval(interval);
      }, [images.length]); // Dependency array ensures effect runs only when the length of images changes
    
  return (
    <>
        <div className='school_home_contaner'>
            <div className='school_home_contaner_inner'>
                {/* <Slideshow /> */}
                <div style={{border:"",height:"100%",boxSizing:"",position:"" ,padding:"5px 10px 4px 10px",zIndex:0}}>
                    <img src={images[currentIndex]} alt="" style={{width:"100%",height:"100%",objectFit:"cover",marginTop:"",border:"4px solid black",padding:"5px"}}/>
                </div>
                
            </div>
            <div style={{textAlign:"center",color:"blue"}} >
                <h2>Welcome to our webSite</h2>
            </div>

            <div className='school_home_contaner_inner1'>
                <h3>New notification</h3>

                <ul className='S_notification'>
                    <a href=""><li> <b>{s}</b>  Lorem ipsum dolor, sit amet consectetur adipisicing elit. lorm10  Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus excepturi at dolorum dolores. Eum ipsam consequuntur explicabo doloribus modi, dignissimos, accusantium assumenda repellat atque quam quidem magnam harum maxime?</li></a>
                    <a href=""><li> <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. lorm10 </li></a>
                    <a href=""><li> <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. lorm10 </li></a>
                    <a href=""><li> <b>{s}</b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. lorm10 </li></a>

                </ul>
            </div>

            <div className='school_home_contaner_inner2'>
                <h2>Social Media</h2>
                <div style={{justifyContent:"space-between"}}>
                    <a className='social_media_icon' href="https://www.facebook.com/ronit.king.73"><FacebookIcon className='s_icon' fontSize='40px'/></a>
                    <a className='social_media_icon' href="https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedInIcon className='s_icon' fontSize='40px' /></a>
                    <a className='social_media_icon' href="https://www.facebook.com/ronit.king.73"><InstagramIcon className='s_icon' fontSize='40px'/></a>
                    <a className='social_media_icon' href="https://github.com/Ripukesh870"><GitHubIcon className='s_icon' fontSize='40px'/></a>
                    <a className='social_media_icon' href="https://github.com/Ripukesh870"><TwitterIcon className='s_icon' fontSize='40px'/></a>
                </div>
            </div>

        </div>
        
    </>
  )
}

export default Home

















