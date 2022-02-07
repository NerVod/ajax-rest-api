window.addEventListener("DOMContentLoaded", (event) => {
  const fetchBtn = document.getElementById("fetchSomething");
  const displayInfo = document.getElementById("displayInfo");

  const callApi = async () => {
    let jsonResult = {};
    try {
      const result  = await fetch(`http://127.0.0.1:8010/api`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      jsonResult = await result.json();

    //   jsonResult = await resultValue.json();
    } catch (error) {
      console.log(error);
    }
    console.log('jsonResult: ' , jsonResult);
    displayInfo.innerText = jsonResult.message;
    
  };
  fetchBtn.addEventListener("click", callApi);
});
