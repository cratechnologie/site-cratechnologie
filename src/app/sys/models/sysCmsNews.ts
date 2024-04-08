
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsNewsCategory } from "src/app/sys/models/sysCmsNewsCategory"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 

  export interface SysCmsNews {
    
              id : number ;
          
              title : string ;
          
              intro : string ;
          
              linkText : string ;
          
              link : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              sysCmsNewsCategory : SysCmsNewsCategory ;
          
              sysCmsStatus : SysCmsStatus ;
          
              image : SysCmsMediaFile ;
          
  }
       