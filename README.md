# Toy Problems

Welcome to the central repo for JSP Toy Problems. This repository will be updated every morning with a new
code challenge.

## Using this Repository

You'll find each day's toy problem in its own folder.

## Getting a Copy of the Repo

If you haven't already, fork the repository on GitHub and clone your newly created
repo down to your computer.

## Pair Coding Roles

UPDATED 9/29: Please review [pair coding roles](https://github.com/hackreactor/hrjsp1-toy-problems/blob/master/PAIRING_ROLES.md) before beginning a paired session.

## Solutions and Testing

Now that you are in JSP, we're not going to be employing our old friend Spectator Bot any longer. When challenges live on Leetcode, you'll be able to run their  tests, but the real goal here is to remove the crutch of coding to pass predetermined tests and focus instead on articulating the logic of the code you're building. Each week, we'll focus on a new skillset. Links to toy problem solutions will be provided, but your toy problems will not be "graded" in any way.

## Submitting Your Solutions

You will not be submitting your code to JSP. We Slack an honor-system-based toy problem survey (approximately 30 seconds long) at the end of each module.

## Updating the Repository

Every morning, when a new toy problem is added, you'll need to sync your version of
the repo with JSP's. Git won't automatically pull in upstream changes for
you; it trusts that you'll pull them in as needed. Do so by giving Git a reference
to hackreactor's version of the repo:

    git remote add upstream https://github.com/hackreactor/hrjsp1-toy-problems.git

After you've done that, updating your repo is as simple as running the following:

    git checkout master       // Your fork's master branch
    git pull upstream master  // Your class's master branch

This will check out your branch and tell git to grab any changes made to the main
repository and merge them into your branch.
