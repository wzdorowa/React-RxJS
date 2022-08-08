import './List.css';

function List(props) {
  if (props.list) {
    console.log('list2', props.list);
    return (
      <ul className="list">
        {props.list.map((item) =>
          <li key={item[0]} className="list__item">
            <span className="list__item-address">{item[0]}</span> {item[1]}
          </li>
        )}
      </ul>
    )
  }
}

export default List;