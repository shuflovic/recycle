//let recepty = [];

 // Function to display all recipes
 function displayRecepty() {
   const container = document.getElementById('recepty-container');
   container.innerHTML = '';
  
   recepty.forEach(recept => {
     const receptDiv = document.createElement('div');
     receptDiv.className = 'recept'; // Use 'recept' for styling individual recipes
     receptDiv.innerHTML = `
       <h3 onclick="showReceptDetail(${recept.id})">${recept.title}</h3>
       <p>${recept.content}</p>
     `;
     container.appendChild(receptDiv);
   });
 }

 // Function to show a single recipe's detail
 function showReceptDetail(receptId) {
   const recept = recepty.find(r => r.id === receptId);
   if (recept) {
     document.getElementById('recept-detail-content').innerHTML = recept.fullContent;
     showSection('recept-detail');
   }
 }

 // Function to add a new recipe
 function addNewRecept() {
   const title = document.getElementById('new-recept-title').value.trim();
   const content = document.getElementById('new-recept-content').value.trim();
   const fullContent = document.getElementById('new-recept-full').value.trim();
  
   if (!title || !content) {
     alert('Please fill in at least the title and preview content.');
     return;
   }
  
   // Safely get a new ID, even if the array is empty
   const newId = recepty.length > 0 ? Math.max(...recepty.map(r => r.id)) + 1 : 1;
   const newRecept = {
     id: newId,
     title: title,
     content: content,
     fullContent: fullContent || `<h2>${title}</h2><p>${content}</p>`
   };
  
   recepty.push(newRecept);
   displayRecepty();
  
   // Clear form
   document.getElementById('new-recept-title').value = '';
   document.getElementById('new-recept-content').value = '';
   document.getElementById('new-recept-full').value = '';
  
   alert('Recept added successfully!');
 }

 // Load recipes when the page loads
 document.addEventListener('DOMContentLoaded', displayRecepty);

 // This function remains the same as it's generic
 function showSection(id) {
   const sections = document.querySelectorAll('main section');
   sections.forEach(section => section.classList.remove('visible'));
   const target = document.getElementById(id);
   if (target) {
     target.classList.add('visible');
     target.scrollIntoView({ behavior: 'smooth' });
   }
 }
