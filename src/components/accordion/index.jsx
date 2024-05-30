/* eslint-disable react/jsx-key */
import { useState } from 'react';
import data from './data';
import "./style.css";

function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [multiple, setMultiple] = useState([]);
  const [buttonColor, setButtonColor] = useState('#614101'); // State for button color

  function handleSelection(itemId) {
    setSelected(itemId === selected ? null : itemId);
  }

  function handleMultiSel(itemId) {
    let copyMult = [...multiple];
    const findIndexOfCurrentId = copyMult.indexOf(itemId);

    findIndexOfCurrentId === -1 ? copyMult.push(itemId) : copyMult.splice(findIndexOfCurrentId, 1);
    setMultiple(copyMult);
  }

  function changeButtonColor() {
    setButtonColor(buttonColor === '#014361' ? '#106142' : '#014361');
  }

  return (
    <div className='wrapper'>
      {/* Enable Multi Selection button with color change */}
      <button onClick={() => { setEnableMultiSel(!enableMultiSel); changeButtonColor(); }} style={{ backgroundColor: buttonColor }}>
        {enableMultiSel ? 'Disable Multi Selection' : 'Enable Multi Selection'}</button>

      <div className='accordian'>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className='item'>
              <div
                onClick={enableMultiSel
                  ? () => handleMultiSel(dataItem.id)
                  : () => handleSelection(dataItem.id)}
                className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSel 
                ? multiple.indexOf(dataItem.id)!== -1 && (
                  <div className="content">{dataItem.answer}</div>
                )
                : selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
                )
              }
            </div>
          ))
        ) : (<div>No data found? </div>)}
      </div>
    </div>
  );
}

export default Accordian;
