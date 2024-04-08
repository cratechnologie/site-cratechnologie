
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity"; 
  import { SysApp } from "src/app/sys/models/sysApp"; 
  import { SysTiers } from "src/app/sys/models/sysTiers"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysSynchDataEntity {
    
              id : string ;
          
              entityLocalId : string ;
          
              entityRemoteId : string ;
          
              sysDataEntity : SysDataEntity ;
          
              sysApp : SysApp ;
          
              sysTiersOwner : SysTiers ;
          
              sysTiersOwnerIdFunctional : string ;
          
              sysTiersOwnerIdRelational : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       