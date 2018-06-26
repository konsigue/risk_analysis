/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { SupplierListComponent } from './supplier-list.component';
import { SupplierGeneralInfoComponent } from './supplier-general-info/supplier-general-info.component';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierDomicileComponent } from './supplier-domicile/supplier-domicile.component';
import { MenuSuppliersComponent } from './menu-suppliers/menu-suppliers.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      SupplierListComponent,
      SupplierSummaryComponent,
      SupplierDomicileComponent,
      SupplierGeneralInfoComponent,
      MenuSuppliersComponent
  ],
  bootstrap: [SupplierListComponent]
})
export class SupplierModule { }
