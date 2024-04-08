
  import { SysUser } from "src/app/sys/models/sysUser";
  import { SysCmsStatus } from "src/app/sys/models/sysCmsStatus";
  import { SysCmsCarouselItem } from "src/app/sys/models/sysCmsCarouselItem";

  export interface SysCmsCarousel {

              id : string ;

              name : string ;

              description : string ;

              height : number ;

              heightUnit : string ;

              width : number ;

              widthUnit : string ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

              sysCmsStatus : SysCmsStatus ;

              sysCmsCarouselItems : SysCmsCarouselItem [] ;

  }
