import './App.css';
import {Component} from 'react'

import tasks from './sample/tasks.json'
import Tasks from './component/Tasks'

//console.log(tasks)
class App extends Component{
  
  render(){
    return  <div> <Tasks tasks={tasks}/> </div>
  }
}

export default App;






// Old code (see commit)

/*import React from 'react' // for class Helloworld


//-------------------------------------------------------------------
//------------------Component Helloworld-----------------------------
//-------------------------------------------------------------------
 function Helloworld(props){
  //console.log(props)
  return(
    <div id="hello">{props.rank} Hi {props.myname}! Im "COMPONATOR"</div>
  );
} 
//-------------------------------------------------------------------------
//-----------------------Same component------------------------------------
//-------------------------------------------------------------------------
//const Helloworld = () => <div id="hello">Hi! Im "COMPONATOR"</div>-------
//-------------------------------------------------------------------------
//--------------------------or---------------------------------------------
//-------------------------------------------------------------------------
*/
/*
class Helloworld extends React.Component{

  state = {
    show: false
  }
  toggleShow = () =>  {
    this.setState({show: !this.state.show})
  }

  render() {
    if(this.state.show){
      return (
        <div id="hello">
          {this.props.rank} Hi {this.props.myname}! Im "COMPONATOR"
          <button onClick={this.toggleShow*/
            /*------------3ro^^^
            ()=>this.setState({show: false})  2do
            alert('Component state: '+ this.state.show) 1ro*//*}>
            
            Toggle State
          
          </button>
        </div>
      )
    }else{
      return(
        <div id="hello"> 
          There are not element. Please toggle state
          <button onClick={this.toggleShow*/
            /*()=> this.setState({show: true}) 
            alert('Component state: '+ this.state.show) *//*}>
            Toggle State
          </button>
        </div>
      )
    }
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Pascu!
        </p>
        <div>
          This is component: 
          <Helloworld myname="Chizzo" rank="(First)"/> 
          <Helloworld myname="Tete"/> 
          <Helloworld myname="Tanque" rank="3."/>
        </div>
      </header>
    </div>
  );
}*/
