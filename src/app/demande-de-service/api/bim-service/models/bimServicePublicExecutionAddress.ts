
  import { SysUser } from "src/app/sys/models/sysUser";

  import { BimServicePublic } from "./bimServicePublic";

  export interface BimServicePublicExecutionAddress {

              id ? : number ;

              addressZipcode ? : string ;

              address ? : string ;

              addressLongitude ? : string ;

              addressLatitude ? : string ;

              dateCreation ? : Date ;

              dateModification ? : Date ;

              sysUserCreation ? : SysUser ;

              sysUserModification ? : SysUser ;

              bimServicePublic ? : BimServicePublic ;

  }
