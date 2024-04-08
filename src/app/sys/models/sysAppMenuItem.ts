
  import { SysAppMenu } from "src/app/sys/models/sysAppMenu";
  //import { SysAppMenuItem } from "src/app/sys/models/sysAppMenuItem";
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysAppSecurityEntityLinked } from "src/app/sys/models/sysAppSecurityEntityLinked";

  export interface SysAppMenuItem {

              id : string ;

              name : string ;
              label : string ;

              description : string ;

              status : number ;

              sysAppMenu : SysAppMenu ;

              sysAppMenuItem : SysAppMenuItem ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysDataEntityInstance : SysAppSecurityEntityLinked ;

              children? : SysAppMenuItem [] ;

              leaf? : boolean ;
              expandedIcon: string ;
              collapsedIcon: string
              expanded?: boolean;

  }
