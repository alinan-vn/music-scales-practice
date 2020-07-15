import React from 'react';

class Nav extends React.Component{
    render(){
        return(
            <header>
                <ul className='nav-ul'>
                    <li className='nav-li'>
                        <a className='nav-a' href='/'>Home</a>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Nav