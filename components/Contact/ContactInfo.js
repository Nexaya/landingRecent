import React from "react";

const ContactInfo = () => {
  return (
    <div className="container">
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Germany</h3>
                <p>FrankFurt Germany</p>
                <a href="mailto:hello@nexaya.com">Email: hello@nexaya.com</a>
                <a href="tel:+892-569-756">+892-569-756</a>
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="single-contact-map">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6509156.5834578!2d-123.79616103953882!3d37.1931243309143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb9fe5f285e3d%3A0x8b5109a227086f55!2sCalifornia%2C%20USA!5e0!3m2!1sen!2sbd!4v1591218371520!5m2!1sen!2sbd"></iframe> */}
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327441.3481962601!2d8.306937234081005!3d50.12118576528076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sbd!4v1704455851105!5m2!1sen!2sbd" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
