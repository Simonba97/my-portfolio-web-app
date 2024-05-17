import SkillCard from "./common/SkillCard"
import TitleSection from "./common/TitleSection"

const SkillsSection = () => {
    return (
        <section id="skills" className="flex flex-col items-start justify-center p-8">
            {/* About me Information */}
            <TitleSection title="Skills" emoji={"🔥"} />
            {/* <hr className="h-[2px] w-72 m-auto border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent">
                </hr> */}
            <div className="flex flex-wrap justify-evenly">
                <SkillCard titleSkill="HTML" />
                <SkillCard titleSkill="CSS" />
                <SkillCard titleSkill="JavaScript" />
                <SkillCard titleSkill="React JS" />
                <SkillCard titleSkill="Git" />
                <SkillCard titleSkill="SharePoint" />
                <SkillCard titleSkill="SPFx" />
                <SkillCard titleSkill="Power Automate" />
            </div>
        </section>
    )
}

export default SkillsSection