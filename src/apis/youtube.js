import axios from "axios";
import { key } from "../config/youtube";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key
  }
});
