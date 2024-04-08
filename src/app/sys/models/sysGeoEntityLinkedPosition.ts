
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity";
  import { SysGeoNeighbourhoodZone } from "src/app/sys/models/sysGeoNeighbourhoodZone";
  import { SysGeoNeighbourhood } from "src/app/sys/models/sysGeoNeighbourhood";
  import { SysGeoCity } from "src/app/sys/models/sysGeoCity";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoEntityLinkedPosition {

              id : number ;

              sysDataEntity : SysDataEntity ;

              sysDataEntityInstanceId : string ;

              sysGeoNeighbourhoodZone : SysGeoNeighbourhoodZone ;

              sysGeoNeighbourhood : SysGeoNeighbourhood ;

              sysGeoCity : SysGeoCity ;

              longitude : string ;

              latitude : string ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
       
