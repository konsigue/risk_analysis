import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FinancialAlgorithmModel } from '../models/FinancialAlgorithmModel';
import { FinancialAnalysisAssetsModel } from '../models/FinancialAnalysisAssetsModel';
import { FinancialSectorModel } from '../models/FinancialSectorModel';

@Component({
  selector: 'analysis-financial',
  templateUrl: './analysis-financial.component.html',
  styleUrls: ['./analysis-financial.component.css']
})
export class AnalysisFinancialComponent implements OnInit {
  public financialAlgorithm: FinancialAlgorithmModel[]
  public financialAssets: FinancialAnalysisAssetsModel[]
  public financialSector: FinancialSectorModel[]

  public graphsWidth: string
  public acidReasonData: any[]
  public currentRatioData: any[]
  public coverageData: any[]
  public leverageData: any[]

  public chartLabels: string[]
  public chartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: false
    }
  };

  @ViewChild('graphsIdentifier')
  graphsIdentifier: ElementRef

  constructor() {
    this.financialAlgorithm = []
    this.financialAssets = []
    this.financialSector = []
    this.chartLabels = []

    /** mock */
    this.graphsWidth = "200px"
    this.acidReasonData = [0]
    this.financialAlgorithm = [
      { Time: "2017", Value: 7.36 },
      { Time: "Últimos 12 meses", Value: 11.55 }
    ]
    this.financialAssets = [
      {Time:"2016",CashFlow:-752,AccountingCapital:14320,NetSales:49110,TotalAssets:29419},
      {Time:"2017",CashFlow:2424,AccountingCapital:15268,NetSales:60263,TotalAssets:26714},
      {Time:"Últimos 12 meses",CashFlow:18737,AccountingCapital:19184,NetSales:82147,TotalAssets:30630}
    ]
    this.financialSector = [
      { Name:"Media en sector", AcidReason:0.94, CurrentRatio:1.28, InventoryRotationReason: 0.01,
        SalesReturn: 0.10, AssetReturn: 0.14, NetValueReturn: 0.38, SaleAssets: 0.76, 
        Coverage: 0, Leverage: 1.79 },
      { Name:"2016", AcidReason:1.88, CurrentRatio:2.07, InventoryRotationReason: 0,
        SalesReturn: 0.00, AssetReturn: 0.00, NetValueReturn: 0.00, SaleAssets: 1.67, 
        Coverage: 0, Leverage: 1.05 },
      { Name:"2017", AcidReason:2.34, CurrentRatio:2.48, InventoryRotationReason: 0,
        SalesReturn: 0.02, AssetReturn: 0.04, NetValueReturn: 0.06, SaleAssets: 2.26, 
        Coverage: 0, Leverage: 0.75 },
      { Name:"Últimos 12 meses", AcidReason:2.77, CurrentRatio:2.92, InventoryRotationReason: 0,
        SalesReturn: 0.13, AssetReturn: 0.34, NetValueReturn: 0.54, SaleAssets: 2.68, 
        Coverage: 0, Leverage: 1.68 }
    ]
    this.chartLabels = this.getSectorTimeNames()
    this.acidReasonData = this.getSectorData('AcidReason')
    this.currentRatioData = this.getSectorData('CurrentRatio')
    this.coverageData = this.getSectorData('Coverage')
    this.leverageData = this.getSectorData('Leverage')
    console.log(this.acidReasonData)
    /** end mock */
  }

  ngOnInit() {
    this.graphsWidth = this.getGraphsWidth()
    console.log(this.graphsWidth)
  }

  getGraphsWidth() : string {
    return (this.graphsIdentifier.nativeElement.offsetWidth / 5) + 'px'
  }

  getSectorTimeNames() : string[] {
    let timeNames = new Array<string>()
    for (let i = 0; i < this.financialSector.length; i++) {
      timeNames[i] = this.financialSector[i].Name;
    }
    return timeNames
  }

  getSectorData(property : string) : any[] {
    let d = new Array<number>()
    for (let i = 0; i < this.financialSector.length; i++) {
      d[i] = this.financialSector[i][property];
    }
    let data = [
      { label: property, data: d }
    ]
    return data
  }
}