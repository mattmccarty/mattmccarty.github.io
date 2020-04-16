---
layout     : wiki
author     : Matt McCarty
date       : 2020-04-01
name       : scm
title      : Source Code Management
description: Managing and tracking changes in our source code.
icon       : scm
category   : root
order      : 1
permalink  : /wiki/scm
---
# Source Code Management

Source Code Management (SCM) refers to the process of versioning and tracking code changes. Developers commit (submit) their code updates where tracking data is then assigned. Uniquely numbered, each revision has a historical reference ID along with the entire changeset. It gives teams of developers the ability to work on the same collection of files, known as repositories, simultaneously. One changeset may merge with or replace another changeset, providing a mechanism for efficiently removing unwanted code. SCM has several monikers, multiple applications, and various workflows, so choosing the right solution may seem difficult - it's not.

Though generic, phrases source control, [version control](https://en.wikipedia.org/wiki/Version_control), and revision control are synonymous with SCM. They indicate the process of tracking changes of any file type, not just code-based files. Software used for versioning code may still track these other file types as well. It merely depends on the use case.

There are many SCM applications, all with unique paradigms. The right solution requires a fundamental knowledge of, at least, the popular options, if not all of them. Today, two open-source projects [Git](https://git-scm.com/) and [Mercurial (hg)](https://www.mercurial-scm.org/), are capturing the market. They're the [distributed version control systems (DVCS)](https://en.wikipedia.org/wiki/Distributed_version_control) of choice. [Subversion (svn)](https://subversion.apache.org/), another open-source alternative, is heavily used as well, but it's an older centralized version control system, and many companies have moved away from it. In many corporate settings, one may find [Perforce](https://www.perforce.com/). It's a proprietary option that supports both distributed and centralized repositories. While these tools are wildly popular, there are, of course, many more.

After selecting the software, it's imperative to implement a workflow known as a branching strategy. Teams and team members will need clear and concise guidelines on how they will deliver their code changes using the SCM software. Several branching patterns exist, especially around the Git community, but many of them apply to other SCM solutions. [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitHub Flow](https://guides.github.com/introduction/flow/), and [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html) are popular choices. Each has its advantages and disadvantages, but they all aim to provide a smooth tracking and deployment process.

SCM may appear to be an overwhelming topic. In reality, it's rather mundane. While the software is sophisticated, using it is easy, so focus on community support. A vast majority of software development companies use [Git](https://git-scm.com/). If in doubt, use it. The branching strategies are more challenging because they are harder to comprehend. Start with the less complicated [GitHub Flow](https://guides.github.com/introduction/flow/). Teams will realize when it's not sufficient anymore. When that occurs, move to a more advanced workflow such as [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html), or [OneFlow](https://www.endoflineblog.com/oneflow-a-git-branching-model-and-workflow).


# Further Reading

- [Wikipedia - Version Control](https://en.wikipedia.org/wiki/Version_control)
- [Wikipedia - Source Code Control System](https://en.wikipedia.org/wiki/Source_Code_Control_System)
- [Wikipedia - List of Version Control Software](https://en.wikipedia.org/wiki/List_of_version-control_software)
- [Wikipedia - Distributed Version Control](https://en.wikipedia.org/wiki/Distributed_version_control)
- [Wikipedia - List of Version Control Software](https://en.wikipedia.org/wiki/List_of_version-control_software)
- [Wikipedia - Comparison of Version Control Software](https://en.wikipedia.org/wiki/Comparison_of_version-control_software)
- [Atlassian - Source Code Management](https://www.atlassian.com/git/tutorials/source-code-management)
- [Amazon - Source Control](https://aws.amazon.com/devops/source-control/)