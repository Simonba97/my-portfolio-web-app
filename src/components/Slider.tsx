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
            <div>
                <button className="md:bg-gray-300 md:text-gray-700 px-3 py-2 text-sm rounded-md font-medium tracking-wider" onClick={nextSlide}>
                    Siguiente ➡️
                </button>
            </div>
        </>
    );
}

export default Slider