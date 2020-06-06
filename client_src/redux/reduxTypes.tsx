export interface dataStructure {
    text: string;
    userId: string;
}

// //action type
export const POST_COMMENT = "POST_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";

//action creator type
export interface PostAComment {
    type: typeof POST_COMMENT;
    comment: dataStructure;
}

export interface GetAllComments {
    type: typeof GET_COMMENTS;
    comments: dataStructure[];
}

export type ActionTypes = PostAComment | GetAllComments;