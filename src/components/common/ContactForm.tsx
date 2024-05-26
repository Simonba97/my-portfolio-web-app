import { useState } from 'react'

const ContactForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e: any) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/mzbnqkyk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        });

        if (response.ok) {
            setStatus('Success');
            setFormState({
                name: '',
                email: '',
                message: '',
            });
        } else {
            setStatus('Error');
        }
    };

    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit} className="w-11/12 md:w-2/3 bg-gray-700 shadow-md rounded-lg px-8 pt-6 pb-8">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-start mb-1 text-base text-gray-100 font-semibold">Tu nombre:</label>
                    <div className='relative'>
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                            </svg>
                        </div>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            className="border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Estefania Macías Valadez"
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-start mb-1 text-base text-gray-100 font-semibold">Tu correo:</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                            </svg>
                        </div>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="border text-sm rounded-lg block w-full ps-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                            placeholder="name@domain.com"
                            required
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-start mb-1 text-base text-gray-100 font-semibold" htmlFor="message">Mensaje:</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Deja tu mensaje..."
                        value={formState.message}
                        onChange={handleChange}
                        className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <div className="flex items-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </div>
                {status === 'Success' && <p className="text-gray-100 text-xs font-extralight mt-4">¡Gracias por contactarme!</p>}
                {status === 'Error' && <p className="text-gray-100 text-xs font-extralight mt-4">Hubo un error al enviar el mensaje, puedes enviarme el correo directamente a <strong>simonba97@hotmail.com</strong></p>}
            </form>
        </div>
    );
}

export default ContactForm