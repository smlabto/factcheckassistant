function MainHeader() {
    return (
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="masthead-avatar mb-5" src="../assets/img/avataaars.svg" alt="..." />
                <h1 class="setion-heading mb-0">Hi!&nbsp;I'm an OpenAI-powered bot for simple fact checking. &nbsp;&nbsp;</h1>
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="masthead-subheading font-weight-light mb-0">Get the facts and context behind what you have heard or seen online.</p>
            </div>
        </header>
    );
}

export default MainHeader;