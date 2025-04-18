{/* <div id="pareent">
    <div id="child">
        <h2>i am a h2 tag</h2>
    </div>
</div> */}

const head = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a H1 tag"),
      React.createElement("h2",{},"I am a H2 tag"),  
    ]),
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am a H1 tag"),
        React.createElement("h2",{},"I am a H2 tag"),
    ]),
]);

   
   console.log(head);
   const heading = React.createElement('h1',{id:"heading"},"Hello World From React");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(head);

