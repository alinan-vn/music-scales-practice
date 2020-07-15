import React from 'react';

class GuitarScales extends React.Component{

    render(){
        return(
            <section className='guitar-scales'>
                <h1>{ this.props.settings.scale} Major</h1>
                GUITAR SCALES { this.props.settings.scale}
            </section>
        )
    }
}

export default GuitarScales