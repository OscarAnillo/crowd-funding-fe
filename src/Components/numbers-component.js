export default function NumbersComponent(){
    return (
        <div className="numbers">
            <div className="numbers-row">
                <div>
                    <h1>$89,914</h1>
                    <p>of $100,000 backed</p>
                </div>
                <div>
                    <h1>5,007</h1>
                    <p>total backers</p>
                </div>
                <div>
                    <h1>56</h1>
                    <p>days left</p>
                </div>
            </div>
            <progress max="100" value="70">70%</progress>
        </div>
    )
}