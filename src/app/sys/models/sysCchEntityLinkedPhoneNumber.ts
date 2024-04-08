
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity";
  import { SysCchEntityLinkedPhoneNumberType } from "src/app/sys/models/sysCchEntityLinkedPhoneNumberType";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysCchEntityLinkedPhoneNumber {

              id ? : number ;

              sysDataEntity ? : SysDataEntity ;

              sysDataEntityInstanceId ? : string ;

              sysCchEntityLinkedPhoneNumberType ?: SysCchEntityLinkedPhoneNumberType ;

              phoneNumber ?: string ;

              status ? : number ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification? : SysUser ;

  }
