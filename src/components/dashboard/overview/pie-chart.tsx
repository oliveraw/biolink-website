import { Card, Title, DonutChart, Legend } from "@tremor/react";
import React from "react";

const stages = [
  {
    name: "Created",
    sales: 9800,
  },
  {
    name: "PSA 1",
    sales: 4567,
  },
  {
    name: "PSA 2",
    sales: 3908,
  },
  {
    name: "Biomarker",
    sales: 2400,
  },
  {
    name: "Urologist",
    sales: 1908,
  },
  {
    name: "Repeat PSA",
    sales: 1398,
  },
];

export const PieChart = () => {
  const [value, setValue] = React.useState(null);
  return (
    <>
      <Card className="mx-auto">
        <Title>Patient stage breakdown</Title>
        <Legend 
            categories={stages.map((stage) => stage.name)} 
            colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]} 
            className="mt-6"
        />
        <DonutChart
          className="mt-6"
          data={stages}
          category="sales"
          index="name"
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          onValueChange={(v) => setValue(v)}
        />
      </Card>
      {/* <pre>{JSON.stringify(value)}</pre> */}
    </>
  );
};