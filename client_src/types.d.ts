type CommentStructure = {
    text: string;
    userId: string;
}

type AddCommentFunc = (addComment: CommentStructure) => void;

type UpdateTextFunc = (event: any) => void;

type PickUser = () => void;

interface PickMyUser {
    pickUser: ()=> void;
}

interface AppProps {
    comments: dataStructure[],
    fetchComments: () => void,
    addAComment: (data: dataStructure)=> void,
    fetchUsers: () => void
}