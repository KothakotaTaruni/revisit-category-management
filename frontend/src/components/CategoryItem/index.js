import "./index.css"

const CategoryItem = ({details}) => {
    const {name, image_url, item_count} = details

    return(
        <li className="list-item">
            <img src={image_url} alt={name} className="image"/>
            <h1 className="heading">{name}</h1>
            <p className="item-text">{`${item_count} items`}</p>
        </li>
    )
}

export default CategoryItem