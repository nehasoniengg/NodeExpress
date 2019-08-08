import * as jwt from 'jsonwebtoken';
import {hasPermission} from './hasPermission';
export default (module, permissionType) => (req, res, next) => {
    const token= req.header('Authorization');
       console.log('token value : ::: :',token);  

   const user = jwt.verify(token,process.env.key);
   console.log('user  ::::::',user);
   if (hasPermission(module, permissionType)) {
       console.log('modul and permission type',module, permissionType);
   } else {
        next('Wrong Permission');
       }
    

    
}