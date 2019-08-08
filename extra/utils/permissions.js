
export const permissions = {
    'getUser ':{
        all:['head-trainee'],
        read:['trainees','trainer'],
        write:['trainer'],
        delete:[],



    }
}

let value;

    export default function permission(getUser,trainee,type){
if(getUser=='getUser'&& trainee=='head-trainee'&&type=='all'||type=='read'||type=='write'||type=='delete'){
 return true;

}
else if(trainee=='tarinees'&& type=='read'){
    return true;

}
else if (trainee=='trainer' && type=='read'|| type=='write'){
    return true
}
else
return false;
    
}
/*
console.log(
permission('getUser','head-trainee','all'));

console.log(
    permission('getUser','trainee','all'));

    console.log(
        permission('getUser','trainer','all'));

        console.log(
            permission('getUser','head-trainee','read'));


            */