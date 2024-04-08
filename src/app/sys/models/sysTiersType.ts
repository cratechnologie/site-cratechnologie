
  import { SysTiersEconomicActivity } from "src/app/sys/models/sysTiersEconomicActivity"; 
  import { SysTiersLegalPerson } from "src/app/sys/models/sysTiersLegalPerson";
  import { SysTiersBranchOfLaw } from "src/app/sys/models/sysTiersBranchOfLaw";
  import { SysTiersOrganisationTypeOfProfit } from "src/app/sys/models/sysTiersOrganisationTypeOfProfit";
  import { SysTiersBusinessLegalForm } from "src/app/sys/models/sysTiersBusinessLegalForm";
  import { SysUser } from "src/app/sys/models/sysUser";


  export interface SysTiersType {

              id : string ;

              sysTiersLegalPerson : SysTiersLegalPerson ;

              sysTiersBranchOfLaw : SysTiersBranchOfLaw ;

              sysTiersOrganisationTypeOfProfit : SysTiersOrganisationTypeOfProfit ;

              sysTiersBusinessLegalForm : SysTiersBusinessLegalForm ;

              sysTiersEconomicActivitys : SysTiersEconomicActivity [] ;

              name : string ;

              description : string ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
