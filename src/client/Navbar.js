import React from 'react'


const Navbar = (props) => {
    
    return (<div className="navbar footer">
        <a href="#"><div onClick={() => props.switchRender('Home')}>Home</div></a>
        <div className="subnav">
            <a href="#"><div onClick={() => props.switchRender('Roster')}>Roster</div></a>
            <a href="https://wowprogress.com/guild/us/thrall/Twice+Removed"><div>Progression</div></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoHkwIjQhFOuARJt6GKXO94hFDV5tsSboF-dyTY6qoSdmoEQ/viewform"><div>Application</div></a>
        </div>
        <div>Social Media</div>
    </div>)
}


export default Navbar