import {client} from "./client"

export async function getAllLogs() {
    const data = await client.fetch(`*[_type == 'logg'] {personName -> {name}, _id, date, task}`)
    return data;
}

export async function getLoggBySlug(slug) {
    const data = await client.fetch(`*[_type == "logg" && personName->slug.current == $slug] 
      | order(date asc) {
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
  // Ønsket å få ut fra Sanity etter rekkefølge ting var gjort, la derfor inn order(date asc) etter å ha titta igjennom denne siden https://www.sanity.io/docs/query-cheat-sheet
  
