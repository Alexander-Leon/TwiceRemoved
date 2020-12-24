import React from 'react'


const Navbar = (props) => {
    return (<div className="navbar footer">
        <div>Home</div>
        <div className="subnav">
            <a href="https://google.com"><div>Roster</div></a>
            <a href="https://wowprogress.com/guild/us/thrall/Twice+Removed"><div>Progression</div></a>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfoHkwIjQhFOuARJt6GKXO94hFDV5tsSboF-dyTY6qoSdmoEQ/viewform"><div>Application</div></a>
        </div>
        <div>Social Media</div>
    </div>)
}


export default Navbar