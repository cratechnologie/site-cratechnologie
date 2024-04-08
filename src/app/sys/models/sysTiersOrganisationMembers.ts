 import { SysTiers } from "src/app/sys/models/sysTiers";


  export interface SysTiersOrganisationMembers
 {

        organisation ? : SysTiers ;

        members ? :  Map<string,SysTiers>  ;
 
        expanded ? : boolean ;
   }
