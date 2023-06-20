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
                        rows={10} 
                        cols={40} 
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
                }    

                input, textarea {
                    display: block;
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
            `}</style>
        </>
    );
}