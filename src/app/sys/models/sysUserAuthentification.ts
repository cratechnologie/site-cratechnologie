
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysUserAuthentification {
    
              id : string ;
          
              sysUser : SysUser ;
          
              refreshToken : string ;
          
              ip : string ;
          
              dateExpiration : Date ;
          
              dateCreation : Date ;
          
              jwtToken : string ;
          
  }
       