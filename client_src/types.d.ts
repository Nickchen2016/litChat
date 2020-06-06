type CommentStructure = {
    text: string;
    userId: string;
}

type AddCommentFunc = (addComment: CommentStructure) => void;

type UpdateTextFunc = (event: any) => void;

type PickUser = (info: userStructure) => void;

interface PickMyUser {
    pickUser: (info)=> void;
    users: userStructure[];
}

interface AppProps {
    comments: dataStructure[];
    fetchComments: () => void;
    addAComment: (data: dataStructure)=> void;
    fetchUsers: () => void;
}