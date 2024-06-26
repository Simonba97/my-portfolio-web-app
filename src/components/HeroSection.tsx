import CodeFigure from "./common/CodeFigure"
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="hero" className="h-screen flex flex-col items-center sm:items-start justify-center px-5 sm:px-8">
            <div className="w-full pl-4 border-l-[1px] border-l-gray-400 space-y-7">
                <CodeFigure />
                {/* Main information */}
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 2 }}
                    className="flex space-x-3">
                    <img
                        src={'/images/logoSimon-min.png'}
                        alt="memojiSimon"
                        className="w-20 sm:w-28 aspect-auto"
                        loading="lazy"
                    />
                    <div id="mainInformation" className="flex flex-col items-start justify-center space-y-[-5px]">
                        <h1 id="myName" className="text-4xl font-bold text-gray-200">Soy Simón</h1>
                        <span id="myJob" className="text-sm sm:text-lg tracking-widest text-gray-400 font-mono">Frontend Developer</span>
                    </div>
                </motion.div>
                <CodeFigure />
            </div>
        </section>
    )
}

export default HeroSection