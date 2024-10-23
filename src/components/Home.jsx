import React from 'react';

function Home() {
  return (
    <section className="#Home">
        <div className="home-content">
            <div className="left">   
                <h3>Hi! There I'm</h3>
                    <h1>Kyla Nicole Gilbalega</h1>
                <p>
                    Front-End Developer<br /><br />
                    Transform ideas into dynamic, user-friendly interfaces.<br/>
                     With a passion for clean code and intuitive design,<br/>
                    I create seamless digital experiences that are both beautiful and functional.<br/>
                </p>
                <button className="contact-button">
                    <a href="#Contact">Contact Me</a>
                </button>
            </div>
            <div className="right">
            </div>            
        </div>
    </section>
  );
}

export default Home;