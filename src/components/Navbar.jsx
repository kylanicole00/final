import React from 'react';

function Navbar() {
  return (
    <section className='nav'>
        <div className="center-body">
            <div className="logo">
                <h1>khy</h1>
            </div>
            <div className="menu">
                <ul>
                    <a href="#Home">Home</a>
                    <a href="#About">About</a>
                    <a href="#Projects">Project</a>
                    <a href="#Skills">Skills</a>
                </ul>
            </div>
            <div className="btn">
                <ul>
                    <a href="https://front-end-developer-port-yuh6h8x.gamma.site/">
                        Portfolio
                    </a>                   
                </ul>
            </div>
        </div>
    </section>
  );
}

export default Navbar;