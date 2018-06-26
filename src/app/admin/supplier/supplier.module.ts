/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { SupplierListComponent } from './supplier-list.component';
import { SupplierGeneralInfoComponent } from './supplier-general-info/supplier-general-info.component';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierDomicileComponent } from './supplier-domicile/supplier-domicile.component';
import { MenuSuppliersComponent } from './menu-suppliers/menu-suppliers.component';
import { SupplierAnalysisComponent } from './supplier-analysis/supplier-analysis.component';
import { ShareholdersSuppliersComponent } from './shareholders-suppliers/shareholders-suppliers.component';
import { ContactsSuppliersComponent } from './contacts-suppliers/contacts-suppliers.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      SupplierListComponent,
      SupplierSummaryComponent,
      SupplierDomicileComponent,
      SupplierGeneralInfoComponent,
      SupplierAnalysisComponent,
      MenuSuppliersComponent,
      ShareholdersSuppliersComponent,
      ContactsSuppliersComponent
  ],
  bootstrap: [SupplierListComponent]
})
export class SupplierModule { }
