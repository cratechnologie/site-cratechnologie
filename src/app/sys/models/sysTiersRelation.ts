
  import { SysTiersRelationType } from "src/app/sys/models/sysTiersRelationType";
  import { SysTiersRelationStatus } from "src/app/sys/models/sysTiersRelationStatus";
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysTiersRelation {

              id ? : number ;

              sysTiersRelationType ? : SysTiersRelationType ;

              sysTiersRelationStatus ?: SysTiersRelationStatus ;

              sysTiersActor ? : SysTiers ;

              sysTiersOther ? : SysTiers ;

              dateCreation ? : Date ;

              dateModification ? : Date ;

              sysUserCreation ? : SysUser ;

              sysUserModification ? : SysUser ;

  }
