
  import { SysCustomDataEntityLinked } from "src/app/sys/models/sysCustomDataEntityLinked"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCustomDataEntityLinkedSysUserProfile {
    
              id : string ;
          
              sysCustomDataEntityLinked : SysCustomDataEntityLinked ;
          
              sysUserProfile : SysUser ;
          
              dataDefinition : string ;
          
              dataValue : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       