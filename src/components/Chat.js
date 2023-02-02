import "./Chat.css";
import React, { useState, useRef, useEffect } from 'react'
import Message from "./Message";
import ErrorPopup from "./ErrorPopup";
import NoticeCovid from "./NoticeCovid";
import NoticeFuture from "./NoticeFuture";
import { animateScroll } from "react-scroll";

function Chat() {
    const [messages, setMessages] = useState([
        {user: 'user', message : "SAMPLE CLAIM: Obama wasn't born in the US."},
        {user: 'bot', message : "False. Barack Obama was born in Honolulu, Hawaii, on August 4th, 1961."},
    ]);
    const [textInput, setTextInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [futureMessage, setFutureMessage] = useState('');
    const [showCovid, setShowCovid] = useState(false);
    const [isChecking, setIsChecking] = useState(false);
    const scrollRef = useRef();

    function scrollChat() {
        animateScroll.scrollToBottom({
            containerId: "custom-scrollbar"
        });
    }

    async function handleCheckSentence() {
        var ts = textInput.replace(/\n/g, " ");
        setErrorMessage('');
        setIsChecking(true);

        if (ts.trim().length === 0) {
            setErrorMessage('Please make sure to input a complete prompt with at least 3 words.');
            setIsChecking(false);
            return;
        } else {
            var s = ts.replace(/(^\s*)|(\s*$)/gi,"");
            s = s.replace(/[ ]{2,}/gi," ");
            s = s.replace(/\n /,"\n");
            if (s.split(' ').length < 3) {
                setErrorMessage('Please make sure to input a complete prompt with at least 3 words.');
                setIsChecking(false);
                return;
            }
        }

        // This state handles showing the covid info box if any of the filter words appear in the text
        const covidFilters = ['covid', 'coronavirus', 'covid vaccine', 'covid-19 vaccine'];
        var covidResult = false;
        for (let i = 0; i < covidFilters.length; i++) {
            if (!covidResult) {
                covidResult = ts.toLowerCase().indexOf(covidFilters[i]) > -1;
            }
        }
        setShowCovid(covidResult);

        // This state checks if future events are mentioned and gives a notice to user that OpenAI has little knowledge of events past 2021
        const futureFilters = ['2022', '2023', '2024', '2025', 'Future', 'Now', 'Today', 'Tomorrow', 'Next Day', 'Next Week', 'Next Month', 'Next Year'];
        var futureResult = false;
        for (let i = 0; i < futureFilters.length; i++) {
            if (!futureResult) {
                futureResult = ts.toLowerCase().indexOf(futureFilters[i]) > -1;
            }
        }
        setFutureMessage(futureResult);


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
                if (xhr.status === 200) {
                    open_ai_resp = xhr.responseText;
                    fullResponse = JSON.parse(open_ai_resp).choices[0].text.replace(/^\s+|\s+$/g, '');
                    setMessages([...messages, {user: 'user', message : ts}, {user: 'notice', message : ' '}, {user: 'bot', message : fullResponse}]);
                } else {
                    setErrorMessage(`There seems to be an error with OpenAI API (${xhr.status} Error), try refreshing the page or type another prompt`);
                    setMessages([...messages, {user: 'user', message : ts}, {user: 'notice', message : ' '}, {user: 'bot', message : "I had some trouble processing this claim...Please try again."}]);
                }
                setIsChecking(false);
            }
        };

        var data = `{
            "prompt": "Respond as though you, the AI model, are a fact checking assistant. Check the accuracy of the following claim (in less than 500 characters): ${ts}",
            "temperature": 0,
            "max_tokens": 512,
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
                        <hr />
                        <ErrorPopup message={errorMessage} />
                        <NoticeFuture show={futureMessage} />
                        <NoticeCovid show={showCovid} />
                        <div>
                            <div class="form-outline">
                                <label class="form-label" for="textAreaExample">Enter a claim …</label>
                                <textarea required class="form-control" id="textAreaExample" rows="4" maxlength="400" value={textInput} onChange={e => setTextInput(e.target.value)}></textarea>
                            </div>
                            <button type="button" disabled={isChecking ? true : false} class="btn btn-info btn-rounded float-end" style={{ marginTop: "10px" }} onClick={handleCheckSentence}>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Chat;