const AboutSection = () => {
    const currentDate = new Date();
    const bornDate = new Date('1997-01-31');
    const age = currentDate.getFullYear() - bornDate.getFullYear();
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            {/* About me Information */}
            <div className="w-full max-w-sm py-8 px-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
                <h5 className="mb-3 font-semibold text-2xl">
                    Un poco acerca de mi
                </h5>
                {/* <hr className="h-[2px] w-72 m-auto border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-600 to-transparent">
                </hr> */}
                <p className="font-light text-justify">
                    Mi nombre de pila es Simón Bustamante Alzate, tengo {age} años y soy Ingeniero de Sistemas. Sin embargo, desarrollador de software por pasión. Con más de ocho años de experiencia en la industria, he cultivado un profundo amor por el Frontend, aunque también tengo habilidades en el Backend.
                    <br />
                    Constantemente persigo la innovación y me emociona explorar nuevos territorios y enfrentar desafíos desconocidos. La creatividad podría ser mi brújula, y en cada proyecto me esfuerzo por dejar una marca de innovación. Además de dedicarme al mundo digital, encuentro gran alegría en el fútbol, los libros, el póker entre amigos y otras actividades fuera de la pantalla.
                    <br />
                    A lo largo de mi trayectoria, he trabajado en numerosos proyectos personales que, aunque no siempre ven la luz, son un testimonio de mi constante deseo de explorar y crear algo nuevo. Así, soy el fiel reflejo de aquel niño que no veía la hora de explorar algo nuevo en su computadora.
                </p>
            </div>
        </div>
    )
}

export default AboutSection