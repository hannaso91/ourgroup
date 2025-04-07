import {client} from "./client"

export async function getAllLogs() {
    const data = await client.fetch(`*[_type == 'logg'] {personName -> {name}, _id, date, task}`)
    return data;
}