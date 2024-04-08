
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile"; 
  import { SysCmsOurRealisationCategory } from "src/app/sys/models/sysCmsOurRealisationCategory"; 
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus"; 

  export interface SysCmsOurRealisation {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              linkText : string ;
          
              link : string ;
          
              position : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              image : SysCmsMediaFile ;
          
              sysCmsOurRealisationCategory : SysCmsOurRealisationCategory ;
          
              sysCmsStatus : SysCmsStatus ;
          
  }
       