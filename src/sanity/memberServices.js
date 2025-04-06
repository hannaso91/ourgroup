import { client } from "./client";

export async function fetchMembersByCard() {
    const data = await client.fetch(`*[_type == 'person'] {_id, name, email, image{asset ->{ _id, url}}, "slug": slug.current }`)
    console.log(data)
    return data;
}

export async function fetchMemberBySLug() {
    const data = await client.fetch(`*[_type == "person"]{_id, slug, name, description, email, image, age}`)
    return data;
}