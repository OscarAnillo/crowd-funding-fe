import MastercraftComponent from "./mastercraft-component";
import NumbersComponent from "./numbers-component";
import AboutComponent from './about-component';

export default function MainComponent({ showMenu }){
    return (
        <main className="main">
            <MastercraftComponent showMenu={showMenu} />
            <NumbersComponent />
            <AboutComponent />
        </main>
    )
}