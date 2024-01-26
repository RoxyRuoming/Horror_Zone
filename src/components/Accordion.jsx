import React, { useState } from 'react';
import '../css/Accordion.css';

function Accordion({ panels }) {
  const [activeIndex, setActiveIndex] = useState(null);

  function togglePanel(index) {
    setActiveIndex(index === activeIndex ? null : index);
    // setActiveIndex(prevActiveIndex => prevActiveIndex === index ? null : index); 
  }

  return (
    <div className="accordion" aria-label="a accordion where you can show or hidden the content">
      {panels.map((panel, index) => (
        <div className="accordion-panel" key={index}>
          <div className="accordion-header" onClick={() => togglePanel(index)}>
            <h3 className="panel-title">{panel.title}</h3>
            <div className="panel-icon">
              {index === activeIndex ? '-' : '+'}
            </div>
          </div>
          {index === activeIndex && (
            // <div className="accordion-content">{panel.content}</div>
            <div className="accordion-content">
                <img className="panel-image" src={panel.content.image} alt="the scene of the news" />        
                <p className="panel-text">{panel.content.text}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
