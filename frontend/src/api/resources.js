// Simulating API calls
export const fetchResearchData = (category) => {
  return new Promise((resolve) => {
    // Here you'd fetch data from a verified resource provider API
    const data = [
      {
        title: `Research on ${category}`,
        description: "Detailed research data on mental health issues.",
        link: "https://some-verified-link.com"
      },
    ];
    resolve(data);
  });
};

export const fetchUserSuggestedData = () => {
  return new Promise((resolve) => {
    // Simulate user suggestions from a database or API
    const data = [
      {
        title: "My Journey with Depression",
        description: "A blog post sharing personal experiences.",
        type: "blog",
        link: "https://user-blog.com/depression"
      },
      {
        title: "Overcoming Anxiety - My Story",
        description: "A video blog on overcoming anxiety.",
        type: "video",
        link: "https://user-video.com/anxiety"
      }
    ];
    resolve(data);
  });
};
