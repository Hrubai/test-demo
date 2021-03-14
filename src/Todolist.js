import React, { Component } from  'react';
import store from './store';
import { connect } from 'react-redux';



class Todolist extends Component{

    render(){
        return(
            <div>
                <input value = {this.props.inputValue}/>
                <button>Submit</button> 
                <ul>
                    <li> Abai</li> 
                </ul>  
            </div>)

        
    }
}
const mapStateToProps = (state) =>{
    return {
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps,null)(Todolist);