
  import { SysUserRegistration } from "src/app/sys/models/sysUserRegistration";
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysUserRegistrationSysTiersAutolinkGroup } from "src/app/sys/models/sysUserRegistrationSysTiersAutolinkGroup";

  import { SysUserRegistrationType } from "src/app/sys/models/sysUserRegistrationType";
  import { SysUserRegistrationStatus } from "src/app/sys/models/sysUserRegistrationStatus";

  import { SysUserRegistrationSysTiersAutolinkStatus } from "src/app/sys/models/sysUserRegistrationSysTiersAutolinkStatus";

  import { SysTiersSex } from "src/app/sys/models/sysTiersSex";


  import { SysTiersLegalPerson } from "src/app/sys/models/sysTiersLegalPerson";
  import { SysGeoRegion } from "src/app/sys/models/sysGeoRegion";
  import { SysGeoCountry } from "src/app/sys/models/sysGeoCountry";
  import { SysGeoEntityLinkedAddressType } from "src/app/sys/models/sysGeoEntityLinkedAddressType";
  import { SysCchEntityLinkedPhoneNumberType } from "src/app/sys/models/sysCchEntityLinkedPhoneNumberType";
  import { SysRole } from "src/app/sys/models/sysRole";
  import { SysTiersRelationType } from "src/app/sys/models/sysTiersRelationType";


  import { SysTiersDivision } from "src/app/sys/models/sysTiersDivision";






  export interface SysUserRegistrationEditionDataResponse {

    sysUserRegistration ? : SysUserRegistration ;
    sysTiersNonHuman ?: SysTiers ;
    sysTiersHuman ?: SysTiers ;
    sysUserSysTiersHuman ?:SysUser;


    sysUserRegistrationSysTiersAutolinkGroups?: SysUserRegistrationSysTiersAutolinkGroup[] ;
    sysUserRegistrationTypes ? : SysUserRegistrationType [] ;

    sysUserRegistrationStatuss ? : SysUserRegistrationStatus [] ;
    sysUserRegistrationSysTiersAutolinkStatuss ? : SysUserRegistrationSysTiersAutolinkStatus [] ;

    sysTiersSexs ? : SysTiersSex [];
    sysTiersLegalPersons ? : SysTiersLegalPerson [];

    sysGeoRegions ? : SysGeoRegion [] ;
    sysGeoCountrys ? : SysGeoCountry [] ;


    sysTiersDivisions ? : SysTiersDivision [] ;
    sysTiersDivisionsSupplied ? : SysTiersDivision [] ;

    sysGeoEntityLinkedAddressTypes ? : SysGeoEntityLinkedAddressType [] ;
    sysCchEntityLinkedPhoneNumberTypes ? : SysCchEntityLinkedPhoneNumberType [] ;

    sysRoles ? : SysRole[] ;
    sysTiersRelationTypes ? : SysTiersRelationType [];

  }
