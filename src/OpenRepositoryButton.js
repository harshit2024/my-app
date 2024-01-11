import React from 'react';

const OpenRepositoryButton = ({ repositoryUrl }) => {
  const openRepository = () => {
    // Construct the vscode.dev URL
    const vscodeDevUrl = `https://vscode.dev/`+'github.com'+'/'+repositoryUrl;
     console.log(vscodeDevUrl);
    // Open the URL in a new tab or window
    window.open(vscodeDevUrl);
  };

  return (
    <button onClick={openRepository}>
      Open Repository
    </button>
  );
};

export default OpenRepositoryButton;