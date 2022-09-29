export default function MastercraftComponent({ showMenu }){
    return (
        <div className={`${showMenu ? "show-main-div" : "main-div"}`}>
                <div className="main-innner-div">
                    <img src="/images/logo-mastercraft.svg" alt="" className="img-master"/>
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautifully handcrafted monitor stand to reduce neck and eye strain.</p>
                    <div className="main-inner-row">
                        <button className="cyan-btn" title="back">Back this project</button>
                        <button className="bookmark-btn" title="bookmark"><img src="/images/icon-bookmark.svg" alt=""/></button>
                    </div>
                </div>
            </div>
    )
}