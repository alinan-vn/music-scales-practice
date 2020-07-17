import React from 'react';

class PianoScales extends React.Component{

    setReadings = () => {
        console.log(this.props.settings)
        const reqs = this.props.settings
        if (reqs.sheetMusic === 'On' && reqs.tab ==='On'){
            return(
                <div>
                    <h2 className='p-scales__heading'>Sheet Music</h2>
                    { this.getSheet() }

                    <h2 className='p-scales__heading'>Tab</h2>
                    { this.getTab() }
                </div>
            )
        } else if (reqs.sheetMusic === 'Off' && reqs.tab ==='Off'){
            return(
                <div>
                    <h1 className='p-scales__heading'>Workin' Blind, you must be good</h1>
                </div>
            )
        } else if (reqs.sheetMusic === 'On'){
            return(
                <div>
                    <h2 className='p-scales__heading'>Sheet Music</h2>
                    { this.getSheet() }
                </div>
            )
        } else if (reqs.tab === 'On'){
            return(
                <div>
                    <h2 className='p-scales__heading'>Tab</h2>
                    { this.getTab() }
                </div>
            )
        }
    }

    getTab = () => {
        return(<p>NO TAB SETUP YET</p>)
        // const scale = this.props.settings.scale
        // if(scale === 'F#'){
        //     return(
        //         <div>
        //             <img className='p-scales__tab' src={require(`./images/tab/GbmajTab.PNG`)} />
        //         </div>
        //     )
        // } else {
        //     return(
        //         <div>
        //             <img className='p-scales__tab' src={require(`./images/tab/${scale}majTab.PNG`)} />
        //         </div>
        //     )
        // }
    }

    getSheet = () => {
        const scale = this.props.settings.scale
        if(scale === 'F#'){
            return(
                <div>
                    <img className='p-scales__tab' src={require(`./images/sheet/GbmajSheet.PNG`)} />
                </div>
            )
        } else {
            return(
                <div>
                    <img className='p-scales__tab' src={require(`./images/sheet/${scale}majSheet.PNG`)} />
                </div>
            )
        }
    }

    render(){
        return(
            <section className='p-scales'>
                <h1>{ this.props.settings.scale} Major</h1>
                { this.setReadings() }
            </section>
        )
    }
}

export default PianoScales