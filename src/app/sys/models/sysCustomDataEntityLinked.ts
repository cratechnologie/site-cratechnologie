
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity"; 
  import { SysCustomDataDefinition } from "src/app/sys/models/sysCustomDataDefinition"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCustomDataEntityLinked {
    
              id : string ;
          
              sysDataEntity : SysDataEntity ;
          
              sysDataEntityInstanceId : string ;
          
              sysCustomDataDefinition : SysCustomDataDefinition ;
          
              dataDefinition : string ;
          
              dataValue : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       