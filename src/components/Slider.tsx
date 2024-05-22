import { useState } from "react";
import { motion } from "framer-motion";

const Slider = ({ reactNodesContents }: { reactNodesContents: React.ReactNode[] }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reactNodesContents.length);
    };

    return (
        <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0 }} key={currentIndex} className="slider-item">
                {reactNodesContents[currentIndex]}
            </motion.div>
            <br />
            <button className="slider-button next" onClick={nextSlide}>
                Siguiente proyecto
            </button>
        </>
    );
}

export default Slider