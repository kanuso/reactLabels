import { LoadingIcon } from "../../share/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";






export const LabelPicker = () => {
const labelsquery = useLabels ();
// using isloading when I have no data in the cache and using fetch to make http request
if (labelsquery.isLoading)
return (<LoadingIcon />);
 

  return (
    <div>
      {
        labelsquery.data?.map(label  => (
          <span 
          key={label.id}
          className="badge rounded-pill m-1 label-picker"
          style={{ border: `1px solid #${label.color}`, color: 'black' }}
      >
          {label.name}
      </span>

        ))
      }
       
        
    </div>
  )
}
