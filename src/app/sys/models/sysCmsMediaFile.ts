
 //import { SysCmsMediaDirectory } from "src/app/shared/models/sysCmsMediaDirectory";
 import { SysCmsMediaDirectory } from "src/app/sys/models/sysCmsMediaDirectory";
 import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysCmsMediaFile {

      id ?: string ;
      name ?: string ;
      extension ?: string ;
      size ?: number ;
      status ?: number ;
      sysCmsMediaDirectory ?: SysCmsMediaDirectory ;

      dateCreation ?: Date ;
      dateModification ?: Date ;
      sysUserCreation ?: SysUser ;
      sysUserModification ?: SysUser ;




       edit ? : boolean  ;
       edited ? : boolean  ;
       editable ? : boolean  ;
       url ? : any  ;
       urlDefault ?  : string  ;
       saved ?  : boolean  ;
       sizeFormatted ? : string ;
       progress ? : number ;

       /*content ? : */

  }
