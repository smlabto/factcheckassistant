import "./Chat.css";
import React, { useState, useRef, useEffect } from 'react'
import Message from "./Message";
import { animateScroll } from "react-scroll";

function Chat() {
    const [messages, setMessages] = useState([
        {user: 'user', message : "Obama wasn't born in the US."},
        {user: 'bot', message : "Barack Obama, the 44th President of the United States, was born in Hawaii and his birth certificate confirms this fact. This claim that he was not born in the US is a conspiracy theory known as \"birtherism\" and has been debunked."},
        // {user: 'user', message : ""} // Place any initial default messages here (to show as examples)
    ]);
    const [textInput, setTextInput] = useState('');
    const scrollRef = useRef();

    function scrollChat() {
        animateScroll.scrollToBottom({
          containerId: "custom-scrollbar"
        });
    }

    async function handleCheckSentence() {
        const ts = textInput;
        
        var fullResponse = "...";
        setMessages([...messages, {user: 'user', message : ts}, {user: 'bot', message : fullResponse}]);

        var url = "https://api.openai.com/v1/engines/text-davinci-003/completions";

        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", `Bearer ${process.env.REACT_APP_AI_API_KEY}`);
        
        var open_ai_resp;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                open_ai_resp = xhr.responseText;
                fullResponse = JSON.parse(open_ai_resp).choices[0].text.replace(/^\s+|\s+$/g, '');
                setMessages([...messages, {user: 'user', message : ts}, {user: 'bot', message : fullResponse}]);
            }};

        var data = `{
            "prompt": "Check the accuracy of this claim (in less than 500 characters): ${ts}",
            "temperature": 0.7,
            "max_tokens": 512,
            "top_p": 1,
            "frequency_penalty": 0.75,
            "presence_penalty": 0
        }`;

        xhr.send(data);
        setTextInput('');
    }

    useEffect(() => scrollChat(), [messages]);

    return (
        <section class="page-section portfolio" id="portfolio">
            <div class="container d-flex justify-content-center">
                <div class="card" id="chat1" style={{ borderRadius: "15px", width: "700px" }}>
                    <div
                        class="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0"
                        style={{ borderTopLeftRadius: "15px", borderTopRightRadius: "15px", width: "100%" }}>
                        <p class="mb-0 fw-bold">Ask Fact Check Assistant to verify a claim.</p>
                    </div>

                    <div class="card-body">
                        <div id="custom-scrollbar" ref={scrollRef} style={{ minHeight : "300px", maxHeight : "300px", overflow: "auto", paddingRight: "18px"}}>
                            {messages.map(
                                ({ user, message }) => (
                                    <Message user={user} message={message} />
                                )  
                            )}
                        </div>
                        <div>
                            <hr />
                            <div class="form-outline">
                                <label class="form-label" for="textAreaExample">Enter a claim …</label>
                                <textarea class="form-control" id="textAreaExample" rows="4" maxlength="400" value={textInput} onChange={e => setTextInput(e.target.value)}></textarea>
                            </div>
                            <button type="button" class="btn btn-info btn-rounded float-end" style={{ marginTop: "10px" }} onClick={handleCheckSentence}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat;