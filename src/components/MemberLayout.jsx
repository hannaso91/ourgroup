import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMemberData } from "../sanity/memberServices"

export default function MemberLayout(){
    const [member, setMember] = useState(null)
    const {slugmember} = useParams()
    
    const memberPage = async(slugmember) => {
        const data = await fetchMemberData(slugmember) 
        setMember(data) 
    }

    console.log(member)

    useEffect(()=>{
        memberPage()
    },[slugmember])

    return (
        <>
            {member?.map((person)=>(
                <>
                <h2 key={person._id}>{person.name}</h2>
                <article>
                    <img src={person.image.asset.url} alt="bilde av gruppemedlem"/>
                    <p>{person.age}</p>
                    <p>{person.email}</p>
                    <p>{person.description}</p>
                </article>
                </>
            ))}
            
        </>
    )
}