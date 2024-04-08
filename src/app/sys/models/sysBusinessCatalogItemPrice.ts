
  import { SysBillingUnit } from "src/app/sys/models/sysBillingUnit";
  import { SysBusinessCatalogItem } from "src/app/sys/models/sysBusinessCatalogItem";
  import { SysTiers } from "src/app/sys/models/sysTiers";

  export interface SysBusinessCatalogItemPrice {

              id ?: number ;

              name ?: string ;

              price ?: number ;

              sysBillingUnit ?: SysBillingUnit ;

              sysBusinessCatalogItem ?: SysBusinessCatalogItem ;


  }
