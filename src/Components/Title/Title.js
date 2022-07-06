import { useDispatch, useSelector } from "react-redux";
//useDispatch ayn ogtagorcvelu e mapDispatchToProps funkciayi poxaren
//useSelector ogtagorcelu enq mapStateToProps
import { inputText } from "../../redux/about/actions";
import './Title.css'

function Title(props) {
    console.log("props title >", props);
    const text = useSelector(state => {
        const { text } = state;
        return text.text;
    });
    const dispatch = useDispatch();

    const handleChange = (e) =>{
        dispatch(inputText(e.target.value))//mer teqsty reduserin poxancelu hamar
    }

    return (
        <div className="card-title">
            <div className="card-title-top">
                <input className="inputtitle" type="text" onChange={handleChange}/>
            </div>
            <p>{text}</p>
        </div>
    )
}
export default Title;

//ogtagorcelov erku hukery integrecinq pahesti Reduxi
//hukery ogtagorcelov arden chenq ogtagorcumfunkcia conect-y
