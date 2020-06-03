type CommentStructure = {
    text: string;
    who: string;
}

type AddCommentFunc = (addComment: CommentStructure) => void;

type UpdateTextFunc = (event: any) => void;