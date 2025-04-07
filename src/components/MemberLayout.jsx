import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMemberData } from "../sanity/memberServices"
import "../styles/member.scss"

export default function MemberLayout(){
    const [member, setMember] = useState()
    const {slugmember} = useParams()

    console.log("Slug som kommer fra URL", slugmember)
    
    const memberPage = async() => {
        const data = await fetchMemberData(slugmember)
        setMember(data) 
    }

    console.log(member)

    useEffect(()=>{
        if(!slugmember) {
            console.log("Slugmember finnes ikke")
            return;
        }

        memberPage()
    },[slugmember])

    return (
        <>
            {member ? (
                <>
            
            <article>
                <img src={member.image?.asset?.url} alt="bilde av gruppemedlem"/>
                <h2 key={member._id}>{member.name}</h2>
                <p>{member.age}</p>
                <p>{member.email}</p>
                <p>{member.description}</p>
            </article>
            
            </>
            ) : (
                <p>Forsøker å finne medlem.</p>
            )}
        </>
    )
}