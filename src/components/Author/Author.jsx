import './author.css'

export default function Author(){
    <dl className="author-wrap">
        <dt className="a11y-hidden">Author</dt>
        <dd className="author"><img src={require("../../assets/images/profile.jpg")} alt="" /> Chilli</dd>
        <dt className="a11y-hidden">Created</dt>
        <dd className="created">2022.05.25</dd>
    </dl>
}