import { Close } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Modal.css'


const Modal = ({showModal}) => {
  return (
    <div className='modal'>
        
        <div className='close-modal'>
            <Close className='cm' onClick={showModal} />

        </div>

        <div className='cart'>
            <Link to='/'>Websites</Link>
        </div>

        <div className='cart'>
            <Link to='/'>Designs</Link>
        </div>

        <div className='cart'>
            <Link to='/'>Templates</Link>
        </div>

        <div className='cart'>
            <Link to='/'>Web Apps</Link>
        </div>

    </div>
  )
}

export default Modal