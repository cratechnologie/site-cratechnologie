import { SysUser } from "./sysUser";

  export interface SysTiersKnowAboutWay {

              id : string ;

              name : string ;

              description : string ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              checked : boolean ;
  }
