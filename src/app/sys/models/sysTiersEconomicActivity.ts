
  import { SysTiersEconomicActivityGroup } from "src/app/sys/models/sysTiersEconomicActivityGroup"; 
  import { SysUser } from "src/app/sys/models/sysUser"; 

  export interface SysTiersEconomicActivity {
    
              id : string ;
          
              name : string ;
          
              description : string ;
          
              status : number ;
          
              sysTiersEconomicActivityGroup : SysTiersEconomicActivityGroup ;
          
              dateCreation : Date ;
          
              dateModification : Date ;
          
              sysUserCreation : SysUser ;
          
              sysUserModification : SysUser ;
          
  }
       