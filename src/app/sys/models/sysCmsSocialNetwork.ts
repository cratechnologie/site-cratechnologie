
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsSocialNetwork {
    
              id : number ;
          
              position : number ;
          
              name : string ;
          
              link : string ;
          
              iconPosition : string ;
          
              icon : SysCmsMediaFile ;
          
              iconOver : SysCmsMediaFile ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       