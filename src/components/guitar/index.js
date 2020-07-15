import React from 'react';

class Guitar extends React.Component{
    constructor(){
        super()
        this.state = {
            sheetMusic: 'On',
            tab: 'On'
        }
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

        return scaleKeys.map((note, ind) => {
            return(
                <button id={ind} onClick={(e) => this.scaleClick(e)} name={note} className='guitar__scaleBtn'>{note}</button>
            )
        })
    }

    readingType = (e) => {
        let onOff = e.target.innerText.split(' ')
        onOff = onOff[onOff.length - 1]

        const readType = e.target.name
        if (onOff === 'On'){
            this.setState({
                ...this.state,
                [readType]: 'Off'
            })
        } else {
            this.setState({
                ...this.state,
                [readType]: 'On'
            })
        }

    }

    render(){
        return(
            <section className='guitar'>
                <h1>Guitar Scales!</h1>
                <div className='guitar__btns'>
                    <button onClick={(e) => this.readingType(e)} name='sheetMusic' className='guitar__btn'>Sheet Music: {this.state.sheetMusic}</button>
                    <button onClick={(e) => this.readingType(e)} name='tab' className='guitar__btn'>Tab: {this.state.tab}</button>
                </div>
                <div className='guitar__btns'>
                    { this.scalesBtns() }
                </div>
            </section>
        )
    }
}

export default Guitar