// file: /components/ResponseDisplay.js
const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    // Check if the response is for brands or for pet names
    if (data.result.brandName) {
      content = (
        <>
          <p>Brand Name: {data.result.brandName}</p>
          <p>Tagline: {data.result.tagline}</p>
          <p>Explanation: {data.result.explanation}</p>
        </>
      );
    } else if (data.result.animalPetName) {
      content = (
        <>
          <p>Name: {data.result.animalPetName}</p>
          <p>Description: {data.result.description}</p>
        </>
      );
    } else {
      content = "No data to display";
    }
  } else {
    content = "No data to display";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
