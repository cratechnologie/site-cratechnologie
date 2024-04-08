
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserRegistrationCheckRequestSendCanal {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       