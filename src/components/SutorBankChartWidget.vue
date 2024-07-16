<template>
	<v-card width="100%" v-bind="cardProps">
		<apexchart :options="chartOptions" :series="series" />
	</v-card>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
  chartProps: {
    type: Object,
    required: true,
  },
  series: {
    type: Array,
    default: () => []
  },
  bgColor: {
    type: String,
    default: '#fff'
  },
  elevation: {
    type: Number,
    default: 0
  }
});

const chartOptions = computed(() => ({
  chart: {
    id: props.chartProps.chartId,
    type: props.chartProps.chartType,
    toolbar: {
      show: props.chartProps.toolbarShow,
    },
  },
  fill: {
    colors: props.chartProps.fillColors,
    type: props.chartProps.fillType,
    gradient: {
      shade: props.chartProps.gradientShade,
      type: props.chartProps.gradientType,
      shadeIntensity: props.chartProps.gradientShadeIntensity,
      opacityFrom: props.chartProps.gradientOpacityFrom,
      opacityTo: props.chartProps.gradientOpacityTo,
    },
  },
  grid: {
    show: props.chartProps.gridShow,
    padding: props.chartProps.gridPadding,
  },
  xaxis: {
    labels: {
      show: props.chartProps.xaxisLabelsShow,
    },
    categories: props.chartProps.xaxisCategories,
    axisBorder: {
      show: props.chartProps.xaxisAxisBorderShow,
    },
    axisTicks: {
      show: props.chartProps.xaxisAxisTicksShow,
    },
  },
  dataLabels: {
    enabled: props.chartProps.dataLabelsEnabled,
  },
  stroke: {
    curve: props.chartProps.strokeCurve,
    width: props.chartProps.strokeWidth,
  },
  title: {
    text: props.chartProps.titleText,
    align: props.chartProps.titleAlign,
    margin: props.chartProps.titleMargin,
    offsetX: props.chartProps.titleOffsetX,
    offsetY: props.chartProps.titleOffsetY,
    floating: props.chartProps.titleFloating,
    style: props.chartProps.titleStyle,
  },
  subtitle: {
    text: props.chartProps.subtitleText,
    align: props.chartProps.subtitleAlign,
    margin: props.chartProps.subtitleMargin,
    offsetX: props.chartProps.subtitleOffsetX,
    offsetY: props.chartProps.subtitleOffsetY,
    floating: props.chartProps.subtitleFloating,
    style: props.chartProps.subtitleStyle,
  },
  yaxis: {
    labels: {
      show: props.chartProps.yaxisLabelsShow,
    },
  },
  legend: {
    show: props.chartProps.legendShow,
  },
  responsive: props.chartProps.responsiveOptions,
}));

const cardProps = computed(() => {
	return {
		...props
	};
});
</script>
