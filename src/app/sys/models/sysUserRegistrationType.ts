
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysUserRegistrationSysTiersAutolinkGroup } from "src/app/sys/models/sysUserRegistrationSysTiersAutolinkGroup";

  export interface SysUserRegistrationType {

              id ?: string ;

              name ?: string ;

              description ?: string ;

              status ?: number ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ? : SysUser ;

              sysUserRegistrationSysTiersAutolinkGroups ? : SysUserRegistrationSysTiersAutolinkGroup [] ;

  }
