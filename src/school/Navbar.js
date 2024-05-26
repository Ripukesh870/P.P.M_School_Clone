import React, { useState } from 'react'
import "./css/navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../school/image/logo.png';
function Navbar() {
    const [log,setlog]=useState(1);
    const [open,setopen]=useState(1);

    const handleMenu=()=>{
        setopen(open===1?0:1);

    }
    const handlelist=()=>{
        setopen(1)
    }

    return (
        <>
            <div className='school_navbar'>
                
                <div className='school_navbar_contaner'>
                    {/* <img src="" alt="" />
                    <h3>P.P.M School</h3> */}
                    <img src={logo} alt="" />
                </div>
                <div className='school_navbar_contaner1 ' id={open===1?"additionalCss":"additionalCss1"}>
                    <div className='Sbtn' >
                       <Link to='/'><button className='btn btn-secondary schoo_btn school_dropdwn_togal' >Home</button></Link> 
                    </div>
                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal schoo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Admission
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='/registerupload' className="dropdown-item " >Adminsion process</Link></li>
                            <li onClick={handlelist}><Link to='/resultupload' className="dropdown-item" >Fee structure</Link></li>
                            {/* <li onClick={handlelist}><Link to="/newnotification" className="dropdown-item">New Update</Link></li>
                            <li onClick={handlelist}><Link to="/newadmition" className="dropdown-item">New Addmition Upload</Link></li> */}
                            
                        </ul>
                    </div>
                    
                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal schoo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Facilites
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Library </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Transport</Link></li>
                            <li onClick={handlelist}><Link to="registation" className="dropdown-item" >Computer lab</Link></li>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Smart Class </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Subject lab</Link></li>
                            <li onClick={handlelist}><Link to="registation" className="dropdown-item" >Dispanray </Link></li> 
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Activity</Link></li>
                            <li onClick={handlelist}><Link to="registation" className="dropdown-item" >Sports </Link></li>    
                        </ul>
                    </div>

                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal schoo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Parent's area
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Result </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Homeworks</Link></li>
                           
                        </ul>
                    </div>
                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal schoo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Events
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Gallery </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Media</Link></li>
                        </ul>
                    </div>

                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal schoo_btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            About Us
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >History </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >School infre=astructure/ Land area</Link></li>
                            
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >History </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >School infre=astructure/ Land area</Link></li>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Faculity Qualification/ Salaries </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Accadmic</Link></li>
                            
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >School Guideline</Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >T.C Section</Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Downloads</Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Governense Structure</Link></li>
                            
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >C.B.S.E</Link></li>



                        </ul>
                    </div>
                            
                    <div className='Sbtn' >
                       <Link to='/'><button className='btn btn-secondary schoo_btn school_dropdwn_togal schoo_btn' >Administration</button></Link> 
                    </div>
                    <div className='Sbtn' >
                       <Link to='/'><button className='btn btn-secondary schoo_btn school_dropdwn_togal' >Student Detials</button></Link> 
                    </div>
                    <div className='Sbtn' >
                       <Link to='/'><button className='btn btn-secondary schoo_btn school_dropdwn_togal' >Contact</button></Link> 
                    </div>


                    {/* <div className='Sbtn' >
                        <Link to='/login'  className='btn btn-secondary schoo_btn school_dropdwn_togal' >{log===1 ? "login" : "logout"}</Link>
                    </div> */}
                </div>
                <div className='school_menu ' onClick={handleMenu}>
                    {
                        open===1 ? <MenuIcon className='school_menu_icon'/> : <CloseIcon className='school_menu_icon'/>
                    }
                </div>
            </div>
            
        </>
    )
}


export default Navbar


