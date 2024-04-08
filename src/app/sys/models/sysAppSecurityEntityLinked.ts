
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity"; 
  import { SysAppSecurityStrategyType } from "src/app/sys/models/sysAppSecurityStrategyType"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysAppSecurityEntityLinked {
    
              id : string ;
          
              sysDataEntity : SysDataEntity ;
          
              sysDataEntityInstanceId : string ;
          
              sysAppSecurityStrategyType : SysAppSecurityStrategyType ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       