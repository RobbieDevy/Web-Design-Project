function createTimetable(containerId, data) {
  const container = document.getElementById(containerId); // get the container by ID
  container.innerHTML = ""; // clear any existing content

  for (const day in data) { // loop through each day in the data
    const column = document.createElement("div"); // create a column for the day
    column.className = "day-column"; // assign CSS class for styling

    const title = document.createElement("h2"); // create a heading for the day
    title.textContent = day; // set the heading text to the day's name
    column.appendChild(title); // add heading to the column

    data[day].forEach(session => { // loop through each session for the day
      const sessionDiv = document.createElement("div"); // create a div for the session
      sessionDiv.className = "session"; // assign CSS class for styling

      // add session time and title as inner HTML
      sessionDiv.innerHTML = `
        <div class="session-time">${session.time}</div>
        <div class="session-title">${session.title}</div>
      `;

      sessionDiv.addEventListener("click", () => { // add click event to show modal
        showModal(session);
      });

      column.appendChild(sessionDiv); // add session div to the column
    });

    container.appendChild(column); // add the column to the main container
  }
}