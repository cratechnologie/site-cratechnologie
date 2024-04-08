
  import { SysComSmsTemplateGroup } from "src/app/sys/models/sysComSmsTemplateGroup";
  import { SysComSmsTemplateVar } from "src/app/sys/models/sysComSmsTemplateVar";

  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysComSmsTemplate {

              id : string ;

              message : string ;

              status : number ;

              sysComSmsTemplateGroup : SysComSmsTemplateGroup ;

              sysComSmsTemplateVars :  SysComSmsTemplateVar [] ;


              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
