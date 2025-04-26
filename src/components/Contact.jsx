import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoLogoGithub } from "react-icons/io5";
import { FaFiverr } from "react-icons/fa6";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { useRef } from 'react';
import sendmail from '../utils/sendmail.util';

function Contact() {
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        sendmail(
            form,
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            import.meta.env.VITE_PUBLIC_KEY
        );
    };
    const contactMethods = [
  {
    icon: <MdOutlineMarkEmailRead className='text-2xl text-[#58a6ff]'/>,
    title: 'Email',
    description: 'Connect with me through email',
    contact: 'mononrihan7@gmail.com',
    link: 'mailto:mononrihan7@gmail.com',
  },
  {
    icon: <IoLogoGithub className="text-2xl text-[#58a6ff]" />,
    title: 'GitHub',
    description: 'Let\'s contribute',
    contact: 'Contribute',
    link: 'https://github.com/itzrihan',
  },
  {
    icon: <CiLinkedin className="text-2xl text-[#58a6ff]" />,
    title: 'LinkedIn',
    description: 'Let me know if you need me',
    contact: 'Let\'s connect',
    link: 'https://www.linkedin.com/in/msrihan/',
  },
  {
    icon: <FaFiverr className="text-2xl text-[#58a6ff]" />,
    title: 'Fiverr',
    description: 'Check out my Fiverr gigs',
    contact: 'Visit Profile',
    link: 'https://www.fiverr.com/rihan__' // Replace with your actual Fiverr link
  }
];

    return (
        <section id="contact" className="mt-[-5px] relative bg-[#0d1117] py-10">
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px] max-sm:hidden' style={{ background: "linear-gradient(106.89deg, rgba(88, 166, 255, 0.11) 15.73%, rgba(88, 166, 255, 0.41) 15.74%, rgba(88, 166, 255, 0.26) 56.49%, rgba(88, 166, 255, 0.4) 115.91%)" }}></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center container relative z-10">
                <div>
                    <h1 className="text-[#58a6ff] text-5xl font-bold max-sm:text-3xl">Contact us</h1>
                    <h1 className="mt-5 text-2xl font-semibold text-[#c9d1d9] md:text-3xl">
                    Start a chat with me anytime 
                    </h1>
                    <p className="mt-3 text-[#8b949e]">
                        I&apos;d love to hear from you. Please fill out this form or shoot an email.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 max-sm:gap-y-4">
                        {contactMethods.map((method, index) => (
                            <div key={index}
                                className="rounded-2xl flex flex-col justify-center items-center p-2 hover:bg-[#161b22] transition-colors" style={{
                                    backgroundColor: "#161b22",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    borderRadius: "12px",
                                    border: "1px solid #30363d",
                                    boxShadow: "0 4px 10px rgba(88, 166, 255, 0.15)",
                                }}>
                                <span className="inline-block p-3 text-[#58a6ff] rounded-full bg-[#21262d]">
                                    {method.icon}
                                </span>
                                <h2 className="mt-4 text-base font-medium text-[#c9d1d9]">{method.title}</h2>
                                <p className="mt-2 text-sm text-[#8b949e]">{method.description}</p>
                                <a href={method.link} target='_blank' rel="noopener noreferrer" className="mt-2 text-sm text-[#58a6ff] hover:text-[#79c0ff] transition-colors">{method.contact}</a>
                            </div>
                        ))}
                    </div>
                    <div className="p-4 py-6 rounded-lg bg-[#161b22] border border-[#30363d] md:p-8 relative z-10">
                        <form ref={form} onSubmit={handleSubmit} className="z-20">
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-[#c9d1d9]">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="kolifla"
                                        name="user_firstname"
                                        required
                                        className="block w-full px-5 py-2.5 mt-2 border rounded-lg placeholder-[#484f58] bg-[#0d1117] text-[#c9d1d9] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>

                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-[#c9d1d9]">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Makva"
                                        name="user_lastname"
                                        required
                                        className="block w-full px-5 py-2.5 mt-2 border rounded-lg placeholder-[#484f58] bg-[#0d1117] text-[#c9d1d9] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] focus:outline-none focus:ring focus:ring-opacity-40"
                                    />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-[#c9d1d9]">Email address</label>
                                <input
                                    type="email"
                                    placeholder="kolifla@example.com"
                                    name="user_email"
                                    required
                                    className="block w-full px-5 py-2.5 mt-2 border rounded-lg placeholder-[#484f58] bg-[#0d1117] text-[#c9d1d9] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-[#c9d1d9]">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    className="block resize-none w-full h-32 px-5 py-2.5 mt-2 border rounded-lg md:h-56 placeholder-[#484f58] bg-[#0d1117] text-[#c9d1d9] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#58a6ff] rounded-lg hover:bg-[#79c0ff] focus:outline-none focus:ring focus:ring-[#58a6ff] focus:ring-opacity-50">
                             Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </section>
    );
}

export default Contact;
