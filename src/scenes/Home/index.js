import React from "react";
import "./styles.scss";
const API_URL =
  "https://api.scripture.api.bible/v1/bibles/592420522e16049f-01/books";
const API_KEY = "599f872236d3a9d00a74c23d4ccb6761";

const getBible = () => {
  return fetch(API_URL, { headers: { "api-key": API_KEY } }).then((res) =>
    res.json()
  );
};

function Home({}) {
  const [bible, setBible] = React.useState([]);
  React.useEffect(() => {
    getBible().then((res) => {
      setBible(res.data);
    });
  }, []);

  return (
    <div className="home">
      <h1>La biblia</h1>
      <ul className="table">
        {bible.map((item, index) => {
          //   return <li key={`chapters-${index}`}>{JSON.stringify(item)}</li>;
          return (
            <div
              key={`book-${item.id}`}
              class="card"
              data-tilt
              data-tilt-scale="0.95"
              data-tilt-startY="40"
            >
              <div class="welcome">{item.id}</div>
              <div class="year">
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
