
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysTiersIdentityDocumentType } from "src/app/sys/models/sysTiersIdentityDocumentType";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysTiersIdentityDocument {

              id : string ;

              documentId : string ;

              sysTiers : SysTiers ;

              sysTiersIdentityDocumentType : SysTiersIdentityDocumentType ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
