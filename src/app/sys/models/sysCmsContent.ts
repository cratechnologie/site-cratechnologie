
  import { SysCmsContentStatus } from "src/app/sys/models/sysCmsContentStatus"; 
  import { SysCmsContentGroup } from "src/app/sys/models/sysCmsContentGroup"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysCmsContent {
    
              id : string ;
          
              name : string ;
          
              content : string ;
          
              sysCmsContentStatus : SysCmsContentStatus ;
          
              sysCmsContentGroup : SysCmsContentGroup ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       