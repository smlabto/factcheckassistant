function About() {
    return (
        <section class="page-section bg-warning text-dark mb-0" id="hackathon">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-dark">About The Hackathon</h2>
                <div class="divider-custom divider-dark">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="column">
                    <div class="row">
                        <center>
                            <a href="https://socialmedialab.ca/events/hackathon/" target="_blank">
                                <img src="https://i0.wp.com/socialmedialab.ca/wp-content/uploads/2023/01/AI-Misinfo-Hack-1-1920x1080.jpg?resize=768%2C432&amp;ssl=1"></img> 
                            </a>
                        </center>
                    </div>
                </div>
                <div class="text-center mt-4">
                    <a class="btn btn-xl btn-outline-light" href="https://github.com/smlabto/factcheckassistant" rel="noreferrer" target="_blank">
                        <i class="fas fa-download me-2"></i>Get Source Code!</a>
                </div>
            </div>
        </section>        
    )
}

export default About;