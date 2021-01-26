<script>
  import FusionCharts from 'fusioncharts';
  import Charts from 'fusioncharts/fusioncharts.charts';
  import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
  import SvelteFC, { fcRoot } from 'svelte-fusioncharts';

  fcRoot(FusionCharts, Charts, FusionTheme);

  let dataSource = {
      "chart": {
        "showValues": "1",
        "showPercentInTooltip": "0",
        "numberPrefix": "R$",
        "enableMultiSlicing": "1",
        "showYAxisValues": '0',
        "labelFont": "Kufam",
        "labelFontSize": "10px",
        "labelFontBold": "1",
        "labelFontColor": "#DCDCDC",
        "palettecolors": "#EDF1F9",
        "showPlotBorder": "1",
        "drawFullAreaBorder": "0",
        "plotBorderThickness": "2",
        "showPlotBorder": "1",
        "inheritPlotBorderColor": "1",
        "plotBorderColor": "#4A6EC9",
        "drawAnchors": "1",
        "anchorRadius": "4",
        "anchorBgColor": "#4A6EC9",
        "theme": "fusion"
      },
      "data": [{
        "label": "Jan",
        "value": "3200"
      }, {
        "label": "Fev",
        "value": "5400"
      }, {
        "label": "Mar",
        "value": "6000"
      }, {
        "label": "Apr",
        "value": "3400"
      }, {
        "label": "May",
        "value": "1200"
      }, {
        "label": "Jun",
        "value": "2000"
      }, {
        "label": "Jul",
        "value": "2900"
      }, {
        "label": "Aug",
        "value": "3400"
      }, {
        "label": "Sep",
        "value": "5000"
      }, {
        "label": "Oct",
        "value": "5000"
      }, {
        "label": "Nov",
        "value": "4000"
      }, {
        "label": "Dec",
        "value": "6000"
      }]
    },
    chartConfig = {
      type: 'area2d',
      width: '794',
      height: '350',
      renderAt: 'chart-container',
      dataSource
    };
</script>

<style>
  .overview{
    margin-top: 40px;
  }

  .filters{
    display: grid;
    grid-template-columns: 4fr 3fr;
  }

  .filterDate{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    font-weight: 600;
    font-size: 12px;
    align-self: center;
    text-align: center;
    cursor: pointer;
    gap: 10px;
  }

  .filterDate p:hover{
    background-color: var(--branco-medio);
    border-radius: 20px;
    padding: 5px 13px 5px 13px;
    margin: 7px 0px 7px 0px;
  }

  .select{
    color: var(--azul-escuro);
    cursor: pointer;
  }

  .down{
    font-size: 8px;
    margin-top: 4px;
    margin-left: 3px;
    position: absolute;
  }

  .selectedDate {
    background-color: var(--branco-escuro);
    border-radius: 20px;
    padding: 5px 13px 5px 13px;
    margin: 7px 0px 7px 0px
  }

  .values {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 10px;
  }

  .title {
    font-size: 10px;
    color: var(--cinza-claro)
  }

  .value {
    margin-top: 3px;
    font-size: 20px;
    font-family: 'Quicksand', sans-serif;
    font-weight: 600;
  }

  .blue {
    color: var(--azul-medio)
  }

  .green {
    color: var(--verde)
  }

  .red {
    color: var(--vermelho)
  }

  .chart-container {
    margin-top: 30px;
  }
  
  .hiddenTrial {
    background-color: var(--branco-claro);
    width: 86px;
    height: 9px;
    position: absolute;
    margin-top: -15px;
    margin-left: 6px;
  }
</style>

<div class="overview">
  <div class="filters">
    <div class="filterCard">
      <h4>Overview of <span class="select">all cards <span class="down">▼</span></span></h4>
    </div>
    <div class="filterDate">
      <p>Day</p>
      <p>Week</p>
      <p class="selectedDate">Month</p>
      <p>Year</p>
    </div>
  </div>
  <div class="values">
    <div>
      <div class="title">Current balance</div>
      <div class="value blue">R$ 124,720.60</div>
    </div>
    <div>
      <div class="title">Income</div>
      <div class="value green">R$ 279,433.00</div>
    </div>
    <div>
      <div class="title">Outcome</div>
      <div class="value red">R$ 154,712.40</div>
    </div>
  </div>
  <div id="chart-container" class="chart-container" >
    <SvelteFC {...chartConfig} />
    <div class="hiddenTrial"></div>
  </div>
</div>