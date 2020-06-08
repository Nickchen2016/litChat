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

export const IS_TYPING = "IS_TYPING";
export const NOT_TYPING = "NOT_TYPRING";

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

export interface ShowTypingType {
    type: typeof IS_TYPING;
    isTyping: boolean;
}

export interface doneTypingType {
    type: typeof NOT_TYPING;
    notTyping: boolean;
}

export type ActionTypes = PostAComment | GetAllComments | GetAllUsers | ShowTypingType | doneTypingType;