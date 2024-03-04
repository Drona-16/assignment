import React from 'react';
import Progressbar from './progressbar.js';

const ProductivityGrid = () => {

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
