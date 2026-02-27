const projects = {
    "Machine Learning": [
      {
        title: "House Price Prediction",
        image: "assets/images/ml1.jpg",
        github: "https://github.com/yourrepo",
        description: "Regression model using scikit-learn"
      }
    ],
  
    "Computer Vision": [
      {
        title: "Face Recognition System",
        image: "assets/images/cv1.jpg",
        github: "https://github.com/yourrepo",
        description: "CNN + OpenCV based system"
      }
    ],
  
    "Chatbots": [
      {
        title: "AI Chatbot",
        image: "assets/images/chatbot.jpg",
        github: "https://github.com/yourrepo",
        description: "NLP-based chatbot"
      }
    ]
  };
  const container = document.getElementById("portfolio-container");

for (let category in projects) {
  const section = document.createElement("div");
  section.className = "category";

  section.innerHTML = `<h3>${category}</h3><div class="project-grid"></div>`;

  const grid = section.querySelector(".project-grid");

  projects[category].forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-content">
        <h4>${project.title}</h4>
        <p>${project.description}</p>
        <a href="${project.github}" target="_blank">GitHub →</a>
      </div>
    `;

    grid.appendChild(card);
  });

  container.appendChild(section);
}