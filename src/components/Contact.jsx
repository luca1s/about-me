import { FaLinkedin, FaGithubSquare, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
    return (
        <div className="h-screen dark:bg-gray-900">
            <div className="flex justify-center items-center flex-col gap-4 h-full">
                <h1 className="text-7xl text-gray-200">Contact me</h1>
                <div className="flex items-center flex-row gap-3">
                    <a href="https://www.linkedin.com/in/luca1s/" className="hover:outline outline-pink-500 text-white text-6xl rounded">
                        <FaLinkedin />
                    </a>
                    <a href="mailto:luc@luca1s.tech" className="hover:outline outline-lime-500 text-white text-6xl px-2 rounded">
                        <FaEnvelope />
                    </a>
                    <a href="https://github.com/luca1s/" className="hover:outline outline-amber-500 text-white text-6xl rounded">
                        <FaGithubSquare />
                    </a>
                </div>
            </div>
        </div>
    )
}