const SkillCard = ({ titleSkill, iconContent }: { titleSkill: string, iconContent: React.ReactNode }) => {
    return (
        <div className="w-[46%] h-12 mx-1 my-1 bg-gray-700 sm:w-5/12 sm:h-14 sm:mx-1.5 sm:my-1.5 lg:w-[45%]" >
            <div className="w-full h-full py-1 px-2 lg:px-4 border-b-4 border-blue-300 flex justify-between items-center">
                <div>
                    {iconContent}
                </div>
                <div>
                    <span className="text-sm sm:text-base sm:tracking-wide font-mono">{titleSkill}</span>
                </div>
            </div>
        </div>
    )
}

export default SkillCard