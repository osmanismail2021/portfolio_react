import { Close, MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'
import logo from '../components/assets/logo3333.png';
import cv from '../components/assets/OSMAN ISMAIL.pdf'

const Header = () => {

    const [navActive,setNavActive] = useState(false)

    const openMenu = () => {
        setNavActive(!navActive)
    }

  return (
    
    
    <div className='header'>

        


        
<div className="logo">
            <a 
            href={cv}
            download={cv}
            rel="noopener noreferrer" 
            >
            <img 
            className='App-logo'
            src={logo}
            alt="" />
            </a>
        </div>

        
        
        <nav>
            <ul className={navActive ? "list-items active" : "list-items"}>

                <div className="close-icon">
                     <Close className='close' onClick={openMenu}/>
                 </div>


                <li><Link to='/'>Works</Link></li>
                <li><Link to='/'>Licences</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>

        
        

        

        


        <div className="hamburger-icon">
            <MenuOutlined className='icon' onClick={openMenu}/>
        </div>

    




    </div>
  );
};

export default Header;
