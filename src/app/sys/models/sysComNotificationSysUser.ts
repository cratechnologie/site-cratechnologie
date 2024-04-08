
  import { SysComNotification } from "src/app/sys/models/sysComNotification"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComNotificationSysUser {
    
              id : number ;
          
              viewed : number ;
          
              sysComNotification : SysComNotification ;
          
              sysUser : SysUser ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       