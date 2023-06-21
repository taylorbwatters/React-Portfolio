import React, { useState } from 'react';

export function Contact() {
    const [subject, setSubject] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name: 
                    <input 
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    ></input>
                </label>
                <label>
                    Subject: 
                    <input 
                        name="subject"
                        value={subject} 
                        onChange={(e) => setSubject(e.target.value)} 
                    ></input>
                </label>
                <label>
                    Message: 
                    <textarea 
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                </label>
                <a href={`mailto:taylorbbigelow@gmail.com?subject=${name + ' — ' + subject}&body=${message}`}>Send</a>
            </form>

            <style jsx>{`
                form {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    align-items: center;
                }    

                input, textarea {
                    display: block;
                    width: 50vw;
                }

                textarea {
                    height: 30vh;
                }

                button {
                    width: fit-content;
                }

                a {
                    padding: 5px 10px;
                    background-color: lightgrey;
                    width: fit-content;
                    color: black;
                    text-decoration: none;
                    margin-top: 10px;
                }

                h2 {
                    display: flex;
                    justify-content: center;
                    align-item: center;
                }
            `}</style>
        </>
    );
}