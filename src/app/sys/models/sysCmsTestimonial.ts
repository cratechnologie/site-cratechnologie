
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsTestimonial {
    
              id : string ;
          
              position : number ;
          
              customerName : string ;
          
              testimony : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              image : SysCmsMediaFile ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       