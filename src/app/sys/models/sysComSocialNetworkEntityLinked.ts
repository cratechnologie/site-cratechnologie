
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity"; 
  import { SysComSocialNetwork } from "src/app/sys/models/sysComSocialNetwork"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComSocialNetworkEntityLinked {
    
              id : number ;
          
              sysDataEntity : SysDataEntity ;
          
              sysDataEntityInstanceId : string ;
          
              sysComSocialNetwork : SysComSocialNetwork ;
          
              socialNetwork : string ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       