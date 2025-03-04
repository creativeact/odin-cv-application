import { useState } from 'react'

function Dropdown({ onClick, isOpen }) {
    return (
      <button className='dropDownBtn' onClick={onClick}>
        {isOpen ? (     
          <svg className='dropDownCloseIcon'
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
          <title>section-close</title>
          <path d="M7,15L12,10L17,15H7Z" />
        </svg>
        ) : (
        <svg className='dropDownOpenIcon'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <title>section-open</title>
        <path d="M7,10L12,15L17,10H7Z" />
        </svg>
        )}
      </button>
    )
  }
  
  function Section({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="section">
        <div className='section-header'>
          <h2>{title}</h2>
          <Dropdown onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />
        </div>
        {isOpen && <div className="section-form">{children}</div>}
      </div>
    );
  }

  export { Section }