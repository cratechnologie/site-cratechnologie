
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCmsBlogCategory } from "src/app/sys/models/sysCmsBlogCategory";
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus";
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile";
  import { SysCmsBlogTag } from "src/app/sys/models/sysCmsBlogTag";

  export interface SysCmsBlog {

              id : string ;

              title : string ;

              intro : string ;

              link : string ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysCmsBlogCategory : SysCmsBlogCategory ;

              sysCmsStatus : SysCmsStatus ;

              image : SysCmsMediaFile ;

              sysCmsBlogTags : SysCmsBlogTag [] ;

  }
