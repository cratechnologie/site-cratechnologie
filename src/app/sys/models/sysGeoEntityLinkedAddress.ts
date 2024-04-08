
  import { SysDataEntity } from "src/app/sys/models/sysDataEntity";
  import { SysGeoEntityLinkedAddressType } from "src/app/sys/models/sysGeoEntityLinkedAddressType";
  import { SysGeoCommune } from "src/app/sys/models/sysGeoCommune";
  import { SysGeoNeighbourhood } from "src/app/sys/models/sysGeoNeighbourhood";
  import { SysUser } from "src/app/sys/models/sysUser";

  export interface SysGeoEntityLinkedAddress {

              id : number ;

              sysDataEntity : SysDataEntity ;

              sysDataEntityInstanceId : string ;

              sysGeoEntityLinkedAddressType : SysGeoEntityLinkedAddressType ;

              sysGeoCommune : SysGeoCommune ;

              sysGeoNeighbourhood : SysGeoNeighbourhood ;

              longitude : string ;

              latitude : string ;

              address : string ;

              map : string ;

              status : number ;

              dateCreation : Date ;

              dateModification : Date ;

              sysUserCreation : SysUser ;

              sysUserModification : SysUser ;

  }
