import React from 'react';

class Landing extends React.Component{

    goToInstrument = (e) => {
        this.props.history.push(`/${e.target.name}`)
    }

    render(){
        return(
            <section className='landing'>
                <h1>Practice Your Scales!</h1>
                <div className='landing__btns'>
                    <button name='guitar' onClick={(e) => this.goToInstrument(e)} className='landing__btn'>Guitar</button>
                    <button name='piano' onClick={(e) => this.goToInstrument(e)} className='landing__btn'>Piano</button>
                </div>
            </section>
        )
    }
}

export default Landing