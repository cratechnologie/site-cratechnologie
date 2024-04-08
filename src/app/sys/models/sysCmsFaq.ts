
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsFaqCategory } from "src/app/sys/models/sysCmsFaqCategory"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsFaq {
    
              id : number ;
          
              position : number ;
          
              question : string ;
          
              response : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              sysCmsFaqCategory : SysCmsFaqCategory ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       