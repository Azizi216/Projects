  const searchInput = document.getElementById("search");
      const results = document.getElementById("results");
      let currentIndex = -1;
      let playlist = [];
      let isPlaying = false;

      const audio = new Audio();

      searchInput.addEventListener("input", async () => {
        const query = searchInput.value.trim();
        if (!query) {
          results.innerHTML = "";
          results.style.display = "none";
          return;
        }

        const url = `https://discoveryprovider3.audius.co/v1/tracks/search?query=${encodeURIComponent(query)}&app_name=myApp`;
        try {
          const res = await fetch(url);
          const data = await res.json();

          results.innerHTML = "";
          results.style.display = "block";
          playlist = [];

          const tracks = data.data.slice(0, 5);
          tracks.forEach((track, index) => {
            const artwork = track.artwork?.["150x150"] || "";
            const streamEndpoint = `https://discoveryprovider3.audius.co/v1/tracks/${track.id}/stream?app_name=myApp`;

            playlist.push({ url: streamEndpoint, title: track.title });

            const trackDiv = document.createElement("div");
            trackDiv.style.display = "flex";
            trackDiv.style.alignItems = "center";
            trackDiv.style.marginBottom = "10px";

            trackDiv.innerHTML = `
              <img src="${artwork}" width="40" height="40" style="border-radius: 5px; margin-right: 10px;">
              <div style="flex: 1; text-align: left;">
                <strong>${track.title}</strong><br>
                <small>${track.user.name}</small>
              </div>
              <button>▶️ Play</button>
            `;

            const button = trackDiv.querySelector("button");
            button.addEventListener("click", async () => {
              await playTrack(index);
            });

            results.appendChild(trackDiv);
          });
        } catch (err) {
          results.innerHTML = "<p style='color:red'>Error loading results</p>";
          console.error(err);
        }
      });

      async function playTrack(index) {
        if (index < 0 || index >= playlist.length) return;

        try {
          const streamRes = await fetch(playlist[index].url, {
            redirect: "follow",
          });
          const finalUrl = streamRes.url;
          audio.src = finalUrl;
          await audio.play();
          currentIndex = index;
          isPlaying = true;
          results.innerHTML = "";
          results.style.display = "none";
        } catch (err) {
          alert("Could not play track.");
          console.error(err);
        }
      }

      document.querySelector(".pause").addEventListener("click", () => {
        if (isPlaying) {
          audio.pause();
          isPlaying = false;
        } else {
          audio.play();
          isPlaying = true;
        }
      });

      document.querySelector(".next").addEventListener("click", () => {
        if (currentIndex < playlist.length - 1) {
          playTrack(currentIndex + 1);
        }
      });

      document.querySelector(".previos").addEventListener("click", () => {
        if (currentIndex > 0) {
          playTrack(currentIndex - 1);
        }
      });