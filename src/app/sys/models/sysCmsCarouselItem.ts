
  import { SysCmsCarousel } from "src/app/sys/models/sysCmsCarousel";
  import { SysCmsMediaFile } from "src/app/sys/models/sysCmsMediaFile";
  import { SysCmsCarouselItemBloc } from "src/app/sys/models/sysCmsCarouselItemBloc";

  export interface SysCmsCarouselItem {

              id ?: number ;

              position ?: number ;

              caption ?: string ;

              sysCmsCarousel ?: SysCmsCarousel ;

              background ?: SysCmsMediaFile ;
              sysCmsCarouselItemBlocs ? : SysCmsCarouselItemBloc [] ;

  }
