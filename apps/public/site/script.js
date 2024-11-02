document.addEventListener("DOMContentLoaded", () => {
    // Dummy data for recent notes and PYQs
    const data = [
        {
            title: "Calculus Notes",
            img: "https://via.placeholder.com/220x120?text=Calculus" ,
            viewLink: "#",
            downloadLink: "#",
            description: "Detailed notes on Calculus for 2nd-year students.",
            pdf: "https://example.com/calculus.pdf"
        },
        {
            title: "Data Structures PYQs",
            img: "https://via.placeholder.com/220x120?text=Data+Structures",
            viewLink: "#",
            downloadLink: "#",
            description: "Previous year questions for Data Structures.",
            pdf: "https://example.com/datastructures.pdf"
        },
        {
            title: "Physics Lab Notes",
            img: "https://via.placeholder.com/220x120?text=Physics",
            viewLink: "#",
            downloadLink: "#",
            description: "Lab notes covering experiments for Physics.",
            pdf: "https://example.com/physics.pdf"
        },
        {
            title: "Discrete Math PYQs",
            img: "https://via.placeholder.com/220x120?text=Discrete+Math",
            viewLink: "#",
            downloadLink: "#",
            description: "Previous year questions for Discrete Math.",
            pdf: "https://example.com/discretemath.pdf"
        },
        {
            title: "Programming Basics Notes",
            img: "https://via.placeholder.com/220x120?text=Programming",
            viewLink: "#",
            downloadLink: "#",
            description: "Comprehensive notes on basic programming concepts.",
            pdf: "https://example.com/programming.pdf"
        }
    ];

    const recentItemsContainer = document.getElementById("recent-items");

    // Render items in the recent notes section
    data.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";
        itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <h3>${item.title}</h3>
            <div class="icons">
                <a href="${item.viewLink}" title="View" target="_blank">👁️</a>
                <a href="${item.downloadLink}" title="Download" target="_blank">📥</a>
            </div>
            <button class="more-btn">More</button>
            <p class="description">${item.description}</p>
        `;
        
        // Toggle description on "More" button click
        const moreBtn = itemDiv.querySelector(".more-btn");
        const description = itemDiv.querySelector(".description");
        moreBtn.addEventListener("click", () => {
            description.style.display = description.style.display === "block" ? "none" : "block";
            moreBtn.textContent = description.style.display === "block" ? "Less" : "More";
        });

        recentItemsContainer.appendChild(itemDiv);
    });
});
