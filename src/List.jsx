
export default function List({children}) {
    return  <ul style={{
      listStyle: "none",
      borderRadius: 8,
      margin: 0,
      padding: 0,
      border: "1px solid black",
      borderBottom: "none",
      overflow: 'hidden'
    }} >
      {children}
    </ul>
  }