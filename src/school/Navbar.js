import React, { useState } from 'react'
import "./css/navbar.css";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
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
                    <img src="" alt="" />
                    <h3>P.P.M School</h3>
                </div>
                <div className='school_navbar_contaner1 ' id={open===1?"additionalCss":"additionalCss1"}>
                <div className='Sbtn' >
                       <Link to='/'><button className='btn btn-secondary schoo_btn school_dropdwn_togal' >Dashboad</button></Link> 
                    </div>
                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            School Work
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='/registerupload' className="dropdown-item " >New Registation upload</Link></li>
                            <li onClick={handlelist}><Link to='/resultupload' className="dropdown-item" >Result Upload</Link></li>
                            <li onClick={handlelist}><Link to="/newnotification" className="dropdown-item">New Update</Link></li>
                            <li onClick={handlelist}><Link className="dropdown-item">New Addmition Upload</Link></li>
                            
                        </ul>
                    </div>
                    
                    <div className="dropdown Sbtn school_dropbutton" >
                        <button className="btn btn-secondary dropdown-toggle school_dropdwn_togal" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Student Work
                        </button>
                        <ul className={`dropdown-menu ${open===1?'dropdown-menu-dark':'School_dropdown_menu' }  `}>
                            <li onClick={handlelist}><Link to='addmition' className="dropdown-item" >Addmition </Link></li>
                            <li onClick={handlelist}><Link to='result' className="dropdown-item" >Result</Link></li>
                            <li onClick={handlelist}><Link to="registation" className="dropdown-item" >registation</Link></li>
                            
                        </ul>
                    </div>
                    <div className='Sbtn' >
                        <Link to='/login'  className='btn btn-secondary schoo_btn school_dropdwn_togal' >{log===1 ? "login" : "logout"}</Link>
                    </div>
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


