import { useState,useEffect } from "react";//amen angam erb ga nor teqst menq petq e texavorenq 
//popoxakani mej, dra hamar ogtagorcum enq hukery
import './SingleComments.css'
import {commentDelete} from '../../redux/about/actions'
import { useDispatch } from "react-redux";


function SingleComment({data}){// amen komenti hamar stanum enq teqs ev Id
    // console.log("single comment props >", props);
    const [commentText, setCommentText]=useState("");
    const {text,id} = data;
    const dispatch = useDispatch();

    const handleUpdate = (e)=> {
        e.preventDefault();
        console.log('submit ->>', commentText);
    }

    const handleDelete = (e) => {
        // console.log('click>>' );
        e.preventDefault();
        dispatch(commentDelete(id));
    }

    useEffect(()=>{//amen angam erb poxvi teqsty ayn kavelacvi
        if(text){
            setCommentText(text);
        }
    },[text]);

    const hendleInput = (e)=>{//aysinqn erb menq kgrenq inchvor ban hin komentic heto
        //ayn aftomat poxancvelu e yntaciq state `//popoxakan commentText-y
        setCommentText(e.target.value);
    }

    return (
        <form onSubmit={handleUpdate} className='comment-item'>
            <span onClick={handleDelete} className='comment-item-delete'>X</span>
            <input type="text" value={commentText} onChange={hendleInput}/>
            <input type="submit" hidden/>
        </form>
    )
}
export default SingleComment;

 //erb menq grum enq koment ayn aftomat linum e render ev avelanum 
 //popoxakan commentText-i mej

 //hima uzum enq tarmacnel erb uzum enq mer komenty,
 //usti formi mej bacum enq onSubmit funkcian
