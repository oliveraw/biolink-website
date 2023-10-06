import { Card, Grid, List, Text, Title } from "@tremor/react"
import Link from "next/link"


const sites = [
    {
        url: "https://www.auajournals.org/doi/10.1097/JU.0000000000003491",
        title: "Early Detection of Prostate Cancer: Prostate Cancer Screening (AUA)",
        body: "Learn more about the PSA score, the primary method for early prostate cancer detection."
    },
    {
        url: "https://www.ncbi.nlm.nih.gov/books/NBK592381/",
        title: "Biomarker Assays for Elevated PSA Risk Analysis (NIH)",
        body: "Learn more about the use of biomarkers after a second elevated psa score."
    },
    {
        url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/prostate-cancer/active-surveillance-for-prostate-cancer",
        title: "Active Surveillance for Prostate Cancer (JHU)",
        body: "Useful information for patients who are meeting with a urologist or have been diagnosed with prostate cancer."
    },
]

export default function EducationalArticles() {
    return (
        <>
            <Card>
                <Title>Articles</Title>
                <Grid className="mt-4 gap-4">
                    {sites.map((item, idx) => (
                        <Link href={item.url} key={idx}>
                            <Card className="hover:shadow-md">
                                <Title>{item.title}</Title>
                                <Text>{item.body}</Text>
                            </Card>
                        </Link>
                    ))}
                </Grid>
            </Card>
        </>
    )
}