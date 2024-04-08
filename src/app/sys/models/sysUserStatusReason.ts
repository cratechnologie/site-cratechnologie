
  import { SysUserStatus } from "src/app/sys/models/sysUserStatus"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserStatusReason {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysUserStatus : SysUserStatus ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       