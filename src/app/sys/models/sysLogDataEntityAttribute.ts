
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysLogDataEntityAttribute {
    
              id : number ;
          
              sysDataEntity : SysDataEntity ;
          
              sysDataEntityInstanceId : string ;
          
              attribute : string ;
          
              valueOld : string ;
          
              valueNew : string ;
          
              displayOld : string ;
          
              displayNew : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       