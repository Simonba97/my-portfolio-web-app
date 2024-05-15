import CodeFigure from "./common/CodeFigure"
import logoSimon from "../assets/logoSimon.png";
const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col items-start justify-center">
            <div className="pl-3 border-l-[1px] border-l-gray-400 space-y-5">
                <CodeFigure />
                {/* Main information */}
                <div className="flex space-x-3">
                    <img src={logoSimon} alt="memojiSimon" className="w-28" />
                    <div id="mainInformation" className="flex flex-col items-start justify-center space-y-[-5px]">
                        <h1 id="myName" className="text-4xl font-bold text-gray-200">I'm Simón</h1>
                        <span id="myJob" className="text-xl font-extralight tracking-widest text-gray-300">Frontend Developer</span>
                    </div>
                </div>

                <CodeFigure />
            </div>

        </div>
    )
}

export default HeroSection