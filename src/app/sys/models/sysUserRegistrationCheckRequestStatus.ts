
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserRegistrationCheckRequestStatus {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       