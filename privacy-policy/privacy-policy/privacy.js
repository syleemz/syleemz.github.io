async function includeContent() {
    try {
      const headerResponse = await fetch('header.txt');
      const headerContent = await headerResponse.text();
      document.getElementById('header-container').innerHTML = headerContent;

      const footerResponse = await fetch('footer.txt');
      const footerContent = await footerResponse.text();
      document.getElementById('footer-container').innerHTML = footerContent;
    } catch (error) {
      console.error('Error including content:', error);
    }
  }

  window.addEventListener('load', includeContent);