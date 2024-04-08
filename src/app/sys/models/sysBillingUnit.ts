
  import { SysBillingUnitType } from "src/app/sys/models/sysBillingUnitType"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysBillingUnit {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysBillingUnitType : SysBillingUnitType ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       