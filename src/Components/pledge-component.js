import data from "../data/data-products.json";

export default function PledgeComponent(){

    return (
        <div>
            {data.map(item => (
                <div key={item.name} className={`${item.className}`}>
                    <div className="pledge-row-desktop">
                        <h3>{item.name}</h3>
                        <h4>{item.pledge}</h4>
                    </div>
                    <p>{item.text}</p>
                    <div className="pledge-row-desktop">
                        <h1>{item.quantity} <span>left</span></h1>
                        <button>{item.className === "pledge" ? "Select Reward" : "Out of Stock" }</button>
                    </div>
                </div>

            ))}
        </div>
    )
}