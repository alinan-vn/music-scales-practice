import React from 'react';
import GuitarScales from './scales/index';

class Guitar extends React.Component{
    constructor(){
        super()
        this.state = {
            practice: false,
            sheetMusic: 'On',
            tab: 'On',
            scale: false
        }
    }

    resetScaleClasses = (parent) => {
        for (const btn of parent.children){
            btn.className = ''
            btn.classList.add('guitar__scaleBtn')
        }
        this.setState({
            ...this.state,
            scale: false
        })
    }

    scaleClick = (e) => {
        let scaleBtn = e.target

        if(scaleBtn.className === 'guitar__scaleBtn'){
            this.resetScaleClasses(scaleBtn.parentElement)
            scaleBtn.className = ''
            scaleBtn.className = 'guitar__scaleBtn-clicked'
            this.setState({
                ...this.state,
                scale: scaleBtn.name 
            })
        } else {
            this.resetScaleClasses(scaleBtn.parentElement)
        }
    }

    scalesBtns = () => {
        const scaleKeys = ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'F#']

        return scaleKeys.map((note, ind) => {
            return(
                <button key={ind} onClick={(e) => this.scaleClick(e)} name={note} className='guitar__scaleBtn'>{note}</button>
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

    scalesShow = () => {
        if(!this.state.practice){
            return(
                <div>
                    <h1>Guitar (major) Scales!</h1>
                    <div className='guitar__btns'>
                        <button onClick={(e) => this.readingType(e)} name='sheetMusic' className='guitar__btn'>Sheet Music: {this.state.sheetMusic}</button>
                        <button onClick={(e) => this.readingType(e)} name='tab' className='guitar__btn'>Tab: {this.state.tab}</button>
                    </div>
                    <div className='guitar__btns'>
                        { this.scalesBtns() }
                    </div>
                    <div> 
                        <button onClick={this.practice} className='guitar__practice-btn'>Practice!</button>
                    </div>
                </div>
            )
        } else {
            const props = {
                sheetMusic: this.state.sheetMusic,
                tab: this.state.tab,
                scale: this.state.scale
            }
            return (
                <div>
                    <button onClick={this.setPractice} className='guitar__reset-scale'>Another scale?</button>
                    <GuitarScales settings={props} />

                </div>
            )
        }
    }

    setPractice = () => {
        this.setState(prevState =>({
                ...prevState,
                practice: !prevState.practice
            })
        )
    }

    practice = () => {
        if(this.state.scale){
            this.setPractice()
        } else {
            alert('Please select a Scale </3')
        }
    }

    render(){
        return(
            <section className='guitar'>
                { this.scalesShow() }
            </section>
        )
    }
}

export default Guitar