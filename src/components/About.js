function About() {
    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About The App</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="column">
                    <div class="row">
                        <div class="col-lg-4 ms-auto"><p class="lead">The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as a proof of concept for <a href="https://socialmedialab.ca/events/hackathon/" target="_blank"></a>the Social Media Lab’s 2023 Canadian #AI Misinformation Hackathon</a>. The app uses OpenAI API capabilities to facilitate simple fact checking. Please be aware that OpenAI has very limited knowledge of the world and events after 2021 and that while OpenAI has put safeguards in place, their system may occasionally generate incorrect or misleading information and produce offensive or biased content.</p>
                        </div>
                        <div class="col-lg-4 me-auto"><p class="lead">This app is provided “as is” without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. Reliance on any information provided by this app is solely at your own risk. We suggest verifying information provided here by consulting additional sources.</p>
                        </div>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://github.com/smlabto/factcheckassistant" rel="noreferrer" target="_blank">
                        <i class="fas fa-download me-2"></i>Get Source Code!</a>
                </div>
            </div>
        </section>
        <section class="page-section bg-warning text-dark mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-dark">About The Hackathon</h2>
                <div class="divider-custom divider-dark"><div class="divider-custom-line"></div><div class="divider-custom-icon"><svg class="svg-inline--fa fa-star" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"></path></svg></div><div class="divider-custom-line"></div></div>
                <center><a href="https://socialmedialab.ca/events/hackathon/" target="_blank"><img src="https://i0.wp.com/socialmedialab.ca/wp-content/uploads/2023/01/AI-Misinfo-Hack-1-1920x1080.jpg?resize=768%2C432&amp;ssl=1"></a></center>
            </div>
        </section>        
    )
}

export default About;