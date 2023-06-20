import React from 'react';

const resumeText = `
EXPERIENCE
- Work 1
  - did stuff
  - additional things
- Work 2
  - did more stuff
  - did other stuff

EDUCATION
- ASU Bachelors
- UW Bootcamp
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
            <button onClick={() => downloadString(resumeText, 'txt', 'resume')}>Download</button>
            <section>
                {resumeText.split('\n').map(str => <p>{str}</p>)}
            </section>
        </>
    );
}