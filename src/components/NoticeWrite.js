function NoticeWrite({ show }) {
    if (show) {
        return (
                <div class="alert alert-primary d-flex align-items-center" role="alert" >
                    <div width="24" height="24" class="bi bi-info-circle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Info:"></div>
                    <div>Please revise your input as a claim that needs to be fact-checked.</div>
                </div>
        )
    }
}

export default NoticeWrite;