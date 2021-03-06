import React from 'react';

class RelativeScales extends React.Component {

    render(){
        return(
            <section className='relative-scales'>
                <div className='relative-scales__header'>
                    <h1 className='relative-scales__main'>Relative Scales!</h1>
                    <h3 className='relative-scales__sub'>
                        Major Scales have relative Minor Scales that contain the same notes as each other. These are also called <em>relative keys</em>
                    </h3>
                </div>
                
                <ul className='relative-scales__list'>
                    <li>Cb - Abm</li>
                    <li>Gb - Ebm</li>
                    <li>Db - Bbm</li>
                    <li>Ab - Fm</li>
                    <li>Eb - Cm</li>
                    <li>Bb - Gm</li>
                    <li>F - Dm</li>
                    <li>C - Am</li>
                    <li>G - Em</li>
                    <li>D - Bm</li>
                    <li>A - F#m</li>
                    <li>E - C#m</li>
                    <li>B - G#m</li>
                    <li>F# - D#m</li>
                    <li>C# - A#m</li>
                </ul>
            </section>
        )
    }
}

export default RelativeScales