
  import { SysAppObjectType } from "src/app/sys/models/sysAppObjectType"; 
  import { SysApp } from "src/app/sys/models/sysApp"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 
  import { SysAppSecurityEntityLinked } from "src/app/sys/models/sysAppSecurityEntityLinked"; 

  export interface SysAppObject {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysAppObjectType : SysAppObjectType ;
          
              sysApp : SysApp ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
              sysDataEntityInstance : SysAppSecurityEntityLinked ;
          
  }
       