
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysDmsEntityFile {

              id? : string ;

              nom? : string ;

              url? : string ;

              urlDefault? : string ;



              extension? : string ;

              size? : number ;

              status ?: number ;

              sysDataEntity ?: SysDataEntity ;

              sysDataEntityInstanceId ?: string ;

              dateCreation? : Date ;

              dateModification ?: Date ;

              sysUserCreation? : SysUser ;

              sysUserModification? : SysUser ;

  }
