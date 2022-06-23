import './author.css'

export default function Author(props){
    console.log(props);
    return (
    <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author"><img src={require("../../assets/images/profile.jpg")} alt="" />{props.author}</dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">{props.created}</dd>
    </dl>
    )
}