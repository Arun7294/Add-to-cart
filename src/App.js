import Header from "./Components/Header";
import Cart from "./Components/Cart";
import "./App.css";
import Contents from "./Components/Contents";
import { useState } from "react";
import WebBuilder from "./WebBuilder";
// import 'grapesjs/dist/css/grapes.min.css';
// import grapesjs from 'grapesjs';
// import gjsPresentWebPage from "grapesjs-preset-webpage"

function App() {
  // const [editor , setEditor] = useState(null)
  const [show, SetShow] = useState(false);
  const [cart, setCart] = useState([]);
  const [over, setOver] = useState(false);

  const list = [
    {
      id: 1,
      title: "Basic plan",
      color: "gray",
      Color: "white",
      name: "Add to cart",
      description: "Our most popular plans for small teams",
      price: "10",
      features: "Everything in our free plan plus....",
      specifications: [
        "Access to basic features",
        "Basic reporting + analysis",
        "Up to 10 individual users",
        "20 GB individual data",
        "Basic chat support",
        "Attend events",
        "Automatic updates",
        "Backup your account",
        "Audit log notes",
        "feature requests",
      ],
    },
    {
      id: 2,
      title: "Business plan",
      color: "gray",
      Color: "white",
      name: "Add to cart",
      quality: "Popular",
      description: "Advanced features and reporting",
      price: "20",
      features: "Everything in our basic plan plus....",
      specifications: [
        "200+integrations",
        "Advanced reporting",
        "Up to 20 individual users",
        "40GB individual data",
        "priority chat support",
        "Advanced custom fields",
        "Audit log and data history",
        "Backup your account",
        "Personalised service",
        "+many more...",
      ],
    },
  ];

  // useEffect(() => {
  //   const editor = grapesjs.init({
  //     container:"#editor",
  //     plugins:[gjsPresentWebPage],
  //     pluginsOpts:{
  //       gjsPresentWebPage:{}
  //     }
  //   });
  //   setEditor(editor);
  // } , [])
  const [featurelist, setFeaturelist] = useState(list);

  const clickHandler = (item, id) => {
    cart.push(item);
    console.log(cart);
    console.log(item.id);
    const newList = featurelist.map((ele) => {
      if (id === ele.id) {
        //   console.log("button clicked" , id , ele.id)
        //   ele.color=ele.color= click?setClick("gray"):click
        //  console.log(ele)

        ele.color = "gray" ? "green" : "gray";
        ele.name = "Add to cart" ? "Added to cart" : "Add to cart";
        ele.Color = "white" ? "pink" : "white";
        console.log(ele, id);
      }
      return ele;
    });
    setFeaturelist(newList);
    return setCart([...cart]);
  };

  const handleClick = () => {
    return SetShow(true);
  };

  const handleOver = () => {
    return setOver(true);
  };
  const handleOut = () => {
    return setOver(false);
  };

  return (
    <WebBuilder>
    <div className="App">
      {/* <div id="editor"> */}
      <Header
        handleClick={handleClick}
        cart={cart}
        handleOver={handleOver}
        over={over}
        handleOut={handleOut}
      />
      {!show && (
        <Contents
          clickHandler={clickHandler}
          cart={cart}
          list={featurelist ? featurelist : list}
        />
      )}
      {show && <Cart cart={cart} />}
      {/* </div> */}
    </div>
 </WebBuilder> );
}

export default App;
