
import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysCmsMediaDirectory {

              id ?: string ;

              name ?: string ;

              description ?: string ;

              status ?: number ;

              sysCmsMediaDirectory ?: SysCmsMediaDirectory ;

              sysCmsMediaDirectorys ?: SysCmsMediaDirectory [];

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

               open ?: boolean ;
               menu ?: boolean ;



  }
