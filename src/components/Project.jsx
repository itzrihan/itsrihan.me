import { features } from '../data/constant';

const Project = () => {
    return (
        <section id="project" className="mt-[-1px] relative py-12 bg-[#003311]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#003311]"></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-300 md:px-8">
                <div className="max-w-3xl mx-auto relative">
                    <h3 className="text-white text-5xl font-semibold max-sm:text-3xl relative z-20">
                        Still Working <span className="text-[#00FF66]">On projects</span>
                    </h3>
                    <p className="mt-5 text-lg relative z-20">Soon It's Gonna Complete </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((item, idx) => (
                            <li
                                key={idx}
                                className="px-8 py-5 hover:scale-105 transition-transform duration-300"
                                style={{
                                    backgroundColor: "rgba(0, 51, 17, 0.5)",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    border: "1px solid rgba(0, 255, 102, 0.25)",
                                    boxShadow: "rgba(0, 255, 102, 0.15) 0px 4px 10px",
                                    borderRadius: "12px",
                                }}
                            >
                                <a href={item.link} className="flex h-full w-full flex-col gap-y-2">
                                    <div className="w-full h-[180px] mx-auto text-[#00FF66] rounded-full flex items-center justify-center">
                                        <img src={item.icon} alt="" className='w-full h-full object-cover'/>
                                    </div>
                                    <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                                    <p className="text-left text-gray-300">{item.desc}</p>
                                    <ul className="flex flex-wrap justify-start items-center gap-2 mt-4">
                                        {item.techs.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="p-2 bg-[#00AA44] text-white rounded-lg hover:bg-[#00FF66] transition-colors"
                                            >
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(0, 255, 102, 0.2) 4.54%, rgba(0, 170, 68, 0.26) 34.2%, rgba(0, 255, 102, 0.1) 77.55%)" }}></div>
        </section>
    );
};

export default Project;
