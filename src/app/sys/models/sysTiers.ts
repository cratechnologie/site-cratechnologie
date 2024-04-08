
  import { SysTiersType } from "src/app/sys/models/sysTiersType";
  import { SysTiersLegalPerson } from "src/app/sys/models/sysTiersLegalPerson";
  import { SysTiersBranchOfLaw } from "src/app/sys/models/sysTiersBranchOfLaw";
  import { SysTiersOrganisationTypeOfProfit } from "src/app/sys/models/sysTiersOrganisationTypeOfProfit";
  import { SysTiersBusinessLegalForm } from "src/app/sys/models/sysTiersBusinessLegalForm";
  import { SysTiersSex } from "src/app/sys/models/sysTiersSex";
  import { SysGeoCountry } from "src/app/sys/models/sysGeoCountry";

  import { SysGeoRegion } from "src/app/sys/models/sysGeoRegion";

  import { SysTiersDivision } from "src/app/sys/models/sysTiersDivision";


  import { SysUser } from "src/app/sys/models/sysUser";

  import { SysTiersEconomicActivity } from "src/app/sys/models/sysTiersEconomicActivity";
  import { SysTiersLanguage } from "src/app/sys/models/sysTiersLanguage";
  import { SysCchEntityLinkedPhoneNumber } from "src/app/sys/models/sysCchEntityLinkedPhoneNumber";
  import { SysComSocialNetworkEntityLinked } from "src/app/sys/models/sysComSocialNetworkEntityLinked";
  import { SysGeoEntityLinkedAddress } from "src/app/sys/models/sysGeoEntityLinkedAddress";

  import { SysTiersIdentityDocument } from "src/app/sys/models/sysTiersIdentityDocument";
  import { SysTiersContact } from "src/app/sys/models/sysTiersContact";

  import { SysTiersSalariedWorkforce } from "src/app/sys/models/sysTiersSalariedWorkforce";

  import { SysDmsEntityFile } from "src/app/sys/models/sysDmsEntityFile";

  import { SysTiersRelationType } from "src/app/sys/models/sysTiersRelationType";



  import { SysTiersJobPosition } from "src/app/sys/models/sysTiersJobPosition";
  import { SysTiersJobCategory } from "src/app/sys/models/sysTiersJobCategory";

  import { SysGeoEntityLinkedPosition } from "src/app/sys/models/sysGeoEntityLinkedPosition";



  export interface SysTiers {

              id ? : string ;
              idFunctional ? : string ;
              idRelational ? : string ;

              isOrganisationAdmin ? : number;
              organisationTiersMembersQuota ? :  number;


              sysTiersJobPosition ? : SysTiersJobPosition;
              sysTiersJobCategory? : SysTiersJobCategory;

              sysTiersType ? : SysTiersType ;

              sysTiersLegalPerson ?: SysTiersLegalPerson ;

              sysTiersBranchOfLaw ?: SysTiersBranchOfLaw ;

              sysTiersOrganisationTypeOfProfit ?: SysTiersOrganisationTypeOfProfit ;

              sysTiersBusinessLegalForm ?: SysTiersBusinessLegalForm ;

              sysTiersSalariedWorkforce ?: SysTiersSalariedWorkforce ;

              sysTiersSex ?: SysTiersSex ;

              name ?: string ;

              firstname ?: string ;

              lastname ?: string ;

              email ?: string ;

              web ?: string ;

              birthDate ?: Date ;

              birthPlace ?: string ;

              birthSysGeoCountry ?: SysGeoCountry ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;



              profileImage ? : SysDmsEntityFile ;

              sysTiersLanguages ?: SysTiersLanguage [] ;
              sysTiersEconomicActivitys ?: SysTiersEconomicActivity [] ;
              sysCchEntityLinkedPhoneNumbers ?: SysCchEntityLinkedPhoneNumber [] ;
              sysComSocialNetworkEntityLinkeds ?: SysComSocialNetworkEntityLinked [] ;
              sysGeoEntityLinkedAddresss ?: SysGeoEntityLinkedAddress [] ;
              sysTiersIdentityDocuments ?: SysTiersIdentityDocument [] ;
              sysTiersContacts ?: SysTiersContact [] ;

              sysTiersRelationTypes ?: SysTiersRelationType [] ;
              sysGeoRegionsBusiness ?: SysGeoRegion [] ;

              sysTiersDivisions ? : SysTiersDivision [] ;
              sysTiersDivisionsSupplied ? : SysTiersDivision [] ;




              sysTiersOrganisation ?: SysTiers ;
              sysTiersPoolOwner ?: SysTiers ;
              sysTiersHierarchicalSuperiorInOrganisation ?: SysTiers ;
              sysTiersManager ?: SysTiers ;



              phoneNumber ?: string ;

              addressZipcode ?: string ;

              addressPlace? : string ;

              addressSysGeoCountry ?: SysGeoCountry ;

              addressSysGeoRegion ?: SysGeoRegion ;

              sysGeoEntityLinkedPosition  ?: SysGeoEntityLinkedPosition ;

              mission ?: string ;
              vision ?: string ;
              coreValues ?: string ;

              nationalitySysGeoCountry  ?: SysGeoCountry ;

              expanded  ?: boolean ;



  }
