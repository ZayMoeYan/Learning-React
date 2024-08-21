import { useRef } from "react";

export default function Form({add}) {

    const contentRef = useRef();
    const nameRef = useRef();

    return (
        <form onSubmit={e => {
            e.preventDefault();
            const content = contentRef.current.value;
            const name = nameRef.current.value;

            add(content, name)
            e.currentTarget.reset();
        }}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 15,
                    padding: 10,
                    borderRadius: 8,
                    marginBottom: 20,
                    background: "#def"
                }}>
            <input ref={contentRef} type="text" placeholder="Enter Content" style={{padding: 5}} />
            <input ref={nameRef} type="text" placeholder="Enter Name" style={{padding: 5}} />
            <button type="submit" style={{
                padding: 8,
                background: "cyan",
                color: "black",
                border: "0 none",
                cursor: "pointer"
            }}  >Post</button>
        </form>
    );
}