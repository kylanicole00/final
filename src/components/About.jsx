import React from 'react';

function About() {
  return (
    <section className="#About">
        <div className="about-content">
            <div className="about-left">
                <img src="about.jfif" alt="Kyla" width={'290px'}/>
            </div>
            <div className="about-right">
                    <h2>About Me | Kyla Nicole Gilbalega</h2>
                    
                    <div className="boxes">
                        <div className="I">
                                <h3>Passionate Developer</h3>
                            <p>
                                I am a dedicated front-end <br />
                                developer with a strong passion<br />
                                for crafting beautiful and<br /> 
                                functional user interfaces.
                            </p>
                        </div>   

                        <div className="II">
                                <h3>Problem Solver</h3>
                            <p>
                                I enjoy tackling complex <br />
                                challenges and finding creative <br />
                                solutions to enhance the user <br /> 
                                experience.
                            </p>
                        </div>

                        <div className="III">
                                <h3>Team Player</h3>
                            <p>
                                I believe in the power of <br />
                                collaboration and strive to <br />
                                contribute positively to every team<br /> 
                                I join.
                            </p>
                        </div>
                    </div>

            </div>
        </div>
    </section>
  );
}

export default About;