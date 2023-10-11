<template>
  <div>
    <div>
      <button @click="switchGraph('bar')">Show Bar Chart</button>
      <button @click="switchGraph('pie')">Show Pie Chart</button>
      <button @click="switchGraph('line')">Show Line Chart</button>
    </div>
    
    <div v-if="currentGraphType === 'bar'">
       <h3>Header</h3>
        <draggable
        class="list-group"
        :list="list1"
        group="people"
        @change="log"
        itemKey="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">{{ element.name }} </div>
        </template>
      </draggable>
      <h3>X</h3>
      <draggable
        class="list-group"
        :list="list2"
        group="people"
        @change="updateBarChart"
        itemKey="name"
      >
        <template #item="{ element}">
          <div class="list-group-item">{{ element.name }} </div>
        </template>
      </draggable>

      <h3>Y</h3>
      <draggable
        class="list-group"
        :list="list3"
        group="people"
        @change="updateBarChart"
        itemKey="name"
      >
        <template #item="{ element}">
          <div class="list-group-item">{{ element.name }} </div>
        </template>
      </draggable>

      <apexchart width="1300" height="600" type="bar" :options="options.barChart" :series="series.barChart"></apexchart>
    </div>
    
    <div v-else-if="currentGraphType === 'pie'">
      <apexchart type="pie" width="600" :options="PiechartOptions" :series="seriepie"></apexchart>
    </div>
    
    <div v-else>
      <apexchart type="line" width="1300" height="600" :options="lineChartOptions" :series="series.barChart"></apexchart>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import axios from "axios"; // Import Axio
import draggable from 'vuedraggable'
export default {
  name: "two-lists",
  display: "Two Lists",
  components: {
    apexchart: VueApexCharts,
    draggable,
  },
  data() {
    return {
      list1: [],
      list2: [],
      list3: [],
      selectedX: [],
      drag: false,
      currentGraphType: 'bar',
      options: {
        barChart: {
          chart: {
            id: 'vuechart-bar-example',
            stacked: true,
            animations: {
              enabled: true,
              easing: 'easeinout',
              speed: 800,
              animateGradually: {
                enabled: true,
                delay: 150,
              },
              dynamicAnimation: {
                enabled: true,
                speed: 350,
              },
            },
          },
          xaxis: {
            categories: [],
          },
        },
        donutChart: {
          chart: {
            id: 'vuechart-donut-example',
          },
          labels: [],
        },
      },
      PiechartOptions: {
            chart: {
              width: 600,
              type: 'pie',
            },
            labels: [],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
            },
      lineChartOptions: {
      chart: {
        id: 'vuechart-line-example',
      },
      xaxis: {
        categories: [],
      },
    },
      series: {
        barChart: [],
      },
      seriepie: [],
      seriesLineChart: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    switchGraph(graphType) {
      this.currentGraphType = graphType;
    },
    async loadData() {
      try {
        // Make an API request to fetch the data prepared in step 2 using Axios
        const response = await axios.get("http://127.0.0.1:5000/data-forchart"); // Replace with your API endpoint
        this.chartData = response.data; // Assuming response.data is already an array of objects

        // Create the series based on 'TeamExp' data, limited to the first 40 elements
        const teamExpSeriesData = this.chartData.slice(0, 10).map((item) => item.Effort);

        const managerExpSeriesData = this.chartData.slice(0, 10).map((item) => item.Transactions);

        // Extract 'Project' column values to set as labels for the pie chart
        const pieChartLabels = this.chartData.slice(0, 10).map((item) => `Project ${item.Project}`);

        // Extract some data for the pie chart (you can customize this based on your data)
        const pieChartData = this.chartData.slice(0, 10).map((item) => item.Effort);

          if (Array.isArray(this.chartData) && this.chartData.length > 0) {
          const headers = Object.keys(this.chartData[0]);
          this.list1 = headers.map((header) => ({
            name: header,
          }));
          }

        this.seriesLineChart = [
          {
            name: 'Team Experience',
            data: teamExpSeriesData,
          },
          {
            name: 'Manager Experience',
            data: managerExpSeriesData,
          },
        ];

       for (let index = 0; index < pieChartData.length; index++) {
          this.seriepie.push(pieChartData[index]);
       }

        for (let index = 0; index < pieChartLabels.length; index++) {
          this.PiechartOptions.labels.push(pieChartLabels[index]);
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    updateBarChart() {
  // Extract selected X and Y values from list2 and list3
  const selectedX = this.list2.map((item) => item.name);
  const selectedY = this.list3.map((item) => item.name);

  if (this.options.barChart.xaxis.categories.length > 0) {
    this.options.barChart.xaxis.categories.splice(0);
  }

  // Create an array to store series data
  const seriesData = [];

  // Iterate through each selected Y value
  for (const yValue of selectedY) {
    // Create the series for the bar chart based on the current Y value
    const series = {
      name: yValue,
      data: this.chartData.slice(0, 10).map((item) => item[yValue]),
    };

    seriesData.push(series);
  }
   const cata = this.chartData.slice(0, 10).map((item) => item[selectedX]);
  // Create the X-axis categories based on selected X and each item in the chartData
  for (let index = 0; index < 10; index++) {
    this.options.barChart.xaxis.categories.push(`${selectedX}${cata[index]}`);
  }

  // Update the series data for the bar chart
  this.series.barChart = seriesData;

  console.log(this.options.barChart.xaxis.categories);
},

  },
};
</script>
