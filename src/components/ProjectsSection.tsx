import TitleSection from "./common/TitleSection"
import PVHome from "../assets/Projects/PortalVerdolaga/PVHome.png";

const ProjectsSection = () => {
    return (
        <section id="projects" className="h-screen flex flex-col items-start justify-center p-8">
            {/* About me Information */}
            <div className="w-full">
                <TitleSection
                    title="Proyectos"
                    gradientUnderline={'bg-gradient-to-r from-amber-500 to-pink-500'}
                    emoji={"🚀"}
                />

                <div id="contentProjects" className="flex flex-col sm:flex-row items-center bg-gray-700 rounded-md font-mono">
                    <div className="p-4 sm:p-0 sm:w-1/2 flex flex-col sm:flex-1 items-center justify-center space-y-2">
                        <div id="mainInformationProject">
                            <h5 className="text-2xl sm:text-3xl font-bold text-gray-200 -mb-2">Portal Verdolaga</h5>
                            <span className="text-sm sm:text-xs text-gray-400 ">WebApp</span>
                        </div>
                        <div id="summaryProject">
                            <p className="flex flex-col text-start text-sm -tracking-wider sm:tracking-normal">
                                <span> Sitio Web deportivo dedicado a Atl. Nacional 🇳🇬</span>
                                <span> ⚽️ ¿Próximo partido? ¡Victoria segura!</span>
                                <span> ⬅️ ¿Último partido? Obviamente una victoria</span>
                                <span> 📆 Calendario y más...</span>
                            </p>
                        </div>
                        <div id="skillUsed">
                            <p className="flex mt-2">
                                <span className="bg-yellow-900 text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-400">TypeScript</span>
                                <span className="bg-cyan-900 text-cyan-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-cyan-400">Tailwind CSS</span>
                                <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-400">React JS</span>
                            </p>
                        </div>
                        <div className="max-sm:hidden mt-4">
                            <a href="https://portalverdolaga.com/?from=portfolio" target="_blank"><span className="font-light text-base underline italic">{'Ver proyecto'}</span> <span>{'👉🏻'}</span></a>
                        </div>
                    </div>
                    <div className="p-2 sm:p-0 sm:w-1/2 flex justify-center">
                        <img className="w-1/2 -rotate-12 hover:rotate-0 duration-300" src={PVHome} alt="PVHome" />
                    </div>
                </div>
                <div className="sm:hidden mt-4">
                    <a href="https://portalverdolaga.com/?from=portfolio" target="_blank"><span className="font-light text-base underline italic">{'Ver proyecto'}</span> <span>{'👉🏻'}</span></a>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection