
  import { SysComMailStatus } from "src/app/sys/models/sysComMailStatus";
  import { SysComMailTemplate } from "src/app/sys/models/sysComMailTemplate";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysComMail {

              id : number ;

              sysComMailStatus : SysComMailStatus ;

              sysComMailTemplate : SysComMailTemplate ;

              fromSource : string ;

              toDestination : string ;

              cc : string ;

              bcc : string ;

              subject : string ;

              message : string ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
