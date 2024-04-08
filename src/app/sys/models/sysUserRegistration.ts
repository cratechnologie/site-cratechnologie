
  import { SysUserRegistrationType } from "src/app/sys/models/sysUserRegistrationType";
  import { SysUserRegistrationStatus } from "src/app/sys/models/sysUserRegistrationStatus";
  import { SysUserRegistrationSysTiersAutolinkStatus } from "src/app/sys/models/sysUserRegistrationSysTiersAutolinkStatus";
  import { SysUserRegistrationSysTiersAutolinkGroup } from "src/app/sys/models/sysUserRegistrationSysTiersAutolinkGroup";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysUserRegistrationSysDataEntity } from "src/app/sys/models/sysUserRegistrationSysDataEntity";
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysDmsEntityFile } from "src/app/sys/models/sysDmsEntityFile";


  export interface SysUserRegistration {

              id ? : string ;

              sysUserRegistrationType ?: SysUserRegistrationType ;

              sysUserRegistrationStatus ?: SysUserRegistrationStatus ;

              sysUserRegistrationSysTiersAutolinkStatus ?: SysUserRegistrationSysTiersAutolinkStatus ;

              sysUserRegistrationSysTiersAutolinkGroup ? : SysUserRegistrationSysTiersAutolinkGroup ;

              username ?: string ;

              password ?: string ;

              passwordConfirm ?: string ;

              email ?: string ;

              sysTiersObject ?: string ;

              phone ?: string ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysDataEntities  ?: SysUserRegistrationSysDataEntity [];
              sysTiersMain ? : SysTiers ;
              delegated ? : number ;


              profilImage ? : SysDmsEntityFile ;

              termsConditionsApproval ? : number ;

  }
