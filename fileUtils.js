// const fs = require('fs/promises');
// const path = require('path');

// const dataFilePath = path.resolve('/scores.json');

// // Function to write data to the file
// const writeDataToFile = async (data) => {
//   try {
//     // Read existing data from the file (if any)
//     const existingData = await fs.readFile(dataFilePath, 'utf-8');
//     const parsedData = JSON.parse(existingData || '[]');

//     // Add new data to the existing data
//     parsedData.push(data);

//     // Write the updated data back to the file
//     await fs.writeFile(dataFilePath, JSON.stringify(parsedData, null, 2), 'utf-8');

//     console.log('Data has been written to the file.');
//   } catch (error) {
//     console.error('Error writing data to the file:', error);
//   }
// };

// module.exports = { writeDataToFile };
