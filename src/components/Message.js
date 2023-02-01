import "./Message.css";

function Message({ user, message }) {
    var guessing = (message === '...');

    if (user === 'user') {
        return (
            <div class="d-flex flex-row justify-content-start align-items-end mb-4">
                <h1><div class="mr-3 bi bi-person-fill"></div></h1>				
                <div class="p-3 ms-3" style={{ borderRadius: "15px", backgroundColor: "rgba(57, 192, 237,.2)" }}>
                    <p class="small mb-0">{message}</p>
                </div>
            </div>  
        );
    } else if (user === 'bot') {
        return (
            <div class="d-flex flex-row justify-content-end align-items-flex-end mb-4">             
                <div class="p-3 me-3 border" style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}>
                    <p class="small mb-3">{guessing ? <div class="dot-falling"></div> : message}</p>
                    <figcaption class="blockquote-footer">
                        <cite title="disclosure">This app is a proof of concept and may occasionally produce misleading or incorrect information. See full disclosure below.</cite>
                    </figcaption>                    
                </div>
                <img src="../assets/img/avataaars.svg" width="32" height="32" alt=""/>            
            </div>
        );
    }
}

export default Message;