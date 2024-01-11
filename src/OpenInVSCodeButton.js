
import React from 'react';

const OpenInVSCodeButton = ({ repositoryUrl, accessToken }) => {
  const openInVSCode = () => {
    // Construct the URL with the access token
    const vscodeUrl = `vscode://vscode.github-authentication/did-authenticate?windowid=1&code=code&state=state&repo=${encodeURIComponent(repositoryUrl)}&token=${accessToken}`;
    window.location.href = vscodeUrl;
  };

  return (
    <div>
      <h1>Open GitHub Repository in VSCode</h1>
      <button onClick={openInVSCode}>Open in VSCode</button>
    </div>
  );
};

export default OpenInVSCodeButton;


