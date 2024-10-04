// const heading = React.createElement(
    //     "h1",
    //     { id: "heading", xyz: "abc" },
    //     "Hello World from React!"
    // );
    
    // console.log(heading);
    
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    
    // root.render(heading);
    
    
    
    {/* <div id="parent">
        <div id="child">
            <h1>I'm using H1 tag!</h1>
        </div>
    </div> */}
    
    
const parent = React.createElement( "div", { id: "parent" },
    React.createElement(
        "div", { id: "child" }, [
            React.createElement("h1" , {}, "I'm using H1 tag!"),
            React.createElement("h2" , {}, "I'm using H2 tag!"),
        ]),
    React.createElement(
        "div", { id: "child2" }, [
            React.createElement("h1" , {}, "I'm using H1 tag!"),
            React.createElement("h2" , {}, "I'm using H2 tag!"),
        ]),  
);
    
console.log(parent);
    
const root = ReactDOM.createRoot(document.getElementById("root"));
    
root.render(parent);
    