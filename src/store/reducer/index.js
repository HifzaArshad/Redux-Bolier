const Intial_state={
    users:[{
        name:'Hifza',
        email:'rajputkhan234@gmail.com'
    },

        {
                name:'Nasreen',
                email:'nasreen@gmail.com'
        }],
    
}


export default (state=Intial_state ,action)=>{
    
        switch(action.type){
            case 'SETDATA':
                return({
                    ...state,
                   users:[...state.users,action.data]
               
         
                   //state.users jo uper bani hoa hai object,,,action.data wo object jo update hokr aaya hai
                })
               
                default:
                    return state;     
        }
     
         
}
         

