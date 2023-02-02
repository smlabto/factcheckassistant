function NoticeFuture({ show }) {
    if (show) {
        return (
            <div class="alert alert-warning d-flex align-items-center" role="alert" >
                <div width="24" height="24" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:"></div>
                <div>Please be aware that OpenAI has very limited knowledge of the world and events after 2021.</div>
            </div>
        )
    }
}

export default NoticeFuture;