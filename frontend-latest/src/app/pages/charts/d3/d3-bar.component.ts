import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-d3-bar',
  template: `
    <ngx-charts-bar-vertical
      [scheme]="colorScheme"
      [results]="results"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel">
    </ngx-charts-bar-vertical>
  `,
})
export class D3BarComponent implements OnDestroy {

  results = [
    { name: 'Maladie de la thyroide (RàPC)', value: 78.16},
    { name: 'Maladie de la thyroide (RàPC +Randomisation)', value: 95.53 },
    { name: 'Cancer du sein (RàPC)', value: 79.71},
    { name: 'Cancer du sein (RàPC +Randomisation)', value:  96.84   },
  ];
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  xAxisLabel = 'Country';
  yAxisLabel = 'Population';
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.primaryLight,  colors.infoLight],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
