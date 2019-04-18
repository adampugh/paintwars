import React from 'react';

// use css rain module
// add cinematic text animation

const Home = () => {
    return (
        <div className="home__hero">
            <div className="home__hero__thunder">
                <canvas id="canvas1"></canvas>
                <canvas id="canvas2"></canvas>
                <canvas id="canvas3"></canvas>
                <h1 className="hero__title">Paint Wars!</h1>
            </div>
        </div>
    )
}

export default Home;