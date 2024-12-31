// Add interactivity or dynamic updates to your livestream page here

// Example: Dynamically update the livestream title
document.addEventListener('DOMContentLoaded', () => {
  const headerTitle = document.querySelector('header h1');
  const streamTitle = "The Gulf Cup!";
  
  // Update the title dynamically
  headerTitle.textContent = streamTitle;
  
  console.log("Page loaded and title updated.");
});

// If additional functionality is needed, like fetching updates, add it below
