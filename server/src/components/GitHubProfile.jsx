import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../index.css";

const GitHubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [languages, setLanguages] = useState({});
  const [contributions, setContributions] = useState({
    lastYear: 0,
    thisYear: 0,
    total: 0,
  });

  // Replace with your actual GitHub token
  const token = process.env.REACT_APP_GITHUB_TOKEN;


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the GitHub profile
        const profileResponse = await axios.get('https://api.github.com/users/MUKILAN019', {
          headers: {
            Authorization: `token ${token}`,
          },
        });
        setProfile(profileResponse.data);

        // Fetch repositories
        const reposResponse = await axios.get(profileResponse.data.repos_url, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        const repos = reposResponse.data;
        const langCount = {};
        let totalRepoCount = 0; // Total count of repositories with a defined language

        // Count the occurrences of each language
        repos.forEach((repo) => {
          if (repo.language) {
            langCount[repo.language] = (langCount[repo.language] || 0) + 1;
            totalRepoCount++; // Increment totalRepoCount for each repo with a language
          }
        });

        // Calculate percentage of each language
        const langPercentage = {};
        for (const [language, count] of Object.entries(langCount)) {
          langPercentage[language] = ((count / totalRepoCount) * 100).toFixed(2); // Calculate percentage and fix to 2 decimal places
        }

        setLanguages(langPercentage);

        // Fetch contribution events
        const contributionResponse = await axios.get(`https://api.github.com/users/MUKILAN019/events`, {
          headers: {
            Authorization: `token ${token}`,
          },
        });

        const events = contributionResponse.data;

        let lastYearCount = 0;
        let thisYearCount = 0;

        const currentYear = new Date().getFullYear();
        const lastYear = currentYear - 1;

        // Set of event types that count towards contributions
        const contributionEventTypes = [
          'PushEvent',
          'PullRequestEvent',
          'IssuesEvent',
          'ForkEvent',
          'WatchEvent',
        ];

        events.forEach((event) => {
          const eventDate = new Date(event.created_at);
          const year = eventDate.getFullYear();

          if (contributionEventTypes.includes(event.type)) {
            if (year === lastYear) {
              lastYearCount++;
            } else if (year === currentYear) {
              thisYearCount++;
            }
          }
        });

        // Update the contributions state
        setContributions({
          lastYear: lastYearCount,
          thisYear: thisYearCount,
          total: lastYearCount + thisYearCount,
        });

      } catch (error) {
        console.error('Error fetching GitHub profile or repositories:', error);
      }
    };

    fetchData();
  }, [token]);

  return (
    <div className=''>
      <div className='github-profile-container'>
        {profile ? (
          <div className='totalDiv'>
            {/* Profile Stats Table */}
            <table className="profile-table">
              <thead>
                <tr>
                  <th>Profile Stats</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>{profile.name}</td>
                </tr>
                <tr>
                  <td>Total Repositories</td>
                  <td>{profile.public_repos}</td>
                </tr>
                <tr>
                  <td>Followers</td>
                  <td>{profile.followers}</td>
                </tr>
                <tr>
                  <td>Following</td>
                  <td>{profile.following}</td>
                </tr>
                <tr>
                  <td>Last Year Contributions</td>
                  <td>{contributions.lastYear}</td>
                </tr>
                <tr>
                  <td>This Year Contributions</td>
                  <td>{contributions.thisYear}</td>
                </tr>
                <tr>
                  <td>Total Contributions</td>
                  <td>{contributions.total}</td>
                </tr>
              </tbody>
            </table>

            {/* Most Used Languages Table */}
            <table className="languages-table">
              <thead>
                <tr>
                  <th>Language</th>
                  <th>Percentage Used</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(languages).map(([language, percentage]) => (
                  <tr key={language}>
                    <td>{language}</td>
                    <td className='percent'>{percentage} %</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default GitHubProfile;
