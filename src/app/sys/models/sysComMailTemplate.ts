
  import { SysComMailTemplateGroup } from "src/app/sys/models/sysComMailTemplateGroup";
  import { SysComMailTemplateVar } from "src/app/sys/models/sysComMailTemplateVar";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysComMailTemplate {

              id : string ;

              subject : string ;

              message : string ;

              status : number ;

              sysComMailTemplateGroup : SysComMailTemplateGroup ;

              sysComMailTemplateVars :  SysComMailTemplateVar [] ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
