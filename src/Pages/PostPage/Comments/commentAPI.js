import { get } from "../../../services/http";


export function loadComments(postId) {
    return get(`/comments?post-id=${postId}`)
}