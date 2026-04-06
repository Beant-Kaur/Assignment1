function loadData() {

  const container = document.getElementById("data");
  container.innerText = "Loading...";

  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {

       container.innerHTML = "";
      for (let i = 0; i < data.length; i++) {
        setTimeout(function() {
          const container = document.getElementById("data") 
          const p = document.createElement("p");
          p.textContent = data[i].name;
          container.appendChild(p);
        }, i* 1000);
      }
    })
    .catch(function(err) {
      console.innerText = "Failed to load data";
    });
}

      for (var i = 0; i < data.length; i++) {
        setTimeout(function() {
          document.getElementById("data").innerHTML += "<p>" + data[i].name + "</p>";
        }, 1000);
      }
    })
    .catch(function(err) {
      console.log(err);
    });
}

