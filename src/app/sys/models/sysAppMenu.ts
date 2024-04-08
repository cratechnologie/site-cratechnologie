
  import { SysApp } from "src/app/sys/models/sysApp";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysAppSecurityEntityLinked } from "src/app/sys/models/sysAppSecurityEntityLinked";
  import { SysAppMenuItem } from "src/app/sys/models/sysAppMenuItem";

  export interface SysAppMenu {

              id : string ;

              name : string ;

              description : string ;

              status : number ;

              sysApp : SysApp ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysDataEntityInstance : SysAppSecurityEntityLinked ;

              sysAppMenuItems : SysAppMenuItem [] ;


  }
