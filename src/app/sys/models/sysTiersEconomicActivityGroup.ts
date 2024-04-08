
  import { SysTiersEconomicSector } from "src/app/sys/models/sysTiersEconomicSector"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysTiersEconomicActivityGroup {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysTiersEconomicSector : SysTiersEconomicSector ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       