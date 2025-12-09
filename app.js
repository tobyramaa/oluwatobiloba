console.log("Git Test Project Loaded Successfully!");

const btn = document.getElementById("actionBtn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const messages = [
        "Git is life!",
        "Commit early, commit often!",
        "Branching makes your project clean.",
        "You're doing great 🚀",
        "Pushed successfully? Let's go!"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    output.textContent = randomMessage;
});
