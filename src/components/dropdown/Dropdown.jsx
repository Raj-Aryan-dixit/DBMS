import React, { useState } from 'react';
import './Dropdown.css'; // Import your CSS file

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'show' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ⮟
      </button>
      <ul className={`dropdown-menu ${isOpen ? 'slideIn' : 'slideOut'}`}>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
}

export default Dropdown;
