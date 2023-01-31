
import React  from "react";
import "./Contents.css";

function Contents({ clickHandler , list }) {
  // const [addItem, setAddItem] = useState(true);
  

  return (
    <div className="contents">
      {list.map((item) => (
        <div
          key={item.id}
          className="contents__box"
          style={{backgroundColor:item.Color}}
        >
          <div className="contents__header">
            {" "}
            <h1>
              {item.title} <sup>{item.quality}</sup>{" "}
            </h1>
            <h2>
              ${item.price}
              <sub>Per month</sub>
            </h2>
          </div>
          <p>{item.description}</p>
          <div className="contents__features">
            <span>Features</span>
            <br /> <p>{item.features}</p>{" "}
            {item.specifications.map((data) => {
              return (
                <div>
                <ul>
                  <li>
                    <img src="./images/check.svg" alt="" />
                    {data}
                  </li>
                </ul>
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => {clickHandler(item,item.id,)}}
            style={{backgroundColor:item.color}}
          >
           {item.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Contents;
