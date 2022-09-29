import data from "../data/data-products.json";

export default function PledgeComponent(){
    
    return (
        <div>
            {data.map(item => (
                <div key={item.name} className="pledge">
                    <h3>{item.name}</h3>
                    <h4>{item.pledge}</h4>
                    <p>{item.text}</p>
                    <h1>{item.quantity} <span>left</span></h1>
                    <button>Select Reward</button>
                </div>
            ))}
        </div>
    )
}