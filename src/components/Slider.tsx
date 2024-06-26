import { useState } from "react";
import { motion } from "framer-motion";

const Slider = ({ reactNodesContents }: { reactNodesContents: React.ReactNode[] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reactNodesContents.length);
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0 }} key={currentIndex} className="flex justify-center">
                {reactNodesContents[currentIndex]}
            </motion.div>
            <br />
            <div className="flex justify-center">
                {/* <button className="md:bg-gray-300 md:text-gray-700 px-3 py-2 text-sm rounded-md font-medium tracking-wider" onClick={nextSlide}>
                    Siguiente ➡️
                </button> */}
                <button onClick={nextSlide} className="flex items-center underline decoration-wavy underline-offset-4 ">
                    <span>
                        Siguiente
                    </span>
                    <div>
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5">
                            <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </>
    );
}

export default Slider