function About() {
    return (
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                {/* <!-- About Section Heading--> */}
                <h2 class="page-section-heading text-center text-uppercase text-white">About The App</h2>
                {/* <!-- Icon Divider--> */}
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                {/* <!-- About Section Content--> */}
                <div class="row">
                    <div class="col-lg-4 ms-auto"><p class="lead">The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as demo for the Social Media Lab’s 2023 Canadian #AI Misinformation Hackathon. The app uses OpenAI API capabilities for simple fact checking. Please be aware that OpenAI has very limited knowledge of the world and events after 2021. As a result, the API may occasionally generate incorrect information.</p>
                    </div>
                    <div class="col-lg-4 me-auto"><p class="lead">The app is provided “as is” without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. Reliance on any information provided by this demo app is solely at your own risk. We suggest verifying information provided here by consulting additional sources.</p>
                    </div>
                </div>
                {/* <!-- About Section Button--> */}
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://github.com/smlabto/factcheckassistant" rel="noreferrer" target="_blank">
                        <i class="fas fa-download me-2"></i>Get Source Code!</a>
                </div>
            </div>
        </section>
    )
}

export default About;