import TitleSection from "./common/TitleSection";

const AboutSection = () => {
    const currentDate = new Date();
    const bornDate = new Date('1997-01-31');
    const age = currentDate.getFullYear() - bornDate.getFullYear();
    return (
        <section id="about" className="h-screen flex flex-col items-start justify-center p-8">
            {/* About me Information */}
            <div className="">
                <TitleSection title="Acerca de mí" emoji={"🧑🏻‍💻"} />
                {/* <hr className="h-[2px] w-72 m-auto border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent">
                </hr> */}
                <p className="flex flex-col font-light text-start">
                    <span className="text-xl font-semibold pb-2">Hola, soy Simón Bustamante Alzate.</span>
                    <span>
                        Tengo {age} años y soy <span className="font-medium">Ingeniero de Sistemas</span>. Sin embargo, <span className="font-medium">desarrollador de software por pasión</span>. Con más de ocho años de experiencia en la industria, he cultivado un profundo amor por el <span className="font-medium">Frontend</span>, aunque también tengo habilidades en el Backend.
                    </span>
                    <span>
                        Constantemente persigo la innovación y me emociona explorar nuevos territorios y enfrentar desafíos. La creatividad podría ser mi brújula, y en cada proyecto me esfuerzo por dejar una marca de innovación. Además de dedicarme al mundo digital, disfruto del fútbol, los libros, el póker entre amigos y otras actividades fuera de la pantalla.
                    </span>
                    <span>
                        A lo largo de mi trayectoria, he trabajado en numerosos proyectos personales que, aunque no siempre ven la luz, son un testimonio de mi constante deseo de explorar y crear algo nuevo. Siendo así soy el fiel reflejo de aquel niño que no veía la hora de explorar algo nuevo en su computadora.
                    </span>
                </p>
            </div>
        </section>
    )
}

export default AboutSection