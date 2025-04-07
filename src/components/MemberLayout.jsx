import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMemberData } from "../sanity/memberServices"
import { getLoggBySlug } from "../sanity/logg"

export default function MemberLayout(){
    const [member, setMember] = useState()
    const [personLogg, setPersonLogg] = useState([])
    const {slugmember} = useParams()


    console.log("Slug som kommer fra URL", slugmember)
    
    const memberPage = async() => {
        const data = await fetchMemberData(slugmember)
        setMember(data) 
    }

    console.log(member)

    const getPersonLogg = async() => {
        memberPage(slugmember)
        const data = await getLoggBySlug(slugmember)
        setPersonLogg(data)
      }

    useEffect(()=>{
        if(!slugmember) {
            console.log("Slugmember finnes ikke")
            return;
        }
        memberPage()
        getPersonLogg()
    },[slugmember])

    return (
        <>
            {member ? (
                <>
            <h2 key={member._id}>{member.name}</h2>
            <article>
                <img src={member.image?.asset?.url} alt="bilde av gruppemedlem"/>
                <p>{member.age}</p>
                <p>{member.email}</p>
                <p>{member.description}</p>
            </article>
            </>
            ) : (
                <p>Forsøker å finne medlem.</p>
            )}

            {personLogg.map(log => (
                <article key={log._id}>
                    <p>Utført av: {log.personName.name}</p>
                    <p>{new Date (log.date).toDateString()}</p>
                    <p>{log.timeused}</p>
                </article>

            ))}
        </>
       
    )
}