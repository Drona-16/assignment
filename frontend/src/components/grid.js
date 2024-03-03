import React from 'react';
import 'react-circular-progressbar/dist/styles.css';
import Progressbar from './progressbar.js';

const ProductivityGrid = () => {
  const days = [
    { name: 'Monday', productivity: 'low' },
    { name: 'Tuesday', productivity: 'medium' },
    { name: 'Wednesday', productivity: 'high' },
    { name: 'Thursday', productivity: 'medium' },
    { name: 'Friday', productivity: 'low' },
    { name: 'Saturday', productivity: 'high' },
    { name: 'Sunday', productivity: 'medium' },
  ];

  return (
    <div className="grid-container">
        <div>
            <h3>Productivity on monday</h3>
            <Progressbar
                bgcolor="orange"
                progress="30"
                height={30}
            />
        </div>

        <div>
            <h3>Productivity on Tuesday</h3>
            <Progressbar
                bgcolor="orange"
                progress="84"
                height={30}
            />
        </div>
        <div>
            <h3>Productivity on Wednesday</h3>
            <Progressbar
                bgcolor="orange"
                progress="75"
                height={30}
            />
        </div><div>
            <h3>Productivity on Thursday</h3>
            <Progressbar
                bgcolor="orange"
                progress="50"
                height={30}
            />
        </div>
        <div>
            <br/>
            <h3>Productivity on Friday</h3>
            <Progressbar
                bgcolor="orange"
                progress="25"
                height={30}
            />
        </div>
    </div>
  );
};

export default ProductivityGrid;
