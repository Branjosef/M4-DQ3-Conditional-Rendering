import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      show: ''
    }
  }

  showView = (e) => {
    // let Name = e.target.id.split('')
    // Name[0] = Name[0].toUpperCase()
    // Name = Name.join('')
    // Name === 'Cocktail' ? Name = 'Cocktails' : Name
    // Name === 'Photo' ? Name = 'Photos' : Name
    // this.setState({
    //   show: <Name/>
    // })
    let name; 

    if(e.target.id === 'profile'){
      name = <Profile/>
    }
    if (e.target.id === 'cocktail'){
      name = <Cocktails/>
    }
    if (e.target.id === 'photo'){
      name = <Photos/>
    }
    if (e.target.id === 'pokemon'){
      name = <Pokemon/>
    }

    this.setState({
      show: name
    })
  
  }

  render() {

    return (
      <div>
        <MenuBar showView={this.showView}/>
        {this.state.show}
      </div>
    )
  }

}

export default MainBox
