import React from 'react';

class Landing extends React.Component{

    render(){
        return(
            <section className='landing'>
                <h1>Practice Your Scales!</h1>
                <div className='landing__btns'>
                    <button className='landing__btn'>Guitar</button>
                    <button className='landing__btn'>Piano</button>
                </div>
            </section>
        )
    }
}

export default Landing