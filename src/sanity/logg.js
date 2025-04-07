import {client} from "./client"

export async function getAllLogs() {
    const data = await client.fetch(`*[_type == 'logg'] {personName -> {name}, _id, date, task}`)
    return data;
}

export async function getLoggBySlug(slug) {
    const data = await client.fetch(`*[_type == "logg" && personName->slug.current == $slug] {
      _id,
      task,
      date,
      timeused,
      personName->{
        name,
        slug
      }
    }`, { slug });
  
    return data;
}
  
