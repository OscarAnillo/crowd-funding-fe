import MastercraftComponent from "./mastercraft-component";
import NumbersComponent from "./numbers-component";
import AboutComponent from './about-component';

export default function MainComponent(){
    return (
        <main className="main">
            <MastercraftComponent />
            <NumbersComponent />
            <AboutComponent />
        </main>
    )
}