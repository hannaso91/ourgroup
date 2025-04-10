import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { fetchMemberData } from "../sanity/memberServices"
import "../styles/member.scss"
import "../styles/logg2.scss"
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
            <section className="bildetekst">
            <article>
                <img src={member.image?.asset?.url} alt="bilde av gruppemedlem"/>
                <h2 key={member._id}>{member.name}</h2>
                <p><b>Alder:</b>{member.age}</p>
                <p><b>Mail:</b>{member.email}</p>
            </article>
            <article className="mengdetekst">
            <p>{member.description}</p>
            </article>
            </section>
            
            </>
        
            ) : (
                <p>Forsøker å finne medlem.</p>
            )}
            <div className="loggsection" >
            {personLogg.map(log => (
                <article key={log._id}>
                    <p>Utført av: {log.personName.name}</p>
                    <p>{log.task}</p>
                    <p>{new Date(log.date).toLocaleDateString("no-NO", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric"
                        })}
                    </p>
                    <p>{log.timeused}</p>
                </article>
            ))}
            </div>
        </>
       
    )
}