
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysTiersType } from "src/app/sys/models/sysTiersType";
  import { SysRole } from "src/app/sys/models/sysRole";

  import { SysUserRegistrationType } from "src/app/sys/models/sysUserRegistrationType";

  import { SysTiersRelationType } from "src/app/sys/models/sysTiersRelationType";




  import { SysDmsEntityFile } from "src/app/sys/models/sysDmsEntityFile";

  export interface SysUserRegistrationSysTiersAutolinkGroup {

              id ? : string ;

              name ?: string ;

              description ?: string ;

              descriptionPublic ?: string ;

              status ?: number ;

              dateCreation ?: Date ;

              dateModification? : Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification? : SysUser ;

              sysTiersTypes ? : SysTiersType [] ;
              sysRoles ? : SysRole [] ;

              sysRolesAuthorization ? : SysRole [] ;

              sysUserRegistrationTypesAuthorization ? : SysUserRegistrationType [] ;

              sysTiersRelationTypes ? : SysTiersRelationType [] ;


              publicImage ? : SysDmsEntityFile ;
              delegatedAllowed ? : number ;

              requireAuthorization ? : number ;


  }
