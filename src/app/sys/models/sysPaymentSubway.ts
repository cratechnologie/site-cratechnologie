
  import { SysPaymentWay } from "src/app/sys/models/sysPaymentWay"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysPaymentSubway {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysPaymentWay : SysPaymentWay ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       