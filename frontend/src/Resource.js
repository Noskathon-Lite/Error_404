import { useEffect, useState } from "react";
import { fetchResources } from "./api/resources";
import Layout from "./Layout";
const Resource = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchResources().then(() => {});
  }, []);

  const fetchReasearchData = (category) => {
    // resource category openAPI
  };
  return (
    <Layout>
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
    </Layout>
  );
};

export default Resource;
