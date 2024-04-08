
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus";
  import { SysCmsPerformanceCounterItem } from "src/app/sys/models/sysCmsPerformanceCounterItem";

  export interface SysCmsPerformanceCounter {

              id ?: string ;

              name ?: string ;

              description ?: string ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysCmsStatus ?: SysCmsStatus ;

              sysCmsPerformanceCounterItems ? : SysCmsPerformanceCounterItem [] ;

  }
