export default function Contact() {
    return (
        <div className="container-contact" >
            <div className="contact" id="contact">
                <div className="cont-form">
                    <h2>Send A <span>Message</span></h2>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input
                            type="hidden"
                            name="access_key"
                            value="5f281ad1-1022-4a01-9211-fd925fb8369e" 
                        />
                        <div>
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="cont-detail">
                    <h2>Get In <span>Touch</span></h2>
                    <p>Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.
                    Simply fill the from and send me an email.</p>
                    <div class="social-icons">
                    <a href="https://www.linkedin.com/in/sujal-kumar-vashisth-806b681b2/" target="_blank"><i class="fab fa-linkedin"></i></a>
                     <a href="https://github.com/Sujal0007" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
            </div>
                </div>

            </div>
        </div>
    );
}
