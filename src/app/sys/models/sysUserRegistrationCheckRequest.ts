
  import { SysUserRegistrationCheckRequestSendCanal } from "src/app/sys/models/sysUserRegistrationCheckRequestSendCanal"; 
  import { SysUserRegistrationCheckRequestStatus } from "src/app/sys/models/sysUserRegistrationCheckRequestStatus"; 
  import { SysUserRegistration } from "src/app/sys/models/sysUserRegistration"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserRegistrationCheckRequest {
    
              id : string ;
          
              sysUserRegistrationCheckRequestSendCanal : SysUserRegistrationCheckRequestSendCanal ;
          
              sysUserRegistrationCheckRequestStatus : SysUserRegistrationCheckRequestStatus ;
          
              sysUserRegistration : SysUserRegistration ;
          
              code : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       