import {client} from "./client"

export async function fetchMemberData() {
    const data = await client.fetch(`*[_type == 'person'] {_id, name, email, image{asset ->{ _id, url}}, "slug": slug.current, description, age }`)
    console.log(data)
    return data
}

