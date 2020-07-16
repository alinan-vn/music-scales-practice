import React from 'react';

class GuitarScales extends React.Component{

    setReadings = () => {
        console.log(this.props.settings)
        const reqs = this.props.settings
        if (reqs.sheetMusic === 'On' && reqs.tab ==='On'){
            return(
                <div>
                    <h2 className='g-scales__heading'>Sheet Music</h2>
                    { this.getSheet() }

                    <h2 className='g-scales__heading'>Tab</h2>
                    { this.getTab() }
                </div>
            )
        } else if (reqs.sheetMusic === 'Off' && reqs.tab ==='Off'){
            return(
                <div>
                    <h1 className='g-scales__heading'>Workin' Blind, you must be good</h1>
                </div>
            )
        } else if (reqs.sheetMusic === 'On'){
            return(
                <div>
                    <h2 className='g-scales__heading'>Sheet Music</h2>
                    { this.getSheet() }
                </div>
            )
        } else if (reqs.tab === 'On'){
            return(
                <div>
                    <h2 className='g-scales__heading'>Tab</h2>
                    { this.getTab() }
                </div>
            )
        }
    }

    getTab = () => {
        return(
            <div>
                <img className='g-scales__tab' src={require(`./images/tab/${this.props.settings.scale}majTab.PNG`)} />
            </div>
        )
    }

    getSheet = () => {
        return(
            <div>
                <img className='g-scales__sheet' src={require(`./images/sheet/${this.props.settings.scale}majSheet.PNG`)} />
            </div>
        )
    }

    render(){
        return(
            <section className='g-scales'>
                <h1>{ this.props.settings.scale} Major</h1>
                { this.setReadings() }
            </section>
        )
    }
}

export default GuitarScales