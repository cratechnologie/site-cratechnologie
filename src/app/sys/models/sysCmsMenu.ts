
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCmsMenuItem } from "src/app/sys/models/sysCmsMenuItem";

  export interface SysCmsMenu {

              id : string ;

              name : string ;

              description : string ;

              sysCmsStatus : SysCmsStatus ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysCmsMenuItems : SysCmsMenuItem [] ;

  }
