
  import { SysUserStatus } from "src/app/sys/models/sysUserStatus";
  import { SysUserRegistration } from "src/app/sys/models/sysUserRegistration";
  import { SysRole } from "src/app/sys/models/sysRole";
  import { SysUserStatusReason } from "src/app/sys/models/sysUserStatusReason";


  export interface SysUser {

              id ?: string ;

              username ?: string ;

              password ?: string ;

              email ?: string ;

              phone ? : string ;

              sysUserObject ?: string ;

              sysUserStatus ?: SysUserStatus ;

              sysUserRegistration ?: SysUserRegistration ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysUserStatusReasons ?: SysUserStatusReason [] ;

              sysRoles ?:  SysRole [] ;

  }
