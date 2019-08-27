import React,{Component} from 'react';
 import './AppTodo.css';

export default class AppTodo extends Component{
   constructor(){
     super();
     this.state={
       newItem:" ",
       List:[]
     }
   }

   AddItem(item){
     if(item!== ""){
       const Itemobj={
         id:Date.now(),
         value:item,
         isDone:false
       }
       const List= [...this.state.List];
       List.push(Itemobj);
       this.setState({
         List,
         newItem:' '
       })
     }
   }

   DeleteItem(id){
     const List= [...this.state.List];
     console.log("before list",List)
     let updatedList=List.filter(item => item.id !==id);
     this.setState({
       List:updatedList
     })
     console.log("after list",List)
   }

   UpdateInput(item){
     this.setState({
      newItem:item
     })
   }

  render(){
  return (
    <div classname="AppTodo">
      <h2>Add Todo</h2>
      <input type="text"
       placeholder="Add item"
       value={this.state.newItem}
       onChange={e=>this.UpdateInput(e.target.value)}
       />
      <button onClick={()=>this.AddItem(this.state.newItem)}>Submit</button>
      <div classname="list">
        <ul>
          {this.state.List.map(item=>{
            return(
             <li className="listitem" key={item.id}>
             <input type="checkbox" checked={item.isDone} onChange={()=>{}}/>
              {item.value}
             <button className="btn" onClick={()=>this.DeleteItem(item.id)}>Delete</button>
           </li>
            );
          })}
         
        </ul>
      </div>
    </div>
  );
}
}
