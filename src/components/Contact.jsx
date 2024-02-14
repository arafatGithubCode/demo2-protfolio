const Contact = () => {
  return (
    <section id="contact" className="contact--form">
      <div className="wrapper">
        <div className="contact_top">
          <p>Get In Touch</p>
          <h3>Contact Me</h3>
          <p className="text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, odit.
          </p>
        </div>
        <form>
          <div className="contact_form">
            <div className="form_divider">
              <div className="first_name">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" placeholder="Mr." />
              </div>
              <div className="last_name">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" placeholder="John" />
              </div>
            </div>
            <div className="form_divider">
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="phone">
                <label htmlFor="text">Phone</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="form_divider_bottom">
              <label htmlFor="topic">Chose a topic</label>
              <select id="topic">
                <option>Select one</option>
                <option>Item 1</option>
                <option>Item 2</option>
                <option>Item 3</option>
                <option>Item 4</option>
              </select>
            </div>
            <div className="form_divider_bottom">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5"></textarea>
            </div>
            <div className="warning">
              <input type="checkbox" />
              <span>I accept the terms</span>
            </div>
          </div>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
