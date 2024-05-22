const SkillCard = ({ titleSkill, iconContent }: { titleSkill: string, iconContent: React.ReactNode }) => {
    return (
        <>
            {/* <div className="relative w-40 h-24 flex justify-center items-center z-10 transition duration-150 before:content-[' '] before:absolute before:top-0 before:left-10 before:w-1/2 before:h-full before:no-underline before:bg-white before:rounded-lg before:skew-x-[15deg] before:transition before:duration-[0.5s] before:bg-custom-gradient before:hover:transform before:hover:skew-x-0 before:hover:scale-x-[1.3] after:content-[' '] after:absolute after:top-0 after:left-10 after:w-1/2 after:h-full after:no-underline after:bg-white after:rounded-lg after:skew-x-[15deg] after:transition after:duration-[0.5s] after:bg-custom-gradient after:filter after:blur-[30px] after:hover:transform after:hover:skew-x-0 after:hover:scale-x-[1.3]">
                <span className="block absolute top-0 left-0 right-0 bottom-0 z-20 pointer-events-none"></span>
                <div className="relative w-48 h-20 bg-[rgba(255, 255, 255, 0.05)] backdrop-blur-[10px] shadow-[0_5px_15px_rgba(0,0,0,0.1)] rounded-lg z-10 transform duration-[0.5s] text-white flex justify-center items-center">
                    <h2 className="text-xl italic font-semibold text-gray-200">{titleSkill}</h2>
                </div>
            </div> */}
            <div className="m-[6px] min-w-full sm:min-w-52 h-11 sm:h-14 bg-gray-700" >
                <div className="w-full h-full py-1 px-4 border-b-4 border-blue-300 flex justify-between items-center">
                    <div className="">
                        {iconContent}
                    </div>
                    <div className="">
                        <span className="tracking-wide font-mono">{titleSkill}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SkillCard