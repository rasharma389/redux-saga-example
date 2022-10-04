import React from 'react';
import ListView from './listview';
import ListViewComponent from './listviewComponent';

type List = {
    id: number;
    fname: string;
}
const list: Array<List> = Array.from({ length: 30 }).map((item, index)=> { return {'id': index, 'fname': `fname ${index}`}});

function scrollExample(props: any) {
    const refs = list.reduce((acc, value: List) => {
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
        <div style={{display: 'flex', justifyContent: 'center', overflow: 'auto'}}>
        <div  style={{ overflow: 'auto' }}>
            <ListView list={list} handleClick={handleClick}/>
        </div>
        <div style={{ overflow: 'auto' }}>
            <ListViewComponent list={list} refs={refs}/>
        </div>
        </div>
        
    );
}

export default scrollExample;