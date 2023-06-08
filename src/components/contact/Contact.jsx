import React from "react"
import './index.css' 
import logoLinkedin from './../../assets/linkedin_logo.png'
import logoGitHub from './../../assets/github_logo.png'
import logoEmail from './../../assets/email_logo.png'
import logoInstagram from './../../assets/instagram_logo.png'


const Contact = () => {
    return (
        <div id="contact-container">
            <h3  className="topic-title" id="contact">Contact</h3>
            <section class="container">
                <div id="left-subsection" class="subsection">
                    <div id="instagram" class="card">
                        <div class="logo">
                            <img src={logoInstagram} alt=""/>
                        </div>
                        <div class="title">
                            <h1 class="title-name-card">
                                Instagram
                            </h1>
                        </div>
                        <div class="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div class="final-button">
                            <a href="https://www.instagram.com/vyniciusmartorano/" target="_blank">
                                <button id="button-instagram" class="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div id="email" class="card">
                        <div class="logo">
                            <img src={logoEmail} alt=""/>
                        </div>
                        <div class="title">
                            <h1 class="title-name-card">
                                E-mail
                            </h1>
                        </div>
                        <div class="text-card">
                            <span id="text">
                                Click on the button to send a email for me
                                <br/>
                                <br/>
                            </span>
                        </div>
                        <div class="final-button">
                            <a href="mailto:vyniciussalusto@gmail.com" target="_blank">
                                <button id="button-email" class="button">
                                    Send email
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                <div id="right-subsection" class="subsection">
                    <div id="linkedin" class="card">
                        <div class="logo">
                            <img src={logoLinkedin} alt=""/>
                        </div>
                        <div class="title">
                            <h1 class="title-name-card">
                                Linkedin
                            </h1>
                        </div>
                        <div class="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div class="final-button">
                            <a href="https://www.linkedin.com/in/vynicius-martorano-2b2597213" target="_blank">
                                <button id="button-linkedin" class="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                    <div id="github" class="card">
                        <div class="logo">
                            <img src={logoGitHub} alt=""/>
                        </div>
                        <div class="title">
                            <h1 class="title-name-card">
                                GitHub
                            </h1>
                        </div>
                        <div class="text-card">
                            <span id="text">
                                Click on the button to be redirected to my personal account
                            </span>
                        </div>
                        <div class="final-button">
                            <a href="https://github.com/VyniciusMartorano" target="_blank">
                                <button id="button-github" class="button">
                                    View more
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact