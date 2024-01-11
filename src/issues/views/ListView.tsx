import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {

const  [selectedLabel, setselectedLabel] = useState<string[]>([])

  return (
    <div className="row mt-5">
      
      <div className="col-8">
        <IssueList />
      </div>
      
      <div className="col-4">
        <LabelPicker />
      </div>
    </div>
  )
}
