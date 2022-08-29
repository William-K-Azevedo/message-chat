import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => {
  axios.get(url).then((res) => res.data);
};

const fetchData = (url) => {
  const { data, error } = useSWR(url, fetcher);
  return { data, error };
};

export default fetchData;
