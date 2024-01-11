import axios from "axios";


export const githubApi = axios.create ({
    baseURL: ' https://api.github.com/repos/facebook/react',
    headers: {}
})



//fetch
// const getlabels =async () =>{
//   const res = await fetch ('https://api.github.com/repos/facebook/react/labels');
//   const data = await res.json();
//   console.log(data);
//   return data;

  
// }


