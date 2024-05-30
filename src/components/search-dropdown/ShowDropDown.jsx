/* eslint-disable react/prop-types */
function ShowDropDown({ handleClick, data }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handleClick} key={index}>
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}

export default ShowDropDown;
