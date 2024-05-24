import TitleSection from "./common/TitleSection"
import PVHome from "../assets/Projects/PortalVerdolaga/PVHome-min.png";
import PVMatchMoreDetail from "../assets/Projects/PortalVerdolaga/PVMatchMoreDetail-min.png";
import UCHome from "../assets/Projects/UberClone/UCHome-min.png";
import UCRide from "../assets/Projects/UberClone/UCRide-min.png";
import { motion } from 'framer-motion'
import Slider from "./Slider";
import ProjectCard from "./common/ProjectCard";

const ProjectsSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} id="projects" className="flex flex-col items-start justify-center px-3 sm:px-8 mb-5">
            {/* About me Information */}
            <div className="w-full">
                <TitleSection
                    title="Proyectos"
                    gradientUnderline={'bg-gradient-to-r from-amber-500 to-pink-500'}
                    emoji={"🚀"}
                />

                <Slider
                    reactNodesContents={
                        [
                            /* Project #1 */
                            <ProjectCard
                                keyProject="portalVerdolaga"
                                title="Portal Verdolaga"
                                type="WebApp"
                                summary={"Sitio web para resultados e información en vivo sobre Atlético Nacional, utilizando APIs pagas para obtener datos actualizados. Incluye módulos de calendarios, resultados, próximos partidos, estadísticas y más 🇳🇬"}
                                tags={[
                                    <span className="bg-yellow-900 text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-600">TypeScript</span>,
                                    <span className="bg-cyan-900 text-cyan-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-cyan-600">Tailwind CSS</span>,
                                    <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-600">React JS</span>
                                ]}
                                linkProject="https://portalverdolaga.com"
                                images={[PVHome, PVMatchMoreDetail]}
                            />,

                            /* Project #2 */
                            <ProjectCard
                                keyProject="uberClone"
                                title="Uber Clone"
                                type="APP"
                                summary="Creación de una aplicación similar a Uber, replicando su interfaz y utilizando APIs para calcular distancias y costos de viajes. Incluye una representación visual del recorrido desde el punto de origen hasta el destino 📍"
                                tags={[
                                    <span className="bg-yellow-900 text-yellow-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-yellow-600">TypeScript</span>,
                                    <span className="bg-cyan-900 text-cyan-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-cyan-600">Tailwind CSS</span>,
                                    <span className="bg-blue-900 text-blue-300 text-xs font-medium me-2 px-2.5 py-0.5 rounded border border-blue-600">React Native</span>
                                ]}
                                images={[UCHome, UCRide]}
                            />
                        ]
                    }
                />

            </div>
        </motion.section>
    )
}

export default ProjectsSection