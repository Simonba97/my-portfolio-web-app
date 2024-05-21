import { motion } from 'framer-motion';

const CodeFigure = () => {
    const pointFigure = <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>;

    const configBaseX = { min: 10, max: 200 };
    const configBaseDuration = { min: 1, max: 1.5 };

    return (
        <div className="flex flex-col space-y-2">
            <motion.div initial={{ opacity: 0, x: Math.floor(Math.random() * (configBaseX.max - configBaseX.min + 1)) + configBaseX.min }} animate={{ opacity: 1, x: 0, transition: { duration: Math.floor(Math.random() * (configBaseDuration.max - configBaseDuration.min + 1)) + configBaseDuration.min } }} className="flex space-x-2">
                <div className="w-28 h-2.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                <div className="w-20 h-2.5 bg-gradient-to-r from-amber-500 to-pink-500"></div>
                {pointFigure}
            </motion.div>

            <motion.div initial={{ opacity: 0, x: Math.floor(Math.random() * (configBaseX.max - configBaseX.min + 1)) + configBaseX.min }} animate={{ opacity: 1, x: 0, transition: { duration: Math.floor(Math.random() * (configBaseDuration.max - configBaseDuration.min + 1)) + configBaseDuration.min } }} className="flex space-x-2">
                <div className="w-56 h-2.5 bg-gradient-to-r from-amber-500 to-pink-500"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: Math.floor(Math.random() * (configBaseX.max - configBaseX.min + 1)) + configBaseX.min }} animate={{ opacity: 1, x: 0, transition: { duration: Math.floor(Math.random() * (configBaseDuration.max - configBaseDuration.min + 1)) + configBaseDuration.min } }} className="flex space-x-2">
                <div className="w-11 h-2.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                <div className="w-28 h-2.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                {pointFigure}
                <div className="w-16 h-2.5 bg-gradient-to-r from-amber-500 to-pink-500"></div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: Math.floor(Math.random() * (configBaseX.max - configBaseX.min + 1)) + configBaseX.min }} animate={{ opacity: 1, x: 0, transition: { duration: Math.floor(Math.random() * (configBaseDuration.max - configBaseDuration.min + 1)) + configBaseDuration.min } }} className="flex space-x-2">
                <div className="w-14 h-2.5 bg-gradient-to-r from-amber-500 to-pink-500"></div>
                <div className="w-6 h-2.5 bg-gradient-to-r from-amber-500 to-pink-500"></div>
                <div className="w-28 h-2.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
                <div className="w-16 h-2.5 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
            </motion.div>
        </div >
    )
}

export default CodeFigure