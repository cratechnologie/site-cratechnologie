
  import { SysUser } from "src/app/sys/models/sysUser";

  import { SysBusinessCatalogItemType } from "./sysBusinessCatalogItemType";

  import { SysTiers } from "src/app/sys/models/sysTiers";

  export interface SysBusinessCatalogItemCategory {

              id : string ;

              name : string ;

              description : string ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysBusinessCatalogItemType : SysBusinessCatalogItemType ;
              sysTiers : SysTiers ;


  }
