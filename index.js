document.addEventListener("DOMContentLoaded", function() {
  
   // FAQ Toggle Functionality
const faqs = document.querySelectorAll('.f-a-q-list-container .faq-3, .faq-4, .faq-5, .faq-6, .faq-7, .faq-8, .faq-9, .faq-10, .faq-11');

faqs.forEach(faq => {
  const toggleButton = faq.querySelector('h1');
  const answerContainer = faq.querySelector('.f-a-q-question-items, .step-1-login-container');

  toggleButton.addEventListener('click', () => {
    const isExpanded = toggleButton.textContent.trim() === "-";
    
    // Reset all FAQs
    faqs.forEach(otherFaq => {
      const otherToggleButton = otherFaq.querySelector('h1');
      const otherAnswerContainer = otherFaq.querySelector('.f-a-q-question-items, .step-1-login-container');
      
      if (otherFaq !== faq) {
        otherToggleButton.textContent = "+";
        otherAnswerContainer.style.display = 'none';
      }
    });
    
    // Toggle the current FAQ
    if (isExpanded) {
      toggleButton.textContent = "+";
      answerContainer.style.display = 'none';
    } else {
      toggleButton.textContent = "-";
      answerContainer.style.display = 'block';
    }
  });
});


  // Define the download function with file existence check using fetch
function downloadFile(fileUrl) {
  try {
      if (!fileUrl || fileUrl.trim() === "") {
          throw new Error("File URL is missing.");
      }

      // Check if the file exists by using fetch
      fetch(fileUrl, { method: 'HEAD' })
          .then(response => {
              if (!response.ok) {
                  throw new Error(`File not found at ${fileUrl}. HTTP status: ${response.status}`);
                  console.log("Error") 
              }

              // If the file exists, trigger the download
              const link = document.createElement('a');
              link.href = fileUrl;
              link.download = fileUrl.split('/').pop(); // Extract the file name from the URL
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              console.log(`Downloading: ${fileUrl}`);
          })
          .catch(error => {
              console.error(`Error: ${error.message}`); // Log the error message to the console if file is not found
          });
  } catch (error) {
      console.error(`Error: ${error.message}`);
  }
}
// General RHP buttons
document.querySelectorAll('.rhp').forEach((button, index) => {
  button.addEventListener('click', function() {
      downloadFile(`./files/rhp_file_${index}.pdf`); // Example file paths
  });
});

// General DRHP buttons
document.querySelectorAll('.drhp').forEach((button, index) => {
  button.addEventListener('click', function() {
      downloadFile(`./files/drhp_file_${index}.pdf`); // Example file paths
  });
});

// Specific RHP and DRHP buttons based on class names
// RHP button
const rhpButton = document.querySelector('.rhp');
if (rhpButton) {
    rhpButton.addEventListener('click', function() {
        const fileUrl = './files/rhp_file.pdf'; // Example file path for RHP
        downloadFile(fileUrl);
    });
}

// RHP2 button
const rhp2Button = document.querySelector('.rhp2');
if (rhp2Button) {
    rhp2Button.addEventListener('click', function() {
        const fileUrl = './files/rhp_file_2.pdf'; // Example file path for RHP2
        downloadFile(fileUrl);
    });
}

// RHP4 button
const rhp4Button = document.querySelector('.rhp4');
if (rhp4Button) {
    rhp4Button.addEventListener('click', function() {
        const fileUrl = './files/rhp_file_4.pdf'; // Example file path for RHP4
        downloadFile(fileUrl);
    });
}

// RHP6 button
const rhp6Button = document.querySelector('.rhp6');
if (rhp6Button) {
    rhp6Button.addEventListener('click', function() {
        const fileUrl = './files/rhp_file_6.pdf'; // Example file path for RHP6
        downloadFile(fileUrl);
    });
}

// RHP8 button
const rhp8Button = document.querySelector('.rhp8');
if (rhp8Button) {
    rhp8Button.addEventListener('click', function() {
        const fileUrl = './files/rhp_file_8.pdf'; // Example file path for RHP8
        downloadFile(fileUrl);
    });
}

// DRHP button
const drhpButton = document.querySelector('.drhp');
if (drhpButton) {
    drhpButton.addEventListener('click', function() {
        const fileUrl = './files/drhp_file.pdf'; // Example file path for DRHP
        downloadFile(fileUrl);
    });
}

// DRHP2 button
const drhp2Button = document.querySelector('.drhp2');
if (drhp2Button) {
    drhp2Button.addEventListener('click', function() {
        const fileUrl = './files/drhp_file_2.pdf'; // Example file path for DRHP2
        downloadFile(fileUrl);
    });
}

// DRHP4 button
const drhp4Button = document.querySelector('.drhp4');
if (drhp4Button) {
    drhp4Button.addEventListener('click', function() {
        const fileUrl = './files/drhp_file_4.pdf'; // Example file path for DRHP4
        downloadFile(fileUrl);
    });
}

// DRHP6 button
const drhp6Button = document.querySelector('.drhp6');
if (drhp6Button) {
    drhp6Button.addEventListener('click', function() {
        const fileUrl = './files/drhp_file_6.pdf'; // Example file path for DRHP6
        downloadFile(fileUrl);
    });
}

// DRHP8 button
const drhp8Button = document.querySelector('.drhp8');
if (drhp8Button) {
    drhp8Button.addEventListener('click', function() {
        const fileUrl = './files/drhp_file_8.pdf'; // Example file path for DRHP8
        downloadFile(fileUrl);
    });
}

// RHP10 button
const rhp10Button = document.querySelector('.rhp10');
if (rhp10Button) {
  rhp10Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_10.pdf'); // Example file path for RHP10
  });
}

// DRHP10 button
const drhp10Button = document.querySelector('.drhp10');
if (drhp10Button) {
  drhp10Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_10.pdf'); // Example file path for DRHP10
  });
}

// RHP12 button
const rhp12Button = document.querySelector('.rhp12');
if (rhp12Button) {
  rhp12Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_12.pdf'); // Example file path for RHP12
  });
}

// DRHP12 button
const drhp12Button = document.querySelector('.drhp12');
if (drhp12Button) {
  drhp12Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_12.pdf'); // Example file path for DRHP12
  });
}

// RHP14 button
const rhp14Button = document.querySelector('.rhp14');
if (rhp14Button) {
  rhp14Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_14.pdf'); // Example file path for RHP14
  });
}

// DRHP14 button
const drhp14Button = document.querySelector('.drhp14');
if (drhp14Button) {
  drhp14Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_14.pdf'); // Example file path for DRHP14
  });
}

// RHP16 button
const rhp16Button = document.querySelector('.rhp16');
if (rhp16Button) {
  rhp16Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_16.pdf'); // Example file path for RHP16
  });
}

// DRHP16 button
const drhp16Button = document.querySelector('.drhp16');
if (drhp16Button) {
  drhp16Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_16.pdf'); // Example file path for DRHP16
  });
}

// RHP18 button
const rhp18Button = document.querySelector('.rhp18');
if (rhp18Button) {
  rhp18Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_18.pdf'); // Example file path for RHP18
  });
}

// DRHP18 button
const drhp18Button = document.querySelector('.drhp18');
if (drhp18Button) {
  drhp18Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_18.pdf'); // Example file path for DRHP18
  });
}

// RHP20 button
const rhp20Button = document.querySelector('.rhp20');
if (rhp20Button) {
  rhp20Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_20.pdf'); // Example file path for RHP20
  });
}

// DRHP20 button
const drhp20Button = document.querySelector('.drhp20');
if (drhp20Button) {
  drhp20Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_20.pdf'); // Example file path for DRHP20
  });
}

// RHP22 button
const rhp22Button = document.querySelector('.rhp22');
if (rhp22Button) {
  rhp22Button.addEventListener('click', function() {
      downloadFile('./files/rhp_file_22.pdf'); // Example file path for RHP22
  });
}

// DRHP22 button
const drhp22Button = document.querySelector('.drhp22');
if (drhp22Button) {
  drhp22Button.addEventListener('click', function() {
      downloadFile('./files/drhp_file_22.pdf'); // Example file path for DRHP22
  });
}
  
   
  
    
});
  