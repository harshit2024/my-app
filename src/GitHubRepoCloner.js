// src/GitHubRepoCloner.js
import React, { useState } from 'react';
import axios from 'axios';

const GitHubRepoCloner = () => {
  const [repositoryUrl, setRepositoryUrl] = useState('');

  const cloneRepository = async () => {
    try {
      const response = await axios.post('http://localhost:3001/clone', {
        repositoryUrl,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h2>GitHub Repository Cloner</h2>
      <input
        type="text"
        value={repositoryUrl}
        onChange={(e) => setRepositoryUrl(e.target.value)}
        placeholder="Enter repository URL"
      />
      <button onClick={cloneRepository}>Clone Repository</button>
    </div>
  );
};

export default GitHubRepoCloner;
