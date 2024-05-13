const CodeFigure = () => {
    const pointFigure = <div className="w-2.5 h-2.5 bg-gray-300 rounded-full"></div>;
    return <div className="flex flex-col space-y-2">
        <div className="flex space-x-2">
            <div className="w-28 h-2.5 bg-red-500 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
            <div className="w-20 h-2.5 bg-red-500 bg-gradient-to-r from-teal-400 to-yellow-200"></div>
            {pointFigure}
        </div>
        <div className="flex space-x-2">
            <div className="w-56 h-2.5 bg-red-500  bg-gradient-to-r from-pink-500 to-rose-500"></div>
        </div>
        <div className="flex space-x-2">
            <div className="w-11 h-2.5 bg-red-500 bg-gradient-to-r from-emerald-400 to-cyan-400"></div>
            <div className="w-28 h-2.5 bg-red- bg-gradient-to-r from-amber-500 to-pink-500"></div>
            {pointFigure}
            <div className="w-16 h-2.5 bg-red-500 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
        <div className="flex space-x-2">
            <div className="w-14 h-2.5 bg-red-500 bg-gradient-to-r from-amber-500 to-pink-500"></div>
            <div className="w-6 h-2.5 bg-red-500 bg-gradient-to-r from-blue-200 to-cyan-200"></div>
            <div className="w-28 h-2.5 bg-red-500 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
            <div className="w-16 h-2.5 bg-red-500 bg-gradient-to-r from-indigo-400 to-cyan-400"></div>
        </div>
    </div>
}

export default CodeFigure