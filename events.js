document.addEventListener("DOMContentLoaded", () => {
    const eventContainer = document.getElementById("event-container");

    // List of Upcoming Events
    const events = [
        { title: "Hands-on AI Workshop", date: "March 20, 2025" },
        { title: "Web Development Bootcamp", date: "April 10, 2025"},
        { title:"Cybersecurity Hackathon", date: "May 5, 2025"},
        { title: "Cloud Computing Seminar", date: "June 15, 2025"}
    ];

    // Dynamically Adding Events
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");

        eventCard.innerHTML = `
            <div class="event-title">${event.title}</div>
            <div class="event-date">📅 ${event.date}</div>
        `;

        eventContainer.appendChild(eventCard);
    });
});
