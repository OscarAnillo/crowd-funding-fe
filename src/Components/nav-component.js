export default function NavComponent({showMenu, clickHandler}){

    return (
        <div>
            <nav className="nav">
                <div>
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="nav-desktop">
                    <ul>
                        <li>About</li>
                        <li>Discover</li>
                        <li>Get Started</li>
                    </ul>
                </div>
                <div onClick={clickHandler} className="nav-mobile">
                    {showMenu ? 
                    <img src="/images/icon-close-menu.svg" alt=''  /> 
                    : 
                    <img src="/images/icon-hamburger.svg" alt="" />
                    }
                </div>
                
            </nav>
            {showMenu &&
            <div className='menu'>
                <ul>
                    <li>About</li>
                    <li>Discover</li>
                    <li>Get Started</li>
                </ul>
            </div>
            }
        </div>
    )
}