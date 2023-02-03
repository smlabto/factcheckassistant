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
                        <p>The Social Media Lab's Fact Check Assistant is created as a demonstration for the <a class="link-warning" href="https://socialmedialab.ca/events/hackathon/" rel="noreferrer" target="_blank">the Social Media Lab's 2023 Canadian #AI Misinformation Hackathon</a>. Its purpose is to show and assess the potential of AI in doing simple fact-checking. It was built using OpenAI API and Bootstrap.
                        </p>
                    </div>
                    <div class="row">
                        <center>
                            <a href="https://socialmedialab.ca/events/hackathon/" rel="noreferrer" target="_blank">
                                <img class="img-fluid rounded" width="70%" alt="Social Media Lab AI Misinfo Hackathon Promo" src="https://i0.wp.com/socialmedialab.ca/wp-content/uploads/2023/01/AI-Misinfo-Hack-1-696x392.jpg"></img> 
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </section>        
    )
}

export default About;