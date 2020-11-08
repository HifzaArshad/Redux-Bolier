import React from 'react';
import './style.css'
import { connect } from 'react-redux'
import {set_data, facebook} from '../../store/action';

class Home extends React.Component{
    static getDerivedStateFromProps(props){
        console.log('props=>',props)
        

      return{
        
      }
    }
   
    render(){
      
     let use={name:'faraz',email:'faraz@gmail.com'}
    
      
        return(
            

            <div>

        <h2>Home</h2>

        <button onClick={()=>this.props.facebook()}>FACEBOOK Login</button>
        {/* <button onClick={()=>this.props.set_data(use)} >Setdata</button> */}
            
            </div>
           
        )
    }
}




const mapStateToProps =(stat)=>({
   //global state sy property get karen gy! yani redux ki state
    users:stat.users
     
 })

 
 //action ko call krny k liye mapdispatch ka function banay gy
  const mapDispatchToProps=(dispatch)=>({
  set_data:(data)=> dispatch(set_data(data)),
  facebook:(data)=> dispatch(facebook(data))

     })
 
 
export default connect(mapStateToProps, mapDispatchToProps) (Home);

