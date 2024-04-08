
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsOurValue {
    
              id : string ;
          
              position : number ;
          
              title : string ;
          
              content : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              image : SysCmsMediaFile ;
          
              imagePosition : string ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       