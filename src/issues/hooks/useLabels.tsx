import { useQuery } from "@tanstack/react-query";
import { githubApi } from "../../api/githubapi";
import { Label } from "../interfaces/label";

const getlabels = async ():Promise<Label[]> =>{
    const {data}= await githubApi.get<Label[]>('labels')
     console.log(data);  
     return data;
 }
 


export const useLabels = () => {

    const labelsquery = useQuery (
        {queryKey:['labels'],
        queryFn:getlabels}   
      );
      

    return {
        labelsquery
    }
}