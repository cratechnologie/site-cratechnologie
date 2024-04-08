
  import { SysComMail } from "src/app/sys/models/sysComMail"; 
  import { SysComMailFileStatus } from "src/app/sys/models/sysComMailFileStatus"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComMailFile {
    
              id : number ;
          
              sysComMail : SysComMail ;
          
              sysComMailFileStatus : SysComMailFileStatus ;
          
              extension : string ;
          
              name : string ;
          
              size : number ;
          
              url : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       