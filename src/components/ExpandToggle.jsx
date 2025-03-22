import { useState } from 'react'

function DropdownIcon({ onClick, isOpen }) {
    return (
      <button className='dropDownBtn' onClick={onClick}>
        {isOpen ? (     
          <svg className='dropDownCloseIcon'
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24">
          <title>editor-close</title>
          <path d="M7,15L12,10L17,15H7Z" />
        </svg>
        ) : (
        <svg className='dropDownOpenIcon'
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24">
        <title>editor-open</title>
        <path d="M7,10L12,15L17,10H7Z" />
        </svg>
        )}
      </button>
    )
  }
  
  function ExpandToggle({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="editor">
        <div className='editor-header'>
          <h2>{title}</h2>
          <DropdownIcon onClick={() => setIsOpen(prev => !prev)} isOpen={isOpen} />
        </div>
        <div className={`editor-form ${isOpen ? 'visible' : 'hidden'}`}>
          {children}
        </div>
      </div>
    );
  }

  export { ExpandToggle }