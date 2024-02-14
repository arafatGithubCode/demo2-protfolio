export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="container her--wrapper">
        <div className="hero_section_content">
          <p className="section_title">Hey, I&apos;m Arafat</p>
          <h1 className="hero_section_title">
            Full Stack <br /> Developer
          </h1>
          <p className="hero_section_desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
            Dolorum, quas. Amet soluta assumenda cum?
          </p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero_section_img">
          <img src="./img/hero_img.png" alt="Image" />
        </div>
      </div>
    </section>
  );
}
