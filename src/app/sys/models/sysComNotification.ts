
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComNotification {
    
              id : number ;
          
              name : string ;
          
              contentStruct : string ;
          
              content : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       