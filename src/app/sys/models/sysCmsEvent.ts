
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsEvent {
    
              id : string ;
          
              title : string ;
          
              intro : string ;
          
              content : string ;
          
              linkText : string ;
          
              link : string ;
          
              begin : Date ;
          
              end : Date ;
          
              address : string ;
          
              addressLongitute : string ;
          
              addressLatitute : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              image : SysCmsMediaFile ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       