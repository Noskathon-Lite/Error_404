import DisplayLink from "./DisplayLink";

function AllLink(){
    return(
        <>
            <DisplayLink 
            img="📚" 
            title="Curated Resources" 
            url="/resources" 
            text="Access quality mental health resources verified by our community." 
        />
        <DisplayLink 
            img="👥" 
            title=" Supportive Community" 
            url="/community" 
            text="Connect with others who understand and share your journey.." 
        />
        <DisplayLink 
            img="🔄" 
            title="Share Experiences" 
            url="/experience" 
            text="Contribute your knowledge and experiences to help others." 
        />
      </>
    )
}

export default AllLink;