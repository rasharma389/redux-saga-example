import React from 'react';

function listviewComponent(props: any) {
    return (
        <div style={{height: '500px', width: '300px'}}>
            <ul>
            {props.list.map((item: any) => (
              <li
                key={item.id}
                ref={props.refs[item.id]}
                style={{ height: '250px', border: '1px solid black' }}
              >
                <div>{item.id}</div>
                <div>{item.fname}</div>
              </li>
            ))}
          </ul>
        </div>
    );
}

export default listviewComponent;