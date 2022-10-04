import React from 'react';

interface Props {
    data?: Array<string>
}
type List = {
    id: number;
    fname: string;
}
const list: Array<List> = Array.from({ length: 30 }).map((item, index)=> { return {'id': index, 'fname': `fname ${index}`}});

function comp1(props: Props) {
    const refs = list.reduce((acc, value: List) => {
        // console.log(value)
        acc[value.id] = React.createRef();
        return acc;
      }, {} as any);
      
      console.log(refs);
      const handleClick = (id: number) => {
        console.log(id)
        refs[id].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
      }
       
    
      return (
        <div>
          <ul>
            {list.map(item => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleClick(item.id)}
                >
                  Scroll Item {item.id} Into View
                </button>
              </li>
            ))}
          </ul>
    
          <ul>
            {list.map(item => (
              <li
                key={item.id}
                ref={refs[item.id]}
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

export default comp1;