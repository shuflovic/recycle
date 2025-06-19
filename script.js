const articles = [
    {
      id: 1,
      title: "5 Creative Ways to Upcycle Old Furniture",
      content: "Don't throw away that old chair or table! With a little creativity and some basic tools, you can transform worn-out furniture into stunning statement pieces. Sand, paint, and reupholster to give new life to forgotten treasures.",
      fullContent: `
        <h2>5 Creative Ways to Upcycle Old Furniture</h2>
        <p>Don't throw away that old chair or table! With a little creativity and some basic tools, you can transform worn-out furniture into stunning statement pieces.</p>
        
        <h3>1. Sand and Paint</h3>
        <p>Start with a good sanding to remove old finishes. Apply primer, then paint in bold colors or create interesting patterns with stencils.</p>
        
        <h3>2. Reupholster Seats</h3>
        <p>Replace worn fabric with vibrant new materials. Choose durable fabrics that match your décor style.</p>
        
        <h3>3. Add New Hardware</h3>
        <p>Switch out old handles and knobs for modern alternatives. This simple change can completely transform the look.</p>
        
        <h3>4. Mix and Match Styles</h3>
        <p>Combine vintage pieces with modern elements for an eclectic, personalized look that tells a story.</p>
        
        <h3>5. Create Multi-Purpose Pieces</h3>
        <p>Turn an old dresser into a TV stand, or transform a ladder into a bookshelf. Think outside the box!</p>
      `
    },
    {
      id: 2,
      title: "Plastic Bottle Garden: Growing Green from Waste",
      content: "Turn plastic bottles into a thriving vertical garden! Cut, drill drainage holes, and hang them to create an eco-friendly growing space. Perfect for herbs, small vegetables, and flowers while reducing plastic waste.",
      fullContent: `
        <h2>Plastic Bottle Garden: Growing Green from Waste</h2>
        <p>Turn plastic bottles into a thriving vertical garden! This sustainable gardening method is perfect for small spaces and helps reduce plastic waste.</p>
        
        <h3>Materials Needed</h3>
        <p>Large plastic bottles (2L soda bottles work great), drill, potting soil, seeds or seedlings, and rope or wire for hanging.</p>
        
        <h3>Step-by-Step Process</h3>
        <p>Cut openings in the bottles, drill drainage holes in the bottom, fill with soil, and plant your seeds. Hang them in a sunny location.</p>
        
        <h3>Best Plants to Grow</h3>
        <p>Herbs like basil, mint, and cilantro thrive in bottle gardens. Small vegetables like lettuce and cherry tomatoes also work well.</p>
        
        <h3>Maintenance Tips</h3>
        <p>Water regularly but avoid overwatering. Rotate bottles occasionally for even growth. Harvest frequently to encourage new growth.</p>
      `
    },
    {
      id: 3,
      title: "DIY Storage Solutions from Cardboard Boxes",
      content: "Before tossing those Amazon boxes, consider their potential! Cover with fabric or decorative paper to create stylish storage bins. Add dividers for drawer organization or stack them for a custom shelving system.",
      fullContent: `
        <h2>DIY Storage Solutions from Cardboard Boxes</h2>
        <p>Before tossing those Amazon boxes, consider their potential! Transform them into beautiful, functional storage solutions.</p>
        
        <h3>Basic Box Makeover</h3>
        <p>Cover boxes with decorative paper, fabric, or paint. Use spray adhesive for smooth application and clean edges.</p>
        
        <h3>Creating Drawer Dividers</h3>
        <p>Cut smaller boxes to fit inside drawers. Perfect for organizing socks, underwear, or office supplies.</p>
        
        <h3>Stackable Storage System</h3>
        <p>Reinforce boxes with tape and create a modular storage system. Label each box for easy identification.</p>
        
        <h3>Magazine Holders</h3>
        <p>Cut boxes diagonally to create magazine holders for books, documents, or craft supplies.</p>
        
        <h3>Gift Box Upcycling</h3>
        <p>Shoe boxes and gift boxes make excellent organizers for jewelry, craft supplies, or keepsakes.</p>
      `
    },
    {
      id: 4,
      title: "Glass Jar Magic: From Trash to Treasure",
      content: "Empty glass jars are goldmines for creative recycling! Transform them into candle holders, spice containers, or beautiful terrariums. Clean them thoroughly, remove labels, and let your imagination run wild with paint and decorations.",
      fullContent: `
        <h2>Glass Jar Magic: From Trash to Treasure</h2>
        <p>Empty glass jars are goldmines for creative recycling! With endless possibilities, these containers can become functional and beautiful additions to your home.</p>
        
        <h3>Removing Labels Easily</h3>
        <p>Soak jars in warm soapy water, then use cooking oil and baking soda to remove stubborn adhesive residue.</p>
        
        <h3>Candle Holders and Luminaries</h3>
        <p>Add sand, pebbles, or colored glass for weight and decoration. Use battery-operated tea lights for safety.</p>
        
        <h3>Kitchen Organization</h3>
        <p>Perfect for storing spices, nuts, grains, and homemade preserves. Label with chalkboard paint for easy identification.</p>
        
        <h3>Mini Terrariums</h3>
        <p>Layer gravel, activated charcoal, soil, and small plants. Moss, succulents, and air plants work wonderfully.</p>
        
        <h3>Craft Supply Storage</h3>
        <p>Organize buttons, beads, screws, and other small items. Mount lids under shelves for space-saving storage.</p>
      `
    },
    {
      id: 5,
      title: "Textile Recycling: New Life for Old Clothes",
      content: "That worn-out t-shirt can become cleaning rags, a tote bag, or even a plant pot cover! Learn basic sewing techniques to repurpose fabric scraps into useful household items while keeping textiles out of landfills.",
      fullContent: `
        <h2>Textile Recycling: New Life for Old Clothes</h2>
        <p>That worn-out t-shirt can become so much more! Transform old clothing into useful household items while keeping textiles out of landfills.</p>
        
        <h3>T-Shirt Transformations</h3>
        <p>Cut t-shirts into cleaning rags, braided rugs, or no-sew tote bags. The stretchy fabric is perfect for many projects.</p>
        
        <h3>Jean Upcycling Ideas</h3>
        <p>Turn old jeans into aprons, potholders, or sturdy storage bags. The denim is durable and perfect for heavy-duty items.</p>
        
        <h3>Sock Projects</h3>
        <p>Single socks become phone cases, draft stoppers, or rice heating pads. Fill with rice and microwave for instant warmth.</p>
        
        <h3>Bedsheet Possibilities</h3>
        <p>Old sheets make excellent drop cloths, fort materials, or can be cut into fabric strips for braiding projects.</p>
        
        <h3>Basic Sewing Techniques</h3>
        <p>Learn simple hand stitches: running stitch, backstitch, and blanket stitch. These basics open up countless possibilities.</p>
      `
    },
    {
      id: 6,
      title: "Electronics Recycling: Responsible Disposal Tips",
      content: "Old phones and computers contain valuable materials that can be recovered! Research local e-waste programs, remove personal data properly, and consider donating working devices to schools or community centers before recycling.",
      fullContent: `
        <h2>Electronics Recycling: Responsible Disposal Tips</h2>
        <p>Old phones and computers contain valuable materials that can be recovered! Proper e-waste disposal protects the environment and recovers precious metals.</p>
        
        <h3>Data Security First</h3>
        <p>Always wipe personal data before disposal. Use manufacturer reset procedures and consider professional data destruction for sensitive information.</p>
        
        <h3>Donation Opportunities</h3>
        <p>Working devices can benefit schools, community centers, or seniors. Many organizations refurbish electronics for those in need.</p>
        
        <h3>Manufacturer Take-Back Programs</h3>
        <p>Apple, Dell, HP, and other manufacturers offer free recycling programs. They often provide prepaid shipping labels.</p>
        
        <h3>Local E-Waste Events</h3>
        <p>Many communities host periodic e-waste collection drives. Check with your local government or waste management company.</p>
        
        <h3>What Not to Throw Away</h3>
        <p>Never put electronics in regular trash. Batteries, screens, and circuit boards contain materials that require special handling.</p>
      `
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
        <h3 onclick="showArticleDetail(${article.id})">${article.title}</h3>
        <p>${article.content}</p>
      `;
      container.appendChild(articleDiv);
    });
  }

  // Function to show article detail
  function showArticleDetail(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (article) {
      document.getElementById('article-detail-content').innerHTML = article.fullContent;
      showSection('article-detail');
    }
  }

  // Function to add new article
  function addNewArticle() {
    const title = document.getElementById('new-article-title').value.trim();
    const content = document.getElementById('new-article-content').value.trim();
    const fullContent = document.getElementById('new-article-full').value.trim();
    
    if (!title || !content) {
      alert('Please fill in at least the title and preview content.');
      return;
    }
    
    const newId = Math.max(...articles.map(a => a.id)) + 1;
    const newArticle = {
      id: newId,
      title: title,
      content: content,
      fullContent: fullContent || `<h2>${title}</h2><p>${content}</p>`
    };
    
    articles.push(newArticle);
    displayArticles();
    
    // Clear form
    document.getElementById('new-article-title').value = '';
    document.getElementById('new-article-content').value = '';
    document.getElementById('new-article-full').value = '';
    
    alert('Article added successfully!');
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
