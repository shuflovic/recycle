let websites = [];

  // Load websites from Supabase
  async function loadWebsitesFromDB() {
    try {
      const { data, error } = await supabaseClient
        .from('websites')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error loading websites', error);
        // Fallback to dummy data if database fails
        loadDummyWebsites();
        return;
      }
      
websites = data.map(website => ({
  id: website.id,
  title: website.title
}));

      
      displayWebsites();
    } catch (err) {
      console.error('Database connection error:', err);
      loadDummyWebsites();
    }
  }

  // Fallback dummy data (in case database is not available)
  function loadDummyWebsites() {
    websites = [
      {
        id: 1,
        title: "https://streetartutopia.com/2025/06/18/8-street-art-repairs-that-brought-broken-places-back-to-life/",
      },
      {
        id: 2,
        title: "https://streetartutopia.com/2025/06/18/8-street-art-repairs-that-brought-broken-places-back-to-life/"
      }
    ];
    displayWebsites();
  }

  // Function to display websites
function displayWebsites() {
  const container = document.getElementById('websites-container');
  container.innerHTML = '';

  websites.forEach(website => {
    const websiteDiv = document.createElement('div');
    websiteDiv.className = 'website';

    websiteiv.innerHTML = `
  
    <div class="inspiration-item">
      <div class="preview-frame">
        <iframe src="${website.title}" loading="lazy"></iframe>
      </div>
      <div class="inspiration-info">
        <a href="${website.title}" target="_blank" class="visit-link">go to the page</a>
      </div>
    </div>
    `;

    container.appendChild(websiteDiv);
  });
}

  // Function to add new article
 async function addNewWebsite() {
  const title = document.getElementById('new-website-title').value.trim();


  if (!title || !content) {
    alert('Please fill in at least the title and preview content.');
    return;
  }

  // Insert website into DB
  const { data, error } = await supabaseClient
    .from('websites')
    .insert([
      {
        title
      }
    ])
    .select()
    .single(); // helps avoid [0] and undefined handling

  if (error || !data) {
    console.error('Supabase insert error:', error?.message, error?.details);
    alert('Error saving website. Check console for details.');
    return;
  }

  // All good — add to UI
  const newWebsite= {
    id: data.id,
    title: data.title
  };

  websites.unshift(newWebsite);
  displayWebsites();

  // Clear form
  document.getElementById('new-website-title').value = '';


  alert('Website has been saved successfully!');
}

  // Load articles when page loads
  document.addEventListener('DOMContentLoaded', loadWebsitesFromDB);

