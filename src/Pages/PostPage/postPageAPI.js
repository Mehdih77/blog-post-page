import { get } from "../../services/http";

export function loadPost(id){
 return get(`/posts/${id}`)
}