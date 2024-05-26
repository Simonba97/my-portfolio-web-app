import { motion } from 'framer-motion'
import TitleSection from './common/TitleSection'
import ContactForm from './common/ContactForm'
const ContactSection = () => {
    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} id="about" className="flex flex-col items-start justify-center px-5 sm:px-8 mb-5">
            {/* About me Information */}
            <div className='w-full'>
                <TitleSection
                    title="Contacto"
                    gradientUnderline={'bg-gradient-to-r from-teal-400 to-yellow-200'}
                    emoji={"✉️"}
                />
                <ContactForm />
            </div>
        </motion.section>
    )
}

export default ContactSection