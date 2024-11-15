document.getElementById('generateFact').addEventListener('click', function() {
    const facts = [
        "You are a beach enthusiast who enjoys collecting seashells.",
        "You love long walks and star gazing, possibly owning a telescope.",
        "You are a culinary explorer with a taste for Indian cuisine.",
        "You find inspiration in nature and enjoy mindful walks.",
        "You are culturally curious with an interest in diverse traditions.",
        "You are a romantic at heart who appreciates life's simple experiences."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('funFact').textContent = facts[randomIndex];
});
