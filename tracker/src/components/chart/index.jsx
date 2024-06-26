import { background } from "@chakra-ui/react";
import Chart from "react-apexcharts";

const options = {
  labels: ["Expense", "Income"],
  colors: ["red", "green"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  tooltip: {
    enabled: true,
    theme: "dark",
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000",
    },
  },
};

export default function TransactionChartSummary({
  expense = 100,
  income = 100,
}) {
  return (
    <Chart
      options={options}
      series={[expense, income]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
