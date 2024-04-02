import React from 'react';
import AboutImg from '../assets/images/about.jpg';

const About = () => {
    return (
        <>
            <section className='about' id='about'>
                <h1 className='heading'>
                    <span>About</span> us 
                </h1>
                <div className='row'>
                    <div className='image'>
                        <img src={AboutImg} />
                    </div>
                    <div className='content'>
                        <h3>What Makes Our Food Special?</h3>
                        <p>
                            lorem imsum dolor sit amet consectetur adipisicing elit.valuptatibus qui ea ullam, enim tempora ipsum fuga alias quae ratione a officiis id temporibus autem? quod nemo facilis cupiditate. ex, vel?
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;