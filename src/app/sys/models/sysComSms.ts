
  import { SysComSmsStatus } from "src/app/sys/models/sysComSmsStatus"; 
  import { SysComSmsTemplate } from "src/app/sys/models/sysComSmsTemplate"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComSms {
    
              id : number ;
          
              sysComSmsStatus : SysComSmsStatus ;
          
              sysComSmsTemplate : SysComSmsTemplate ;
          
              to : string ;
          
              message : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       