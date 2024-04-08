import { SysBillingModel } from "./sysBillingModel";
import { SysBillingUnit } from "./sysBillingUnit";
import { SysBusinessCatalogItemBrand } from "./sysBusinessCatalogItemBrand";
import { SysBusinessCatalogItemCategory } from "./sysBusinessCatalogItemCategory";
import { SysBusinessCatalogItemPriceCardinality } from "./sysBusinessCatalogItemPriceCardinality";
import { SysBusinessCatalogItemType } from "./sysBusinessCatalogItemType";
import { SysDmsEntityFile } from "./sysDmsEntityFile";
import { SysTiers } from "./sysTiers";
import { SysUser } from "./sysUser";

  export interface SysBusinessCatalogItem {

              id ?: string ;

              name ?: string ;

              price ?: number ;


              description ?: string ;

              status ?: number ;

              dateCreation ?: Date ;

              dateModification ?: Date ;

              sysUserCreation ?: SysUser ;

              sysUserModification ?: SysUser ;

              sysBillingUnit ?: SysBillingUnit ;

              sysBusinessCatalogItemType ?: SysBusinessCatalogItemType ;

              sysBusinessCatalogItemCategory ?: SysBusinessCatalogItemCategory ;

              sysBusinessCatalogItemBrand ?: SysBusinessCatalogItemBrand ;


              sysBusinessCatalogItemPriceCardinality ?: SysBusinessCatalogItemPriceCardinality ;


              imageOne ?: SysDmsEntityFile ;

              imageTwo ?: SysDmsEntityFile ;

              imageThree ?: SysDmsEntityFile ;

              imageFour ? : SysDmsEntityFile ;
              sysBillingModels ? : SysBillingModel [] ;

              sysTiers ?: SysTiers ;

              selected ?: boolean ;

  }
