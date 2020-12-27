import React from 'react'
import Topology from "vanta/src/vanta.net"
import Navbar from './Navbar'
import Body from './components/Body'
import Footer from './Footer'
import axios from 'axios'
import * as THREE from 'three'

class App extends React.Component{
  constructor(){
    super()
    this.vantaRef = React.createRef()
    this.sheet = {}
  }

  componentDidMount(){
    this.vantaEffect = Topology({
      el:this.vantaRef.current,
      color: 0xc82cd2,
      backgroundColor: 0x0,
      points: 20,
      maxDistance: 25,
      spacing: 15,
      THREE: THREE
    })
    this.sheet = this.loadSheet()
  }

  componentWillUnmount(){
    if (this.vantaEffect) this.vantaEffect.destroy()
  }


  loadSheet = async() => {
    const {data} = await axios(process.env.REACT_APP_SHEET_URL)
    console.log(data)
    return data
  }

  render(){
    console.log(this.sheet)
    return (
      <>
      <Navbar />
      <div className="App" ref={this.vantaRef}> 
      <Body />
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