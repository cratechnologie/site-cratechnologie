
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCmsOurRealisationCategory {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       