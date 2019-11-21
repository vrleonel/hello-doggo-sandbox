import React, { useState } from "react";

function DogFetcher() {
  const [isLoading, setIsLoading] = useState(false);
  const [dog, setDog] = useState(null);
  const random = "https://dog.ceo/api/breeds/image/random"; //'breeds
  const pug = "https://dog.ceo/api/breed/pug/images/random"; //'breeds
  // https://dog.ceo/api/breed/pug/images/random
  function fetchDog(api) {
    if (isLoading) return;

    setIsLoading(true);
    fetch(api)
      .then(data => data.json())
      .then(response => {
        setDog(response.message);
        setIsLoading(false);
      });
  }

  return (
    <div>
      <figure className="dog" onDoubleClick={() => fetchDog(random)}>
        {dog && <img src={dog} width="400" alt="doggo" />}
      </figure>

      <p>
        <button onClick={() => fetchDog(random)}>
          {isLoading ? "Getting..." : "Get a doggo!"}
        </button>
      </p>
      <p>
        <button onClick={() => fetchDog(pug)}>
          {isLoading ? "Getting..." : "Get a pug!"}
        </button>
      </p>
    </div>
  );
}

export default DogFetcher;
