const AboutMe = () => {
  return (
    <section id="aboutMe" className="about--me">
      <div className="container about--content">
        <div className="left">
          <img className="about_avatar" src="./img/about-me.png" alt="Image" />
        </div>
        <div className="right">
          <p className="section_title">About</p>
          <h1>About Me</h1>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae? Voluptatem, reprehenderit alias? Eligendi aperiam
            tempora numquam sint odit optio.
          </p>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            officiis sit debitis omnis harum sed veniam quasi dicta accusamus
            recusandae?
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
