
  import { SysCmsCarouselItem } from "src/app/sys/models/sysCmsCarouselItem";
  import { SysCmsCarouselItemBlocLink } from "src/app/sys/models/sysCmsCarouselItemBlocLink";

  export interface SysCmsCarouselItemBloc {

              id ?: number ;

              title ?: string ;

              content ?: string ;

              titleColor ?: string ;

              contentColor ?: string ;

              topUnit ?: string ;

              top ?: number ;

              leftUnit ?: string ;

              left ?: number ;

              sysCmsCarouselItem ?: SysCmsCarouselItem ;
              
              sysCmsCarouselItemBlocLinks ? : SysCmsCarouselItemBlocLink [] ;

  }
