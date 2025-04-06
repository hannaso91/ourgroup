import {client} from "./client"

export async function fetchMemberData(slug) {
    const data = await client.fetch(`*[_type == 'person' && slug.current == $slug][0] {_id, name, email, image{asset ->{ _id, url}}, "slug": slug.current, description, age }`, {slug})
    console.log(data)
    return data
}


export async function fetchMembersByCard() {
    const data = await client.fetch(`*[_type == 'person'] {_id, name, email, image{asset ->{ _id, url}}, "slug": slug.current }`)
    console.log(data)
    return data;
}

