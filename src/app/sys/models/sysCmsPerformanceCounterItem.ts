
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile";
  import { SysCmsPerformanceCounter } from "src/app/sys/models/sysCmsPerformanceCounter";

  export interface SysCmsPerformanceCounterItem {

              id ?: number ;

              performance ?: number ;

              performanceSuffix ?: string ;

              title ?: string ;

              content ?: string ;

              iconPosition ?: string ;

              icon ?: SysCmsMediaFile ;

              sysCmsPerformanceCounter ?: SysCmsPerformanceCounter ;

  }
