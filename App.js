const parent = React.createElement("div", {}, [
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag")
  ]),
  React.createElement("div", {}, [
    React.createElement("h1", {}, "this is h1 tag"),
    React.createElement("h2", {}, "this is h2 tag")
  ])
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);