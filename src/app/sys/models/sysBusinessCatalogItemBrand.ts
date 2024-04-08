
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysDmsEntityFile } from "src/app/sys/models/sysDmsEntityFile";
  import { SysTiers } from "src/app/sys/models/sysTiers";


  export interface SysBusinessCatalogItemBrand {

              id : string ;

              name : string ;

              description : string ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;
              image : SysDmsEntityFile ;
              sysTiers : SysTiers ;


  }
