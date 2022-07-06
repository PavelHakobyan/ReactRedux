import { useState } from 'react';//vorpeszi stananq default vichak
import SingleComment from '../../Components/SingleComments/SingleComments'; //import aneluc heto mer komponenty texapoxum enq app.js
import { commentCreate } from '../../redux/about/actions'
import uniqid from 'uniqid';//yurahatuk id e talis
// import { comments } from '../../redux/about/reducer;
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';

function Comments(props){
    const [textComment, setTextComment]=useState("")
    // console.log("comment props >", props);
    const comments = useSelector(state => {
        // console.log('redux state >', state);
        const {comments} = state;
        return comments.comments//aystexov arden kpahpani bolor komentnery
    });
    console.log("coments >" , comments);

    const dispatch = useDispatch();

    const handleInput = (e) => {
        // console.log("inp >>>", e.target.value);
        setTextComment(e.target.value);
    }

    const handelSubmit = (e) => {//submit jamanak menq form-i mej enq talis ira defoltayin vichaky

        e.preventDefault();//dra hamar e
        // console.log("textComment>>>", textComment);//uxarkum enq textCommenti vichaky
        const id = uniqid();
        dispatch(commentCreate(textComment, id));
        setTextComment(e.target.value="");
    }


    return (
        <div className='card-comments'>
            <form onSubmit={handelSubmit} className="comment-item-create">
                <input type="text" className='card-input' value={textComment} onChange={handleInput}/>
                <input type="submit" hidden/>
            </form>
            {!!comments.length && comments.map(res =>{
                return <SingleComment key={res.id} data={res}/>
            })}
        </div>
    )
}
export default Comments;

//valuen talis enq skzbnaan arjeq
//hendlsubmitum dispatch enq anum mer eqsheny ev poxancum tvyalnery, dranq henc qomentnery ev id
//inputneric heto avelacnum enq mer komponentnery, vorpeszi tesnenq ekranin
// aynuhetev gnum enq SingleComment render enq anum amen mi arandzin komenty 