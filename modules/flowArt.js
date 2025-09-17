function renderFlowArtModule() {
  const main = document.getElementById('main-content');

  main.innerHTML = `
    <h2>🎨 Flow Art Therapy</h2>
    <p>Welcome to your fluid creative space. Let the colors move your emotions and bring you into stillness.</p>

    <div style="margin: 20px 0;">
      <button onclick="showSampleArt()">View Sample SoulArt Canvas</button>
      <button onclick="launchArtCreator()">Create My Flow Art</button>
    </div>

    <div id="flow-art-area"></div>
  `;
}

function showSampleArt() {
  const container = document.getElementById('flow-art-area');
  container.innerHTML = `
    <img src="https://source.unsplash.com/800x400/?fluid,abstract,art" alt="Sample Flow Art" style="width: 100%; border-radius: 12px; margin-top: 20px;">
    <p style="margin-top: 10px; font-style: italic;">Let your emotions speak in color.</p>
  `;
}

function launchArtCreator() {
  const container = document.getElementById('flow-art-area');
  container.innerHTML = `
    <p>This feature will soon allow you to paint intuitively on your screen with vibrant chakra-based colors.</p>
    <p>Coming soon: Digital canvas + Save + Print + Share.</p>
  `;
}

