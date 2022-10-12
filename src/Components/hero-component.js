import NavComponent from "./nav-component";

export default function HeroComponent({showMenu, clickHandler}){
    return (    
        <div className="hero-bg">
            <NavComponent showMenu={showMenu} clickHandler={clickHandler} />
        </div>
    )
}