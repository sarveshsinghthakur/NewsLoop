import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import Footer from "./Footer";

const Archive = ({ props }) => {
  const [Data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    try {
      

      const url = props
        ? `https://newsdata.io/api/1/latest?apikey=pub_510304c0e2754154a655b0e9b15894b46f77f&q=${props}`
        : `https://newsdata.io/api/1/latest?apikey=pub_510304c0e2754154a655b0e9b15894b46f77f`;

      

      const response = await axios.get(url);
      setData(response.data.articles);
    } catch (err) {
      console.error("Error fetching data:", err.response ? err.response.data : err.message);
      setError(err.response ? err.response.data : err.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [props]);

  return (
    <>
      <div
        className="fluid my-2 mx-6"
        style={{
          backgroundColor: "orange",
          display: "flex",
          color: "white",
          justifyContent: "center",
          borderRadius: "5vh",
        }}
      >
        <h1
          className="my-2"
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
      <div style={{ display: "grid" }}>
        {error ? (
          <p>Error: {error}</p>
        ) : Data.length > 0 ? (
          Data.map((items, index) => (
            <div
              key={index}
              className="container card mx-5 my-3"
              style={{
                boxSizing: "content-box",
                marginLeft: "10vh",
                marginRight: "10vh",
                boxShadow: "revert-layer",
              }}
            >
              <h4>{items.title}</h4>
              <div className="d-flex justify-content-center align-items-center">
                <img
                  src={items.image_url}
                  alt="news"
                  className="img-fluid"
                  style={{
                    objectFit: "cover",
                    height: "50vh",
                    width: "50vh",
                    display: "block",
                    marginLeft: "65vh",
                  }}
                />
              </div>
              <h5>{items.creator}</h5>
              <p>{items.description}</p>
              <h6>{items.content}</h6>
              <h7>{items.source_name}</h7>
              <a
                href={items.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "darkcyan",
                  color: "white",
                  marginRight: "160vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "10vh",
                }}
              >
                view more
              </a>
            </div>
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
