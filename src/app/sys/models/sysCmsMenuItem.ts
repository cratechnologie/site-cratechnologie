
   import { SysCmsMenu } from "src/app/sys/models/sysCmsMenu";
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysCmsMenuItem {

              id : number ;

              name : string ;

              description : string ;

              content : string ;

              link : string ;

              status : number ;

              sysCmsMenuItems : SysCmsMenuItem [];

              sysCmsMenu : SysCmsMenu ;

              iconPosition : string ;

              icon : SysCmsMediaFile ;

              iconOver : SysCmsMediaFile ;

              iconActive : SysCmsMediaFile ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;
              open    : boolean ;

  }
