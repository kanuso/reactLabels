import { FC } from "react";
import { LoadingIcon } from "../../share/components/LoadingIcon";
import { useLabels } from "../hooks/useLabels";



interface Props {
  selectedLabels: string[];
  onchange: (labelName: string)=> void;

}


export const LabelPicker: FC<Props> = ({selectedLabels, onchange}) => {
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
          className={`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active': ''} `}
          style={{ border: `1px solid #${label.color}`, color: 'black' }}
          onClick={() => onchange(label.name)}
      >
          {label.name}
      </span>

        ))
      }
      
        
    </div>
  )
}
