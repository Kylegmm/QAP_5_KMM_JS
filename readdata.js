// Read the JSON file
fetch('data.json')
  .then(response => response.json())
  .then(dataArray => {
    // Iterate through the array using forEach() and display desired fields
    dataArray.forEach((item) => {
      console.log(`ID: ${item.id}, Name: ${item.name}, Email: ${item.email}`);
    });
  })
  .catch(err => {
    console.error('Error reading or processing JSON data:', err);
  });


