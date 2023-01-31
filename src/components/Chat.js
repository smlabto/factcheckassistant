import "./Chat.css";
import React, { useState } from 'react'
import Message from "./Message";

const { Configuration, OpenAIApi } = require("openai");

function Chat() {
    const [messages, setMessages] = useState([
        {user: 'user', message : "Obama wasn't born in the US."},
        {user: 'bot', message : "Barack Obama, the 44th President of the United States, was born in Hawaii and his birth certificate confirms this fact. This claim that he was not born in the US is a conspiracy theory known as \"birtherism\" and has been debunked."},
        // {user: 'user', message : ""} // Place any initial default messages here (to show as examples)
    ]);
    const [textInput, setTextInput] = useState('');

    async function handleCheckSentence() {
        const configuration = new Configuration({
            apiKey: process.env.REACT_APP_AI_API_KEY,
        });
        const ts = textInput;
        
        var fullResponse = "...";
        setMessages([...messages, {user: 'user', message : ts}, {user: 'bot', message : fullResponse}]);
        const openai = new OpenAIApi(configuration);
        const resp = await openai.createCompletion({
            model: "text-davinci-003",
            prompt:  `Check the accuracy of this claim (in less than 500 characters): ${textInput}`,
            temperature: 0,
            max_tokens: 100,
        });
        
        fullResponse = resp.data.choices[0].text.replace(/^\s+|\s+$/g, '');
       
        setMessages([...messages, {user: 'user', message : ts}, {user: 'bot', message : fullResponse}]);
        setTextInput('');
    }

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
                        <div id="custom-scrollbar" style={{ minHeight : "300px", maxHeight : "300px", overflow: "auto", paddingRight: "18px"}}>
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