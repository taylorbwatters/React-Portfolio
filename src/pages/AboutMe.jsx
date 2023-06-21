import React from 'react';

export function AboutMe() {
    return (
        <>
            <h2>About Me</h2>
            <p>Allow me to introduce myself. I'm Taylor Watters, originally from Tucson, Arizona, but currently residing in the beautiful state of Washington alongside my wonderful husband, Sean. While my educational background began with a Bachelor's degree in Kinesiology from ASU, my journey took an exciting turn as I ventured into the world of software engineering. 
                Recently, I successfully completed the fullstack developer bootcamp at the University of Washington, marking a significant milestone in my career transition. When I'm not busy studying code, you can find me in the great outdoors, hiking through breathtaking trails, fishing, or engaging in friendly competition with my husband by outwitting him in board games.
                Additionally, my furry companions, my two dogs Sam and Leia, bring endless joy and companionship to my life.</p>
            <section>
                <img src="/images/leia.png" alt="dog"></img>
                <img src="/images/sean-tay.png" alt="couple"></img>
                <img src="/images/sam.png" alt="dog2"></img>
            </section>

        <style jsx>{`
            h2 {
                display: flex;
                justify-content: center;
                align-item: center;
            }

            p {
                text-indent: 30px;
                line-height: 1.8;
                font-weight: bold;
            }

            img {
                border-radius: 20px;
                width: 20vw;
            }

            section {
                display: flex;
                justify-content: space-around;
                padding: 40px;
            }

               
            `}</style>
        </>
    );
}