import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubapi";
import { Label } from "../interfaces/label";
import { sleep } from "../../helpers/sleep";

const getlabels = async ():Promise<Label[]> =>{
    await sleep(2);
    const {data}= await githubApi.get<Label[]>('labels')
     console.log(data);  
     return data;
 }
 


export const useLabels = () => {

    const labelsquery = useQuery (
        {queryKey:['labels'],
        queryFn:getlabels,
        // stale time is for show the time of loading  data so data is loading for one hour
        staleTime: 1000 * 60 * 60,
    }
        
        
         
      );
      

    return  labelsquery
    
}