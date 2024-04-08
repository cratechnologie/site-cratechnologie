
  import { SysUserAttributeChangeRequestSendCanal } from "src/app/sys/models/sysUserAttributeChangeRequestSendCanal"; 
  import { SysUserAttributeChangeRequestType } from "src/app/sys/models/sysUserAttributeChangeRequestType"; 
  import { SysUserAttributeChangeRequestStatus } from "src/app/sys/models/sysUserAttributeChangeRequestStatus"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserAttributeChangeRequest {
    
              id : string ;
          
              sysUserAttributeChangeRequestSendCanal : SysUserAttributeChangeRequestSendCanal ;
          
              sysUserAttributeChangeRequestType : SysUserAttributeChangeRequestType ;
          
              sysUserAttributeChangeRequestStatus : SysUserAttributeChangeRequestStatus ;
          
              sysUser : SysUser ;
          
              status : number ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       