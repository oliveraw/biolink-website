import { Status } from "@/API"

const statuses = {
    [Status.NOT_APPLICABLE]: "N/A",
    [Status.PENDING]: "Pending",
    [Status.SCHEDULED]: "Scheduled",
    [Status.COMPLETED]: "Completed",
}

export default statuses
