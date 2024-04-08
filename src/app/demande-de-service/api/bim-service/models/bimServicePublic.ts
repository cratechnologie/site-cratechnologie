
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysTiers } from "src/app/sys/models/sysTiers";
  import { SysBusinessCatalogItem } from "src/app/sys/models/sysBusinessCatalogItem";
  import { SysTiersKnowAboutWay } from "src/app/sys/models/sysTiersKnowAboutWay";


  import { BimServicePublicStatus } from "./bimServicePublicStatus";
  import { BimServicePublicExecutionAddress } from "./bimServicePublicExecutionAddress";


  export interface BimServicePublic {

              id  ? : string ;

              name ? : string ;

              email ? : string ;

              phoneNumberMain ? : string ;

              phoneNumberOther ? : string ;

              addressZipcode ? : string ;

              address ? : string ;

              addressLongitude ? : string ;

              addressLatitude ? : string ;

              notes ? : string ;

              dateCreation ? : Date ;

              dateModification ? : Date ;

              sysUserCreation ? : SysUser ;

              sysUserModification ? : SysUser ;

              sysTiersCreation ? : SysTiers ;

              sysTiersModification ? : SysTiers ;

              bimServicePublicStatus ? : BimServicePublicStatus ;

              sysTiersProviderOrganisation ? : SysTiers ;

              sysBusinessCatalogItem ? : SysBusinessCatalogItem ;







              sysTiersKnowAboutWays ?  : SysTiersKnowAboutWay [] ;
              bimServicePublicExecutionAddresss ?  : BimServicePublicExecutionAddress [] ;


  }
