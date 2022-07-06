import { connect } from "react-redux";
import './Likes.css'
import { incrementLikes,decrementLikes } from "../../redux/about/actions";

function Likes(props) {
    console.log('render>',props);
    return (
        <div className="button-controls">
            <button onClick={props.onIncrementLikes}>❤️ {props.likes}</button>
            <button disabled={props.likes === 0} onClick={props.onDecrementLikes}>Dislike</button>
        </div>
    )
}

function mapStateToProps(state){
    const {likes} = state;
    return {
        likes: likes.likes
    }
}

function mapDispatchToProps(dispatch){
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Likes);



//Ayspes stanum enq mer Funkcianery mapDispatchToProps
//aystex miacnum enq mer komponenty redux-in hatuk funkciayov connect
//Ogtagorcum enq hatuk funkcia mapStateToProps, vorpeszi karoxananq uxxarkel mer pahestic redux-i
//mer komponentin
//Nuyny anum enq mer metodneri het ev ogtagorcum mapStateToProps