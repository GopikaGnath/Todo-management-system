// src/services/gistService.js
import axios from 'axios';

export const exportToGist = async (markdownContent, projectTitle) => {
  const response = await axios.post('https://api.github.com/gists', {
    files: {
      [`${projectTitle}.md`]: {
        content: markdownContent,
      },
    },
    public: false,
  });
  return response.data.html_url;
};
