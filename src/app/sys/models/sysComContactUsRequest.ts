
  import { SysComContactUsRequestStatus } from "src/app/sys/models/sysComContactUsRequestStatus"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysComContactUsRequest {
    
              id : string ;
          
              sysComContactUsRequestStatus : SysComContactUsRequestStatus ;
          
              email : string ;
          
              phone : string ;
          
              firstname : string ;
          
              lastname : string ;
          
              subject : string ;
          
              message : string ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       