export interface dataStructure {
    text: string;
    userId: string;
}

export interface userStructure {
    name: string;
    userId: string;
}

// //action type
export const POST_COMMENT = "POST_COMMENT";
export const GET_COMMENTS = "GET_COMMENTS";

export const GET_USERS = "GET_USERS";

//action creator type
export interface PostAComment {
    type: typeof POST_COMMENT;
    comment: dataStructure;
}

export interface GetAllComments {
    type: typeof GET_COMMENTS;
    comments: dataStructure[];
}

export interface GetAllUsers {
    type: typeof GET_USERS;
    users: userStructure[];
}

export type ActionTypes = PostAComment | GetAllComments | GetAllUsers;