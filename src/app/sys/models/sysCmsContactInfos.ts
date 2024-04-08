
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus";
  import { SysCmsContactInfosCategory } from "src/app/sys/models/sysCmsContactInfosCategory";

  export interface SysCmsContactInfos {

              id : string ;

              position : number ;

              infos : string ;

              iconPosition : string ;

              icon : SysCmsMediaFile ;

              iconOver : SysCmsMediaFile ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysCmsStatus : SysCmsStatus ;

              sysCmsContactInfosCategory : SysCmsContactInfosCategory ;

  }
