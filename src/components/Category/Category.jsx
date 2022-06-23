import './category.css'

export default function Category(props){
    <dl className="category">
        <dt className="a11y-hidden">Category</dt>
        <dd>{props.category[0]}</dd>
        <dd>{props.category[1]}</dd>
    </dl>
}