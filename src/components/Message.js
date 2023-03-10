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
                </div>
                <img src="../assets/img/avataaars.svg" width="32" height="32" alt=""/>            
            </div>
        );
    } else if (user === 'notice') {
        return (
            <div class="alert alert-light text-secondary small p-0 mb-3" role="alert" style={{ fontSize: "11px"}}>
                <p class="small mb-0">This app is a proof of concept and may occasionally produce misleading or incorrect information. It tends to be better at checking claims about topics linked to countries where English is the primary language. See <a href="#about" class="link-secondary">full disclosure</a> below.</p>
            </div>
        );
    } else if (user === 'factcheck') {
        return (
            <div class="d-flex flex-row justify-content-end align-items-flex-end mb-4">             
                <div class="p-3 me-3 border" style={{ borderRadius: "15px", backgroundColor: "#fbfbfb" }}>
                    <p class="small mb-3">PS...You can also check to see if this or related claims have already been independently verified by trusted professional fact checkers via <a a target="_blank" href={"https://toolbox.google.com/factcheck/explorer/search/" + message} class="link-secondary">Google's Fact Check Tools</a>.</p>                   
                </div>
                <img src="../assets/img/avataaars.svg" width="32" height="32" alt=""/>            
            </div>
        );        
    }
}

export default Message;
