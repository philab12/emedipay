import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "../api/axios";

const fetchUserByEmail = () => {
  return axios("/users/email/philipgyamfi87@gmail.com");
};

// const addSuperHero = (hero) => {
//    return axios.post('http://localhost:4000/superheroes', hero)
// }

export const useGetData = (onSuccess:any, onError:any) => {
return  useQuery(
    "get-data",
    fetchUserByEmail,
    {
      onSuccess: onSuccess,
      onError: onError,
    //   select: (data) => {
    //     const superheroNames = data.data.map((hero) => hero.name);
    //     return superheroNames;
    //   },
    }
  );
};