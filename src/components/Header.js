import { Close, MenuOutlined } from '@material-ui/icons';
import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css'
import logo from '../components/assets/logo3333.png';

const Header = () => {

    const [navActive,setNavActive] = useState(false)

    const openMenu = () => {
        setNavActive(!navActive)
    }

  return (
    <div className='header'>
        
        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <nav>
            <ul className={navActive ? "list-items active" : "list-items"}>

                <div className="close-icon">
                     <Close className='close' onClick={openMenu}/>
                 </div>


                <li><Link to='/'>Works</Link></li>
                <li><Link to='/'>Projects</Link></li>
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

// import { Close, MenuOutlined } from '@material-ui/icons';
// import logo from '../components/assets/logo3333.png';
// import React, {useState} from 'react'
// import { Link } from 'react-router-dom'
// import './styles/Header.css'


// const Header = () => {

//     const [navActive,setNavActive] = useState(false)

//     const openMenu = () => {
//         setNavActive(!navActive)
//     }

//   return (
//     <div className='header'>
        
//         <div className="logo">
//             <img src={logo} alt="" />
//         </div>

//         <nav>
//             <ul className={navActive ? "list-items active" : "list-items"}>

//                 <div className="close-icon">
//                      <Close className='close' onClick={openMenu}/>
//                  </div>


//                 <li><Link to='/'>Works</Link></li>
//                 <li><Link to='/'>Projects</Link></li>
//                 <li><Link to='/'>Licences</Link></li>
//                 <li><Link to='/'>About</Link></li>
//                 <li><Link to='/contact'>Contact</Link></li>
//             </ul>
//         </nav>


//         <div className="menu-icon">
//             <MenuOutlined className='icon' onClick={openMenu}/>
//         </div>




//     </div>
//   );
// };
    


// export default Header;