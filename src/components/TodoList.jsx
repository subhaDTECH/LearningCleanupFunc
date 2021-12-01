import React,{useState} from 'react';

const bioData=[
    {
    id:1,
    name:'subha',
    roll:11
    },
    {
        id:2,
        name:"Ambuj",
        roll:23
    },
    {
        id:3,
        name:"avimanu",
        roll:26
    }

]

const TodoList = () => {
    const [data,setData]=useState(bioData);
    const ButtonEvent=(id)=>{
      const NewData=  data.filter((CurEle)=>{
            return CurEle.id !=id;
        })
        setData(NewData);

    }
    
    
    return (
        <>
        <div className="main_div">
        <div className="center_div">
        
       
            {

                data.map((curEle)=>{
                    return (
                       
                             <>
                            
                        <h1 key={curEle.id}> I am {curEle.name} and my  roll {curEle.roll}
                        
                        <button  onClick={()=>ButtonEvent(curEle.id)} className="btn btn-danger">Remove</button>
                        
                        </h1>
                        
                        </>
                    )
                })
            }

        </div>

        </div>

        </>
    )
}

export default TodoList
