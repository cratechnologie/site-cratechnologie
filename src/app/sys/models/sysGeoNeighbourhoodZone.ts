
  import { SysGeoNeighbourhood } from "src/app/sys/models/sysGeoNeighbourhood";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoNeighbourhoodZone {

              id ? : string ;

              sysGeoNeighbourhood ?: SysGeoNeighbourhood ;

              name ?: string ;

              description ?: string ;

              status ?: number ;

              longitude ?: string ;

              latitude ?: string ;

              map ?: string ;

              zipcode ?: string ;


              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;
              
              sysGeoNeighbourhoodZoneProximitys ? : SysGeoNeighbourhoodZone [] ;


  }
