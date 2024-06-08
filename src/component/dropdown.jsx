import React, { useState } from 'react'
import flechedubas from '../assets/arrow-down.png'
import flecheduhaut from '../assets/arrow-up.png'

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='dropdown-section'>
      <div className={`dropdown ${isOpen ? 'open' : ''}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-button">
          {title} <img src={isOpen ? flecheduhaut : flechedubas} alt="arrow" />
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Dropdown
