
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsPartner {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              website : string ;
          
              linkText : string ;
          
              link : string ;
          
              position : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              image : SysCmsMediaFile ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       