import CodeFigure from "./common/CodeFigure"

const HeroSection = () => {
    return (
        <div className="h-screen flex flex-col items-start justify-center">
            <div className="pl-3 border-l-[1px] border-l-gray-300 space-y-5">
                <CodeFigure />
                {/* Main information */}
                <div id="mainInformation" className="flex flex-col items-start space-y-[-10px]">
                    <h1 id="myName" className="text-2xl sm:text-3xl font-bold text-gray-200">Simón Bustamante Alzate</h1>
                    <span id="myJob" className="text-xl font-extralight tracking-widest text-gray-300">Frontend Developer</span>
                </div>
                <CodeFigure />
            </div>

        </div>
    )
}

export default HeroSection