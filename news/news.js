let api_key = "98f898d74c2246f0bf6b6db5385de051";
      const container = document.querySelector(".container");
      const optionsContainer = document.querySelector(".option-container");
      const country = "us";
      const options = ["general", "entertainment", "health", "science", "sports", "technology"];
      let requestURL;

      const generateUI = (articles) => {
        container.innerHTML = "";
        if (!articles || articles.length === 0) {
          container.innerHTML = "<h2>No articles available. Try another category.</h2>";
          return;
        }

        for (let item of articles) {
          if (!item.title) continue; // Skip items without titles
          
          let card = document.createElement("div");
          card.classList.add("news-cards");
          card.innerHTML = `
            <div class="news-image-container">
              <img src="${item.urlToImage || 'https://via.placeholder.com/400x200?text=No+Image'}" 
                   alt="News Image" 
                   onerror="this.src='https://via.placeholder.com/400x200?text=Image+Not+Available'"/>
            </div>
            <div class="news-content">
              <div class="news-title">${item.title}</div>
              <div class="news-description">${item.description || item.content || "No description available"}</div>
              <a href="${item.url}" target="_blank" class="view-button">Read More</a>
            </div>
          `;
          container.appendChild(card);
        }
      };

      const getNews = async () => {
        container.innerHTML = "<h2>Loading news...</h2>";
        try {
          let response = await fetch(requestURL);
          if (!response.ok) {
            throw new Error("Data unavailable at the moment. Please try again later");
          }
          let data = await response.json();
          generateUI(data.articles);
        } catch (error) {
          container.innerHTML = `<h2>${error.message}</h2>`;
          console.error("Error fetching news:", error);
        }
      };

      const createOptions = () => {
        optionsContainer.innerHTML = "";
        options.forEach((category) => {
          let button = document.createElement("button");
          button.innerText = category.charAt(0).toUpperCase() + category.slice(1);
          button.style.margin = "5px";
          button.style.padding = "8px 16px";
          button.style.border = "none";
          button.style.borderRadius = "20px";
          button.style.backgroundColor = "#333";
          button.style.color = "white";
          button.style.cursor = "pointer";
          button.style.transition = "all 0.3s ease";

          button.addEventListener("mouseover", () => {
            button.style.backgroundColor = "red";
          });

          button.addEventListener("mouseout", () => {
            button.style.backgroundColor = "#333";
          });

          button.addEventListener("click", () => {
            requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${api_key}`;
            getNews();
          });

          optionsContainer.appendChild(button);
        });
      };

      const init = () => {
        requestURL = `https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${api_key}`;
        getNews();
        createOptions();
      };

      window.onload = init;