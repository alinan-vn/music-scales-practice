import React from 'react';

class Piano extends React.Component {
    constructor(){
        super()
        this.state = {
            practice: false,
            sheetMusic: 'On',
            keysShown: 'On',
            scale: false
        }
    }
    
    scalesShow = () => {
        if(!this.state.practice){
            return(
                <div>
                    <h1>Piano (major) Scales!</h1>
                    <div className='piano__btns'>
                        <button onClick={(e) => this.readingType(e)} name='sheetMusic' className='piano__btn'>Sheet Music: {this.state.sheetMusic}</button>
                        <button onClick={(e) => this.readingType(e)} name='keysShown' className='piano__btn'>Keys Tab: {this.state.keysShown}</button>
                    </div>
                    <div className='piano__btns'>
                        { this.scalesBtns() }
                    </div>
                    <div> 
                        <button onClick={this.practice} className='piano__practice-btn'>Practice!</button>
                    </div>
                </div>
            )
        } else {
            const props = {
                sheetMusic: this.state.sheetMusic,
                keysShown: this.state.tab,
                scale: this.state.scale
            }
            return (
                <div>
                    <button onClick={this.setPractice} className='piano__reset-scale'>Another scale?</button>
                    {/* <GuitarScales settings={props} /> */}

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

    scalesBtns = () => {
        const scaleKeys = ['G', 'Ab', 'A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb']

        return scaleKeys.map((note, ind) => {
            return(
                <button key={ind} onClick={(e) => this.scaleClick(e)} name={note} className='piano__scaleBtn'>{note}</button>
            )
        })
    }

    scaleClick = (e) => {
        let scaleBtn = e.target

        if(scaleBtn.className === 'piano__scaleBtn'){
            this.resetScaleClasses(scaleBtn.parentElement)
            scaleBtn.className = ''
            scaleBtn.className = 'piano__scaleBtn-clicked'
            this.setState({
                ...this.state,
                scale: scaleBtn.name 
            })
        } else {
            this.resetScaleClasses(scaleBtn.parentElement)
        }
    }

    resetScaleClasses = (parent) => {
        for (const btn of parent.children){
            btn.className = ''
            btn.classList.add('piano__scaleBtn')
        }
        this.setState({
            ...this.state,
            scale: false
        })
    }

    render(){
        return(
            <section className='piano'>
                { this.scalesShow() }
            </section>
        )
    }
}

export default Piano