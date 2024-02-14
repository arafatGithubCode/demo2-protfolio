import data from "../data/index.json";

const Skill = () => {
  return (
    <section className="skill--section" id="skill">
      <div className="container">
        <h3 className="section_title">My Skills</h3>
        <h1 className="section_skill_title">My Expertise</h1>
        <div className="skill_items">
          {data.skills &&
            data.skills.map((skill, index) => (
              <div key={index} className="skill_item">
                <div className="skill_img_box">
                  <img src={skill.src} alt="Image" className="skill_img" />
                </div>
                <h3>{skill.title}</h3>
                <p className="text-md">{skill.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
