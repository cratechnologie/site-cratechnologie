
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCmsBlogCategory {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       