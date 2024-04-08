
  import { SysUserPasswordResetCheckRequestSendCanal } from "src/app/sys/models/sysUserPasswordResetCheckRequestSendCanal"; 
  import { SysUserPasswordResetCheckRequestStatus } from "src/app/sys/models/sysUserPasswordResetCheckRequestStatus"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserPasswordResetCheckRequest {
    
              id : string ;
          
              sysUserPasswordResetCheckRequestSendCanal : SysUserPasswordResetCheckRequestSendCanal ;
          
              sysUserPasswordResetCheckRequestStatus : SysUserPasswordResetCheckRequestStatus ;
          
              sysUser : SysUser ;
          
              canalId : string ;
          
              code : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       