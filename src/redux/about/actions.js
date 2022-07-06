import {INPUT_TEXT,INCREMENT,DECREMENT, COMENT_CREATE, COMENT_DELETE} from './types';

export function incrementLikes(){
    return {
        type: INCREMENT
    }
}

export function decrementLikes(){
    return {
        type: DECREMENT
    }
}

export function inputText(text){
    return {
        type: INPUT_TEXT,
        text
    }
}

export function commentCreate(text, id){
    return {
        type: COMENT_CREATE,
        data: {text, id}
    }
}

export function commentDelete(id){
    return{
        type: COMENT_DELETE,
        id
    }
}







