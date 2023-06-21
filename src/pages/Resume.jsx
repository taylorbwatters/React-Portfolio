import React from 'react';

const resumeText = `
Front-End Proficiencies
- HTML
- CSS
- JavaScript
- React
- Bootstrap
- JQuery

Back-End Proficiencies
- Node
- Express
- APIs
- MySQL/Sequelize
- MongoDB/Mongoose
`;

function downloadString(text, fileType, fileName) {
  const blob = new Blob([text], { type: fileType });

  const a = document.createElement('a');
  a.download = fileName;
  a.href = URL.createObjectURL(blob);
  a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
  a.style.display = "none";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => { URL.revokeObjectURL(a.href); }, 1500);
}

export function Resume() {

    return (
        <>
            <h2>Resume</h2>
            <section>
                {resumeText.split('\n').map(str => <p>{str}</p>)}
            </section>
            <a target="_blank" href="./files/Resume-Taylor-Watters-2023.pdf">Download</a>

            <style jsx>{`
              h2 {
                  display: flex;
                  justify-content: center;
                  align-item: center;
              }

              section {
                  display: flex;
                  justify-content: center;
                  align-item: center;
                  flex-direction: column;
                  font-weight: bold;
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