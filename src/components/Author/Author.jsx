import './author.css'

export default function Author(props){
    <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author"><img src={require("../../assets/images/profile.jpg")} alt="" />{props.userName}</dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">{props.created}</dd>
    </dl>
}