function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
				<a class="navbar-brand" rel="noreferrer" target="_blank" href="https://socialmedialab.ca" alt="Social Media Lab"><img src="https://socialmedialab.ca/wp-content/uploads/2022/05/TMU_TRSM_SocialMediaLab_transparent_WHITE-1.png.webp" alt="TMU, TRSM and Social Media Lab logo" width="200px" /></a>
				<a class="navbar-brand" href="#page-top">Fact Check Assistant</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="https://github.com/smlabto/factcheckassistant" rel="noreferrer" target="_blank">Get Source Code</a></li>						
                    </ul>
                </div>
            </div>
        </nav>
        
    );
}
  
export default Navbar;
