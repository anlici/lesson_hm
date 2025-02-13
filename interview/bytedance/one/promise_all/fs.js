const fs = require('fs').promises;

async function readFiles(filePaths) {
  try {
    const fileContents = await Promise.all(
      filePaths.map(filePath => fs.readFile(filePath, 'utf8'))
    );
    console.log(fileContents);
  } catch (error) {
    console.error('Error reading files:', error);
  }
}

const filePaths = [
  './a.txt',
  './b.txt',
  './c.txt'
];

readFiles(filePaths);