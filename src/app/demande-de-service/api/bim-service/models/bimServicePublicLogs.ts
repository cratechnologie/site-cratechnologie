
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysTiers } from "src/app/sys/models/sysTiers";


  import { BimServicePublic } from "./bimServicePublic";
  import { BimServicePublicLogsType } from "./bimServicePublicLogsType";

  export interface BimServicePublicLogs {

              id ?: string ;

              data ?: string ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              bimServicePublic ?: BimServicePublic ;

              bimServicePublicLogsType ?: BimServicePublicLogsType ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysTiersCreation ?: SysTiers ;

              sysTiersModification ?: SysTiers ;

  }
