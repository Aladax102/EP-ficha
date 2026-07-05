import { Link } from "react-router-dom";
import "../styles/Home.css";
import RadialMenu from "../components/UI/Home/RadialMenu";
import FundoDaBiblioteca from "../assets/FundoBibliotecaSite.png";
import VHSEffect from "../assets/VHSeffect.mp4"

export default function Home() {
    return (
        <div className="home">
            <img
                src={FundoDaBiblioteca}
                className="background-image"
                alt=""
            />

            <video
                className="vhs-overlay"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src={VHSEffect} type="video/mp4"/>
            </video>
            <RadialMenu />
        </div>
    );
}