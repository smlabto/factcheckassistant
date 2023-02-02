function NoticeCovid({ show }) {
    if (show) {
        return (
            <a rel="noreferrer" style={{textDecoration: "none"}} target="_blank" href="https://www.canada.ca/en/public-health/services/diseases/coronavirus-disease-covid-19.html?utm_campaign=not-applicable&utm_medium=vanity-url&utm_source=canada-ca_coronavirus">
                <div class="alert alert-primary d-flex align-items-center" role="alert" >
                    <div width="24" height="24" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:"></div>
                    <div>Get the latest information from Health Canada on Covid-19</div>
                </div>
            </a>
        )
    }
}

export default NoticeCovid;