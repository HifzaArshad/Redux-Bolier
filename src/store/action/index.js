import Firebase from '../../config/firebase'
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database';
//reducer index.js ki state (action index.js) me updata karaskty han through dispatch object
//data paramerter sy data get hora hai home k page sy redux mm
const set_data=(data)=>{
  
    return(dispatch)=>{
     dispatch({type:'SETDATA', data:data})
    
       
    }
}



const facebook=()=>{

   
    return(dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();

        provider.setCustomParameters({
            'display': 'popup'
          });
          firebase.auth().signInWithPopup(provider).then(function(result) {
          
            var token = result.credential.accessToken;
         //user me complete data ayga facebook ka lkn mjhe srf email or name chaiye tu wo create me get kren gy
            var user = result.user;


            let create={
              name:user.displayName,
              email:user.email,
              profile:user.photoURL,
              uid:user.uid
            }
            console.log('fb user==>',create)
            //create me jo data hai isy firebase k database me bhjy gy
            firebase.database().ref('/').child(`users/${user.uid}`).set(create)
           
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('errors==>',errorMessage)
        
          });

    }

}
export {
    set_data,
    facebook
};
