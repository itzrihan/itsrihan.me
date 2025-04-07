import { features } from '../data/constant';

const Project = () => {
    return (
        <section id="project" className="mt-[-1px] relative py-12 bg-[#0d1117]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#0d1117]"></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-[#8b949e] md:px-8">
                <div className="max-w-3xl mx-auto relative">
                    <h3 className="text-[#c9d1d9] text-5xl font-semibold max-sm:text-3xl relative z-20">
                        Still Working <span className="text-[#58a6ff]">On projects</span>
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
                                    backgroundColor: "#161b22",
                                    backdropFilter: "blur(16px) saturate(180%)",
                                    WebkitBackdropFilter: "blur(16px) saturate(180%)",
                                    border: "1px solid #30363d",
                                    boxShadow: "0 4px 10px rgba(88, 166, 255, 0.15)",
                                    borderRadius: "12px",
                                }}
                            >
                                <a href={item.link} className="flex h-full w-full flex-col gap-y-2">
                                    <div className="w-full h-[180px] mx-auto text-[#58a6ff] rounded-full flex items-center justify-center">
                                        <img src={item.icon} alt="" className='w-full h-full object-cover'/>
                                    </div>
                                    <h4 className="text-lg text-[#c9d1d9] font-semibold">{item.title}</h4>
                                    <p className="text-left text-[#8b949e]">{item.desc}</p>
                                    <ul className="flex flex-wrap justify-start items-center gap-2 mt-4">
                                        {item.techs.map((tech, index) => (
                                            <li
                                                key={index}
                                                className="p-2 bg-[#21262d] text-[#c9d1d9] rounded-lg border border-[#30363d] hover:bg-[#30363d]"
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
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(88, 166, 255, 0.2) 4.54%, rgba(88, 166, 255, 0.26) 34.2%, rgba(88, 166, 255, 0.1) 77.55%)" }}></div>
        </section>
    );
};

export default Project;
