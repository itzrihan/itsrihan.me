import styled from "styled-components";
import { skills } from "../data/constant.js";
import { Tilt } from "react-tilt";

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  @media (max-width:768px){   
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Skill = styled.div`
  width: 100%;
  background-color: rgba(0, 51, 17, 0.83);
  border: 1px solid rgba(0, 255, 102, 0.25);
  box-shadow: rgba(0, 255, 102, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    padding: 20px 36px;
  }
  @media (max-width: 500px) {
    padding: 20px 20px;
  }
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  border: 1px solid rgba(0, 255, 102, 0.5);
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: rgba(0, 34, 17, 0.5);
  &:hover {
    background-color: rgba(0, 255, 102, 0.2);
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
    return (
        <section id="skills" className="mt-[-1px] relative py-5 bg-[#003311]">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-[#003311]"></div>
            <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(0, 255, 102, 0.2) 4.54%, rgba(0, 170, 68, 0.26) 34.2%, rgba(0, 255, 102, 0.1) 77.55%)" }}></div>
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-300 md:px-8">
                <div className="max-w-3xl mx-auto relative">
                    <h3 className="text-[#00FF66] text-5xl font-bold max-sm:text-3xl">
                        Skills I Have
                    </h3>
                    <h1 className="mt-5 text-lg relative z-20">A glimpse into my expertise</h1>
                </div>
                <SkillsContainer className="mt-12 gap-10 max-lg:gap-5 max-sm:py-1">
                    {skills.map((skill, index) => (
                        <Tilt key={`skill-tilt-${index}`} className="flex">
                            <Skill key={`skill-${index}`}>
                                <h4 className="text-lg text-white font-semibold">{skill.title}</h4>
                                <div className="grid grid-cols-3 gap-5 mt-5 max-lg:grid-cols-2 max-md:grid-cols-3 max-[580px]:grid-cols-2">
                                    {skill.skills.map((item, index_x) => (
                                        <SkillItem key={`skill-item-${index_x}`} className="text-[#c9d1d9]">
                                            <SkillImage src={item.image} alt={item.name} />
                                            {item.name}
                                        </SkillItem>
                                    ))}
                                </div>
                            </Skill>
                        </Tilt>
                    ))}
                </SkillsContainer>
            </div>
        </section>
    );
};

export default Skills;
