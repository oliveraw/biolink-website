import { Card, Metric, Text, Divider, AreaChart } from "@tremor/react";

const data = [
  {
    Month: "Jan 23",
    "Predicted Savings": 2890,
  },
  {
    Month: "Feb 23",
    "Predicted Savings": 1890,
  },
  {
    Month: "Mar 23",
    "Predicted Savings": 3890,
  },
  {
    Month: "Apr 23",
    "Predicted Savings": 4120,
  },
];

const valueFormatter = (number: number) => `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function SavingsGraph() {
  return (
    <Card className="mx-auto h-full">
      <Text>Predicted Savings</Text>
      <Metric>$ 12,790</Metric>
      <AreaChart
        className="mt-8 h-44"
        data={data}
        categories={["Predicted Savings"]}
        index="Month"
        colors={["indigo"]}
        valueFormatter={valueFormatter}
        showYAxis={false}
        showLegend={false}
      />
    </Card>
  );
}