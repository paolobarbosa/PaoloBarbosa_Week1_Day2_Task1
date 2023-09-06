import React, { useState } from 'react';
import './App.css';

import paoloImage from './images/paolo.jpg';
import janeImage from './images/jane.jpg';
import bobImage from './images/bob.jpg';

const employees = [
  {
    id: 1,
    name: 'Paolo Barbosa',
    image: paoloImage,
    designation: 'DevOps',
    fullData: 'Paolo Barbosa - DevOps - 3 years experience',
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: janeImage,
    designation: 'Product Manager',
    fullData: 'Jane Smith - Product Manager - 8 years experience',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    image: bobImage,
    designation: 'UI Designer',
    fullData: 'Bob Johnson - UI Designer - 5 years experience',
  },
];

function App() {
  const [hoveredEmployee, setHoveredEmployee] = useState(null);
  const [isHoveringModal, setIsHoveringModal] = useState(false);

  const handleMouseOver = (employee) => {
    setHoveredEmployee(employee);
  };

  const handleMouseOut = () => {
    if (!isHoveringModal) {
      setHoveredEmployee(null);
    }
  };

  const handleModalMouseEnter = () => {
    setIsHoveringModal(true);
  };

  const handleModalMouseLeave = () => {
    setIsHoveringModal(false);
    setHoveredEmployee(null);
  };

  const handleCloseModal = () => {
    setHoveredEmployee(null);
  };

  return (
    <div className="App">
      <h1>Week 1 Day 2</h1>
      <h1>Task 1</h1>
      <h3>Employee List</h3>
      <ul>
        {employees.map((employee) => (
          <li
            key={employee.id}
            onMouseOver={() => handleMouseOver(employee)}
            onMouseOut={handleMouseOut}
          >
            {employee.name}
          </li>
        ))}
      </ul>

      {hoveredEmployee && (
        <div className="modal" onMouseEnter={handleModalMouseEnter} onMouseLeave={handleModalMouseLeave}>
          <button className="modal-close" onClick={handleCloseModal}>
            X
          </button>
          <h2>{hoveredEmployee.name}</h2>
          <img
            src={hoveredEmployee.image}
            alt={hoveredEmployee.name}
            style={{ maxWidth: '200px', maxHeight: '200px' }}
          />
          <p>{hoveredEmployee.designation}</p>
          <p>{hoveredEmployee.fullData}</p>
        </div>
      )}
    </div>
  );
}

export default App;
