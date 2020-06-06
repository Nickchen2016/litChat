type CommentStructure = {
    text: string;
    userId: string;
}

type AddCommentFunc = (addComment: CommentStructure) => void;

type UpdateTextFunc = (event: any) => void;