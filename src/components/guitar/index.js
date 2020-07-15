import React from 'react';

class Guitar extends React.Component{
    constructor(){
        super()
        this.state = {
            reading: {
                sheetMusic: 'On',
                tab: 'On'
            },
            buttons: {
                defaultScale: 'guitar__scaleBtn',
                selectedScale: 'guitar__scaleBtn-clicked'
            }         
        }
    }

    resetScales = (btns) => {

    }

    scaleClick = (e) => {
        let parent = e.target.parentElement

        for (const btn of parent.children){
            btn.className = ''
            btn.classList.add('guitar__scaleBtn')
        }

        if(e.target.classList[0] === 'guitar__scaleBtn'){
            e.target.className = ''
            e.target.classList.add('guitar__scaleBtn-clicked')
        } else {
            e.target.className = ''
            e.target.classList.add('guitar__scaleBtn')
        }
    }

    scalesBtns = () => {
        const scaleKeys = ['G', 'Ab', 'A', 'Bb', 'C', 'Db', 'D', 'Eb', 'F', 'Gb']
        // const defaultBtnClass = 'guitar__scaleBtn'

        return scaleKeys.map((note, ind) => {
            return(
                <button id={ind} onClick={(e) => this.scaleClick(e)} name={note} className='guitar__scaleBtn'>{note}</button>
            )
        })

    }

    render(){
        return(
            <section className='guitar'>
                <h1>Guitar Scales!</h1>
                <div className='guitar__btns'>
                    <button className='guitar__btn'>Sheet Music: {this.state.reading.sheetMusic}</button>
                    <button className='guitar__btn'>Tab: {this.state.reading.tab}</button>
                </div>
                <div className='guitar__btns'>
                    { this.scalesBtns() }
                </div>
            </section>
        )
    }
}

export default Guitar