import MastercraftComponent from "./mastercraft-component";
import NumbersComponent from "./numbers-component";
import AboutComponent from './about-component';

export default function MainComponent({ showMenu, submitted, setSubmitted }){
    return (
        <main className="main">
            <MastercraftComponent showMenu={showMenu} submitted={submitted} setSubmitted={setSubmitted} />
            <NumbersComponent />
            <AboutComponent />
        </main>
    )
}