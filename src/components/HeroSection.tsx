import CodeFigure from "./common/CodeFigure"
import logoSimon from "../assets/logoSimon.png";
const HeroSection = () => {
    return (
        <section id="hero" className="h-screen flex flex-col items-center sm:items-start justify-center px-8">
            <div className="pl-3 border-l-[1px] border-l-gray-400 space-y-5">
                <CodeFigure />
                {/* Main information */}
                <div className="flex space-x-3">
                    <img src={logoSimon} alt="memojiSimon" className="w-28" />
                    <div id="mainInformation" className="flex flex-col items-start justify-center space-y-[-5px]">
                        <h1 id="myName" className="text-4xl font-bold text-gray-200">Soy Simón</h1>
                        <span id="myJob" className="text-lg tracking-widest text-gray-400 font-mono">Frontend Developer</span>
                    </div>
                </div>
                <CodeFigure />
            </div>
        </section>
    )
}

export default HeroSection