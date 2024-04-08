
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity";
  import { SysUserRegistration } from "src/app/sys/models/sysUserRegistration";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysUserRegistrationSysDataEntity {

              id ? : string ;

              sysDataEntity ? : SysDataEntity ;

              sysDataEntityInstanceId ?: string ;

              sysUserRegistration?: SysUserRegistration ;

              dataEntity? : string ;

              keyEntity? : string ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

  }
