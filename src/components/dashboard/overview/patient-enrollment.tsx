import {
    AreaChart,
    Card,
    Metric,
    TabList,
    Tab,
    TabGroup,
    TabPanels,
    TabPanel,
} from "@tremor/react";

const data = [
    {
        Month: "Jan 23",
        Patients: 2089,
        "Patient Followups": 1012,
        "Detection Rate": 0.12,
    },
    //...
    {
        Month: "Feb 23",
        Patients: 4509,
        "Patient Followups": 1232,
        "Detection Rate": 0.13,
    },
    {
        Month: "Mar 23",
        Patients: 3089,
        "Patient Followups": 1232,
        "Detection Rate": 0.12,
    },
    {
        Month: "Apr 23",
        Patients: 14294,
        "Patient Followups": 1232,
        "Detection Rate": 0.14,
    },
];

const numberFormatter = (value: number) => Intl.NumberFormat("us").format(value).toString();
const percentageFormatter = (value: number) =>
    `${Intl.NumberFormat("us")
        .format(value * 100)
        .toString()}%`;
function sumArray(array: any[], metric: string) {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue[metric], 0);
}

export default function PatientEnrollment() {
    return (
        <Card className="p-0">
            <TabGroup>
                <TabList>
                    <Tab className="p-4 sm:p-6 text-left">
                        <p className="text-sm sm:text-base">Patients</p>
                        <Metric className="mt-2 text-inherit">
                            {numberFormatter(sumArray(data, "Patients"))}
                        </Metric>
                    </Tab>
                    <Tab className="p-4 sm:p-6 text-left">
                        <p className="text-sm sm:text-base">Patient Followups</p>
                        <Metric className="mt-2 text-inherit">
                            {numberFormatter(sumArray(data, "Patient Followups"))}
                        </Metric>
                    </Tab>
                    <Tab className="p-4 sm:p-6 text-left">
                        <p className="text-sm sm:text-base">Detection Rate</p>
                        <Metric className="mt-2 text-inherit">
                            {percentageFormatter(sumArray(data, "Detection Rate") / data.length)}
                        </Metric>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel className="p-6">
                        <AreaChart
                            className="h-80 mt-10"
                            data={data}
                            index="Month"
                            categories={["Patients"]}
                            colors={["blue"]}
                            valueFormatter={numberFormatter}
                            showLegend={false}
                            yAxisWidth={50}
                        />
                    </TabPanel>
                    <TabPanel className="p-6">
                        <AreaChart
                            className="h-80 mt-10"
                            data={data}
                            index="Month"
                            categories={["Patient Followups"]}
                            colors={["blue"]}
                            valueFormatter={numberFormatter}
                            showLegend={false}
                            yAxisWidth={50}
                        />
                    </TabPanel>
                    <TabPanel className="p-6">
                        <AreaChart
                            className="h-80 mt-10"
                            data={data}
                            index="Month"
                            categories={["Detection Rate"]}
                            colors={["blue"]}
                            valueFormatter={percentageFormatter}
                            showLegend={false}
                            yAxisWidth={40}
                        />
                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </Card>
    );
}