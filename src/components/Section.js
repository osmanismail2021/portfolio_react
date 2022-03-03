import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './styles/Section.css'
import Modal from './Modal';

const Section = () => {

  const [modalActive,setModalActive] = useState(false)
  
  const showModal = () => {
    setModalActive(!modalActive)
  }
  
  return (
    <div className='section'>
        <div>
          <h1 className='main-header'>My name is <span>Osman Ismail</span> </h1>
          <p className='main-status'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quibusdam, error dolorum veniam magni saepe voluptatum ab culpa quam assumenda corporis sequi ratione. Delectus dignissimos aliquam voluptate aut. Possimus, temporibus!</p>
          <div className="main-btn">
              <Link onClick={showModal} to='/'>See Work</Link>
          </div>

            {modalActive && <Modal showModal={showModal}/>}

        </div>
    </div>
  )
}

export default Section;