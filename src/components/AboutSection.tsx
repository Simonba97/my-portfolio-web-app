import TitleSection from "./common/TitleSection";
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} id="about" className="flex flex-col items-start justify-center px-5 sm:px-8 mb-20">
            {/* About me Information */}
            <div className="">
                <TitleSection
                    title="Acerca de mí"
                    gradientUnderline={'bg-gradient-to-r from-indigo-400 to-cyan-400'}
                    emoji={"🧑🏻‍💻"}
                />
                <p className="text-lg text-start font-light">
                    Soy <strong>Simón Bustamante Alzate</strong>, <strong>Ingeniero de Sistemas</strong> con más de <strong>ocho años de experiencia</strong> en la industria. Aunque tengo habilidades en <strong>Backend</strong>, mi verdadera pasión reside en el <strong>Frontend</strong>. La creatividad es mi brújula. Fuera del ámbito profesional, disfruto del <>fútbol</>, la <>lectura</>, el <>póker con amigos</> y otras actividades alejadas de la pantalla. A lo largo de mi carrera, he trabajado en numerosos <>proyectos personales</> que, aunque no siempre ven la luz, reflejan mi constante deseo de <>explorar y crear nuevas ideas</>.
                </p>
            </div>
        </motion.section>
    )
}

export default AboutSection