# Git Lab Local Project

A small static web project for the Git operations experiment. This GitHub-only run uses GitHub.com’s web interface for file edits, branches, commits, and pull requests.

## Files

- `index.html` — page structure
- `style.css` — page styling
- `script.js` — interactive Git tip button
- `branch-demo.txt` — added on a feature branch and merged through a pull request

## Initial Git Setup

The original local initialization and push procedure was recorded as:

```bash
git init
git status
git add .
git commit -m "Initial commit"
git branch -m main
git remote add origin git@github.com:Rohansagar08/git-lab-local-project.git
git push -u origin main
```

## GitHub Web Workflow

The branch `feature/github-ui-branch-demo` was created from `main`. The file `branch-demo.txt` was added there, compared with `main`, and merged through pull request #1. The merged change is now visible on `main`.

GitHub’s web editor records each edit as a commit on the selected remote branch. It does not show a local working tree or staged/unstaged `git status` output.
