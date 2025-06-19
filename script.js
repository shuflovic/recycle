  // Articles data - easily add new articles here
  const articles = [
    {
      title: "5 Creative Ways to Upcycle Old Furniture",
      content: "Don't throw away that old chair or table! With a little creativity and some basic tools, you can transform worn-out furniture into stunning statement pieces. Sand, paint, and reupholster to give new life to forgotten treasures."
    },
    {
      title: "Plastic Bottle Garden: Growing Green from Waste",
      content: "Turn plastic bottles into a thriving vertical garden! Cut, drill drainage holes, and hang them to create an eco-friendly growing space. Perfect for herbs, small vegetables, and flowers while reducing plastic waste."
    },
    {
      title: "DIY Storage Solutions from Cardboard Boxes",
      content: "Before tossing those Amazon boxes, consider their potential! Cover with fabric or decorative paper to create stylish storage bins. Add dividers for drawer organization or stack them for a custom shelving system."
    },
    {
      title: "Glass Jar Magic: From Trash to Treasure",
      content: "Empty glass jars are goldmines for creative recycling! Transform them into candle holders, spice containers, or beautiful terrariums. Clean them thoroughly, remove labels, and let your imagination run wild with paint and decorations."
    },
    {
      title: "Textile Recycling: New Life for Old Clothes",
      content: "That worn-out t-shirt can become cleaning rags, a tote bag, or even a plant pot cover! Learn basic sewing techniques to repurpose fabric scraps into useful household items while keeping textiles out of landfills."
    },
    {
      title: "Electronics Recycling: Responsible Disposal Tips",
      content: "Old phones and computers contain valuable materials that can be recovered! Research local e-waste programs, remove personal data properly, and consider donating working devices to schools or community centers before recycling."
    }
  ];

  // Function to display articles
  function displayArticles() {
    const container = document.getElementById('articles-container');
    container.innerHTML = '';
    
    articles.forEach(article => {
      const articleDiv = document.createElement('div');
      articleDiv.className = 'article';
      articleDiv.innerHTML = `
        <h3>${article.title}</h3>
        <p>${article.content}</p>
      `;
      container.appendChild(articleDiv);
    });
  }

  // Load articles when page loads
  document.addEventListener('DOMContentLoaded', displayArticles);

  function showSection(id) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.remove('visible'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('visible');
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
