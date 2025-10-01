fetch(`https://api.github.com/users/zdenko-gera`, {})
    .then(response => response.json())
    .then(data => {
        const repoCount = data.public_repos;
        document.getElementById('repo-count').innerText += ' ' + repoCount;
    })
    .catch(error => console.error(error));