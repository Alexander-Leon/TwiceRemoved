import React from 'react'
import axios from 'axios'
import {Table} from 'react-bootstrap'
class Roster extends React.Component {
    constructor(){
        super()
        this.state={
            roster:{}
        }
    }
    async componentDidMount(){
        this.setState({
            roster: await this.loadRoster()
        })
    }

    async loadRoster() {
        const {data} = await axios('https://spreadsheets.google.com/feeds/cells/1WGMyxDM3qiEqe1SpHczYwO8BWVMA1tIaQF2qUQR9NYU/1/public/full?alt=json')
        const parsingData = data.feed.entry
        const obj = {}
        const roster = {}
        for (const cell in parsingData){
          if (obj.hasOwnProperty(parsingData[cell].gs$cell.row)){
            obj[parsingData[cell].gs$cell.row][parsingData[cell].gs$cell.col] = parsingData[cell].gs$cell
          } else {
            obj[parsingData[cell].gs$cell.row] = {}
            obj[parsingData[cell].gs$cell.row][parsingData[cell].gs$cell.col] = parsingData[cell].gs$cell
          }
        }
        for (const cells in obj){
          if (cells !== '1'){
            roster[obj[cells][1].inputValue] = {class: obj[cells][2].inputValue,role: obj[cells][3].inputValue, spec: obj[cells][4].inputValue, trial: obj[cells][5].inputValue}
          }
        }
        return roster
      }
    
    imageChooser(role){
        switch(role){
            case 'Tank':
            return (<img src="tank.png" className='roleimg' alt={role}/>)
            case 'Healer':
            return (<img src="healer.png" className='roleimg' alt={role}/>)
            default:
            return (<img src="damage.png" className='roleimg' alt={role}/>)
        }
    }
    
    render(){
        const names = Object.keys(this.state.roster).map((name,i) =>{
            return (
                <tr key={i}>
                <td>{name}</td>
                <td>{this.imageChooser(this.state.roster[name].role)}</td>
                <td>{this.state.roster[name].class}</td>
                <td>{this.state.roster[name].spec}</td>
                </tr>)
        })
        return (<>
        <div className="container">
            
                <Table responsive>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Role</td>
                            <td>Class</td>
                            <td>Spec</td>
                        </tr>
                    </thead>
                    <tbody>
                        {names}
                    </tbody>
                </Table>
            
        </div>
        </>)
    }
}

export default Roster