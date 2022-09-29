import { useState } from 'react';

import data from "../data/data-products.json";

export default function PledgeComponent(){
    const [test, setTest] = useState('act');

    return (
        <div>
            {data.map(item => (
                <div key={item.name} className={`${item.className}`}>
                    <h3>{item.name}</h3>
                    <h4>{item.pledge}</h4>
                    <p>{item.text}</p>
                    <h1>{item.quantity} <span>left</span></h1>
                    <button>{item.className === "pledge" ? "Select Reward" : "Out of Stock" }</button>
                </div>
            ))}
        </div>
    )
}