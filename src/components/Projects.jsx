import data from "../data/index.json";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="project_header">
          <div className="project_header_left">
            <p className="project_header_left_title">Recent Projects</p>
            <h3>My Portfolio</h3>
          </div>
          <div className="project_header_right">
            <button className="btn btn-github">Visit My GitHub</button>
          </div>
        </div>
        <div className="portfolio_items">
          {data.portfolio &&
            data.portfolio.map((portfolio, index) => (
              <div key={index} className="portfolio_item">
                <div className="portfolio_img_box">
                  <img
                    src={portfolio.src}
                    alt="Image"
                    className="portfolio_img"
                  />
                </div>
                <div className="portfolio_text_box">
                  <h3>{portfolio.title}</h3>
                  <p className="text-md">{portfolio.description}</p>
                  <div className="github_link">
                    <span>{portfolio.link}</span>
                    <img
                      src="./img/feather-pen-2.png"
                      alt="Icon"
                      className="portfolio_icon"
                    />
                  </div>
                  <span className="line"></span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
