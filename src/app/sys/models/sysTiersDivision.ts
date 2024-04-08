
import { SysUser } from "src/app/sys/models/sysUser";

import { SysTiersRelationType } from "src/app/sys/models/sysTiersRelationType";


  export interface SysTiersDivision {

              id ?: string ;

              name ?: string ;

              description ?: string ;

              status ?: number ;


              level ?: number ;

              parentId ?: string ;



              sysTiersRelationType ? : SysTiersRelationType ;

              sysTiersivision ?: SysTiersDivision ;

              sysTiersDivisions ?: SysTiersDivision [];

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

               open ?: boolean ;
               menu ?: boolean ;
               expanded  ?: boolean ;

               actifSelection  ?: boolean ;

               checked ?: boolean ;

               isSupplier ?: number ;

               selected ?: boolean ;
               selectedAll ?: boolean ;



  }
