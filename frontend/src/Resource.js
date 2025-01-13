import { useEffect, useState } from "react";
import { fetchResources } from "./api/resources";
const Resource = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchResources().then(() => {});
  }, []);

  const fetchReasearchData = (category) => {
    // resource category openAPI
  };
  return (
    <>
      <h1>this is resource page</h1>
      <div>
        {/* this side for searching categories like depress, disease */}
        {/* show cat list  */}
        <ul>
          <li onClick={() => fetchReasearchData("depression")}>Depression</li>
          <li>Mad</li>
          <li>Mad</li>
        </ul>
      </div>
      <div>
        {/* for suggestion,research notes,infromations reference chatgpt  make separate components pass selected or search terms*/}

        {/* <Feedback /> */}

        {/* function Feedback(props){
           do api call to third party api service here for terms
        
        } */}
      </div>
    </>
  );
};

export default Resource;
