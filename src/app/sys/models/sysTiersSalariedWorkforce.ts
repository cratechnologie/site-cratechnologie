
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysTiersSalariedWorkforce {
    
              id : string ;
          
              name : string ;
          
              start : number ;
          
              end : number ;
          
              description : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       