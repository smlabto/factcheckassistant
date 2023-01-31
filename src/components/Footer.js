function Footer() {
    return (
        <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Location</h4>
                        <p class="lead mb-0">
                            Social Media Lab<br />
                            Toronto Metropolitan University<br />
							Canada
                        </p>
                    </div>
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Around the Web</h4>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://socialmedialab.ca/" rel="noreferrer" target="_blank"><i class="fab fa-fw fa-dribbble"></i></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/SMLabTO" rel="noreferrer" target="_blank"><i class="fab fa-fw fa-twitter"></i></a>
                    </div>
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Humans behind the app</h4>
                        <p class="lead mb-0">
							<i class="bi bi-people-fill"></i><br />
							Tiago Ribeiro<br />
							Anatoliy Gruzd<br />
							Philip Mai<br />
							Felipe Soares
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;