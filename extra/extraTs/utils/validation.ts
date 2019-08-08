import { IUsers } from "./../interfaces";
import { validateEmail } from "./helpers";

export const user=[
              { 
                   traineeEmail:'trainee1@successive.tech',
                   reviewerEmail: 'reviewer1@successive.tech'
              },
              { 
                traineeEmail:'trainee2@successive.tech',
                reviewerEmail: 'reviewer2@successive.tech'
             },
             { 
                traineeEmail:'trainee3@successive.tech',
                reviewerEmail: 'reviewer3@successive.tech'
             }   
            
        ];


//const regex=new RegExp(/^([a-z0-9]{5,})$/);
 let validflag=0;
 let invalidflag=0;
 let validR=0;
  let invalidR=0;
 // const regex=new RegExp( /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,4}))$/
 // );

 function validateEmail(traineeEmail){
    

/*
if(regex.test(traineeEmail)){
    return true;
}
    else    {
        return false;

    }    
}*/

  export function validateUsers(user:IUsers[]):void{
     // console.log(user); 
    user.forEach(element => {
              
        if(validateEmail(element.traineeEmail)){
            validflag ++ ;
        } else {
             invalidflag ++;
        } 
    });

    user.forEach(element => {
              
        if(validateEmail(element.reviewerEmail)){
            validR ++ ;
        } else {
             invalidR ++;
        } 
    });
 //   console.log('Valid Counts : ' ,validflag+validR);
 
   // console.log('InValid Counts  : ' ,invalidflag+invalidR);
    
return {
    validR,invalidR,validflag,invalidflag
}
 }
 //export {invalidflag,invalidR,validR,validflag};


 

 //validateUsers(user);

 //console.log('Valid Counts : ' ,validflag+validR);
 
 //console.log('InValid Counts  : ' ,invalidflag+invalidR);
 
 //console.log ('valid counts for reviewerEmail' , validR);

// console.log('Invalid count for reviewerEmail' , invalidR);









/*
 var userDetail=user;
 function validateUsers(){
     console.log(userDetail);
 }
 validateUsers();

}


var user= validateEmail({
    traineeEmail:'trainee1@successive.tech',
    reviewerEmail: 'reviewer1@successive.tech',
});
*/
