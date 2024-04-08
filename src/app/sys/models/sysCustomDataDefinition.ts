
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCustomDataDefinition {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              dataDefinition : string ;
          
              dataSource : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       