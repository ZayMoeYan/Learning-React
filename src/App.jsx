import List from "./List";
import Item from "./Item";
import Form from "./Form";
import { useContext, useState } from "react";
import { AppContext } from "./ThemeApp";


export default function App() {

  const {mode} = useContext(AppContext);

  const[data, setData] = useState([
    {id: 1, content: "Laptop", name: "Dell"},
    {id: 2, content: "Phone", name: "Apple"},
    {id: 3, content: "Phone", name: "Samsung"},
  ])

  const[showForm, setShowForm] = useState(false)

  const remove = id => {
    setData(data.filter(item => item.id !== id ))
  }

  const add = (content, name) => {
    const id = data[data.length - 1].id + 1
    setData([...data, {id, content, name}])
  }
  
  return (
    <div style={{
      minHeight: 1000, margin: "20px auto",
      background: mode === "dark" ? "black" : "white",
      color: mode === "dark" ? "white" : "black"
      }} >

        <div style={{ maxWidth: 600, margin: "0 auto" }}>

        <h1 style={{display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }} >
          
          Yaycha
        
        <button
          onClick={() => setShowForm(!showForm)}
        style={{
          width: 32,
          height: 32,
          background: showForm ? "blue" : "black",
          color: "white",
          cursor: "pointer",
          borderRadius: 100
        }} >
          {showForm ? "x" : "+"}
        </button>
        </h1>

        {showForm && <Form add={add} />}

        <List>
          {
            data.map(item => {
              return ( <Item key={item.id} item={item}  remove={remove} />)
            })
          }
        </List>
      </div>

    </div>
  );
}






