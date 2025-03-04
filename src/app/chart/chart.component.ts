import { Component, OnInit } from '@angular/core';
import { ChartAllModule, StockChartAllModule } from '@syncfusion/ej2-angular-charts';
import { DateTimeService, LegendService, TooltipService } from '@syncfusion/ej2-angular-charts';
import { DataLabelService, CandleSeriesService } from '@syncfusion/ej2-angular-charts';
import { chartData } from './datasource';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartAllModule, StockChartAllModule],
  providers: [
    DateTimeService,
    LegendService,
    TooltipService,
    DataLabelService,
    CandleSeriesService
  ],

  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {
  public chartData: any[] = [];
  title = "AAPL STOCK"
  public primaryXAxis?: Object;
  public primaryYAxis?: Object;
  public crosshair?: Object;
  constructor() {
    console.log('ChartComponent initialized!');
    this.primaryXAxis = {
      valueType: 'DateTime',
      crosshairTooltip: { enable: true }
    };
      this.primaryYAxis = {
      majorTickLines: { color: 'transparent', width: 0 },
      crosshairTooltip: { enable: true }
    };
      this.crosshair = {
      enable: true
    };
  }

  ngOnInit(): void {
    // Assign the imported chartData to the component's chartData
    this.chartData = chartData;
  }
 
}