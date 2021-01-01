import React from 'react'
import Navbar from './Navbar'
import Body from './components/Body'
import Footer from './Footer'
import Roster from './components/Roster'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
    renderDisplay: <Body />
    }
    this.switchRender = this.switchRender.bind(this)
  }
  


  switchRender(scene){
    switch(scene){
      case 'Home':
        this.setState({
          renderDisplay: <Body />
        })
        break;
      case 'Roster':
        this.setState({
          renderDisplay: <Roster />
        })
        break;
      default:
        this.setState({
          renderDisplay: <Body />
        })
        break;
    }
  }

  render(){

    return (
      <>
      <Navbar switchRender={this.switchRender} />
      <div className="App"> 
      {this.state.renderDisplay}
      </div>
      <Footer />
      </>
    )
  }
    
}

export default App;


// application link -> Form of some sort
// two teams raids with prog info for each
// raid logs info