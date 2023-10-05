import { Card, Grid, List, Text, Title } from "@tremor/react"
import Link from "next/link"


const sites = [
    {
        url: "https://google.com",
        title: "Prostate",
        body: "info"
    },
    {
        url: "https://google.com",
        title: "Prostate",
        body: "info"
    },
    {
        url: "https://google.com",
        title: "Prostate",
        body: "info"
    },
]

export default function EducationalArticles() {
    return (
        <>
            <Grid className="mt-4 gap-4">
                {sites.map((item) => (
                    <Link href={item.url}>
                        <Card className="hover:shadow-md">
                            <Title>{item.title}</Title>
                            <Text>{item.body}</Text>
                        </Card>
                    </Link>
                ))}
            </Grid>
        </>
    )
}