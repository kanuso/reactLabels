import { useQuery } from "@tanstack/react-query"
import { githubApi } from "../../api/githubapi";
import { Label } from "../interfaces/label";
import { useLabels } from "../hooks/useLabels";


//fetch
// const getlabels =async () =>{
//   const res = await fetch ('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   console.log(data);
//   return data;

  
// }

//axios



export const LabelPicker = () => {
const labelsquery = useLabels ();
 

  return (
    <div>
        <span 
            className="badge rounded-pill m-1 label-picker"
            style={{ border: `1px solid #ffccd3`, color: '#ffccd3' }}
        >
            Primary
        </span>
        
    </div>
  )
}
