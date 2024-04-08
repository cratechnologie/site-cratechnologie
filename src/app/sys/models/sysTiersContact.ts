
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCchEntityLinkedPhoneNumber } from "src/app/sys/models/sysCchEntityLinkedPhoneNumber";
  import { SysTiersContactType } from "src/app/sys/models/sysTiersContactType";



  export interface SysTiersContact {

              id ?: string ;

              sysTiers ?: SysTiers ;

              firstname ?: string ;

              lastname ?: string ;

              email ?: string ;

              status ?: number ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysTiersContactType ?: SysTiersContactType ;

              sysCchEntityLinkedPhoneNumber ?: SysCchEntityLinkedPhoneNumber ;


  }
