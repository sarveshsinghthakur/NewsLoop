import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Footer from "./Footer";
const Archive = ({ props }) => {
  const [Data, setData] = useState("");
  const fetchdata = async () => {
    await axios
      .get(
        props
          ? `https://newsapi.org/v2/top-headlines?country=in&category=${props}&apiKey=//generate your key yourself->https://newsapi.org/`
          : `https://newsapi.org/v2/top-headlines?country=in&apiKey=//generate your key yourself->https://newsapi.org/`
      )
      .then((res) => setData(res.data.articles));
  };

  useEffect(() => {
    fetchdata();
  }, [props]);

  return (
    <>
      <div
        className=" fluid my-2 mx-6"
        style={{
          backgroundColor: "orange",
          display: "flex",
          color: "white",
          justify: "Content",
          borderRadius: "5vh",
          placeItems: "center",
          items: "centre",
        }}
      >
        <h1 className="my-2"
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            marginLeft: "35vh",
            padding: "5vh",
          }}
        >
          WELCOME TO NEWSLOOP : TOP HEADINGS
        </h1>
      </div>
      <div style={{ display: "grid", display: "inline-grid" }}>
        {Data ? (
          Data.map((items) => (
            <>
              <div
                className=" container card mx-5 my-3"
                style={{ boxSizing: "content-box", marginLeft:"10vh",marginRight:"10vh" , boxShadow:"revert-layer" }}
              >
                <h4>{items.title}</h4>
                <div className=" d-flex justify-content-centre align-item-centre">
                  <img
                    src={items.urlToImage}
                    alt="nothing to show"
                    className="img-fluid"
                    style={{
                      objectfit: "cover",
                      height: "50vh",
                      width: "50vh",
                      display: " block",
                      marginLeft: "65vh",
                    }}
                  />
                </div>
                <h5>{items.author}</h5>
                <p>{items.description}</p>
                <h6>{items.content}</h6>
                <a href={items.url} target="blank"c style={{backgroundColor:"darkcyan" ,color:"white" , marginRight:"160vh", display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"10vh"}}>
                  view more
                </a>
              </div>
            </>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Archive;
