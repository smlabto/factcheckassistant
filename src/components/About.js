function About() {
    return (
        <section class="page-section bg-success text-white mb-0" id="about">
            <div class="container">
                <h2 class="page-section-heading text-center text-uppercase text-white">About The App</h2>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <div class="column text-center">
                    <div class="row justify-content-center">
                        <div class="col-lg-5"><p class="lead">The Social Media Lab's Fact Check Assistant is an AI-powered bot for simple fact checking. It was created as a proof of concept for the "<a class="link-warning" href="https://socialmedialab.ca/events/hackathon/" rel="noreferrer" target="_blank">Social Media Lab's 2023 Canadian #AI Misinformation Hackathon.</a>" It's a prototype designed to demonstrate and test the feasibility of using AI technologies for mitigating the impact of misinformation online. The app is provided "as is" without any warranty of accuracy, reliability, completeness, efficiency, timeliness, or correct sequencing of such information or otherwise, either express or implied. <b>Reliance on any information provided by this app is solely at your own risk.</b>
                        <br /><br /><br /><br />The app uses OpenAI's "gpt4.0" model to facilitate simple fact checking. Please be aware that OpenAI language models were trained on mostly English language sources. As a result, its answers reflect the cultural values, knowledge and biases of people from the English-speaking world, specifically U.S. values and laws. Also, the OpenAI language model that powers this app has very limited knowledge of the world and events after 2021. While OpenAI has put safeguards in place, their system may occasionally generate incorrect or misleading information and produce offensive or biased content. We suggest consulting additional sources to verify information provided by the app.</p>
                        </div>
                        <div class="col-md-1"></div>
                        <div class="col-lg-5"><p class="lead">"Fact Check Assistant" du "Social Media Lab" est un bot alimenté par l'IA pour la vérification simple des faits. Il a été créé en tant que démonstration de faisabilité pour le "<a class="link-warning" href="https://socialmedialab.ca/events/hackathon/" rel="noreferrer" target="_blank">Social Media Lab's 2023 Canadian #AI Misinformation Hackathon.</a>" Il s'agit d'un prototype conçu pour démontrer et tester la faisabilité de l'utilisation des technologies de l'IA pour atténuer l'impact de la désinformation en ligne. L'application est fournie "telle quelle", sans aucune garantie quant à l'exactitude, la fiabilité, l'exhaustivité, l'efficacité, la rapidité ou la séquence correcte de ces informations, que ce soit de manière expresse ou implicite. <b>La confiance accordée à toute information fournie par cette application se fait uniquement à vos propres risques.</b>
                        <br /><br />L'application utilise le modèle "gpt4.0" d'OpenAI pour faciliter la vérification simple des faits. Veuillez noter que les modèles linguistiques d'OpenAI ont été formés principalement sur des sources en anglais. Par conséquent, ses réponses reflètent les valeurs culturelles, les connaissances et les préjugés des personnes provenant du monde anglophone, en particulier les valeurs et les lois américaines. De plus, le modèle linguistique d'OpenAI qui alimente cette application possède une connaissance très limitée du monde et des événements après 2021. Bien qu'OpenAI ait mis en place des mesures de sécurité, leur système peut occasionnellement générer des informations incorrectes ou trompeuses et produire du contenu offensant ou biaisé. Nous vous suggérons de consulter des sources supplémentaires pour vérifier les informations fournies par l'application.</p>
                        </div>
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
