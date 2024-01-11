import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {

const  [selectedLabels, setselectedLabels] = useState<string[]>([]);



const onLabelChanged = (labelName: string) => {
  selectedLabels.includes(labelName)
    ? setselectedLabels(selectedLabels.filter(label => label !== labelName))
    : setselectedLabels([...selectedLabels, labelName]);
}

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        <IssueList />
      </div>
      <div className="col-4">
        <LabelPicker
        selectedLabels={selectedLabels}
        onchange={(labelName) => onLabelChanged(labelName)}
         />
      </div>
    </div>
  );
};
