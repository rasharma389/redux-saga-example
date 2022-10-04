import React from 'react';

function listview(props: any) {
    return (
        <div style={{height: '500px', width: '300px'}}>
             <ul>
            {props.list.map((item: any) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => props.handleClick(item.id)}
                >
                  Scroll Item {item.id} Into View
                </button>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default listview;