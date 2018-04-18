module.exports = {
  '{actor} commented on commit': '{actor} commented on commit',
  '{actor} created branch {ref} at {repo}':
    '{actor} created branch {ref} at {repo}',
  '{actor} created tag {ref} at {repo}': '{actor} created tag {ref} at {repo}',
  '{actor} created repository {repo}': '{actor} created repository {repo}',
  '{actor} deleted branch {ref} at {repo}':
    '{actor} deleted branch {ref} at {repo}',
  '{actor} deleted tag {ref} at {repo}': '{actor} deleted tag {ref} at {repo}',
  '{actor} forked {repo} at {fork}': '{actor} forked {repo} at {fork}',
  '{actor} created the {repo} wiki': '{actor} created the {repo} wiki',
  '{actor} edited the {repo} wiki': '{actor} edited the {repo} wiki',
  '{actor} commented on pull request {issue} at {repo}':
    '{actor} commented on pull request {issue} at {repo}',
  '{actor} commented on issue {issue} at {repo}':
    '{actor} commented on issue {issue} at {repo}',
  '{actor} opened issue {issue} at {repo}':
    '{actor} opened issue {issue} at {repo}',
  '{actor} reopened issue {issue} at {repo}':
    '{actor} reopened issue {issue} at {repo}',
  '{actor} closed issue {issue} at {repo}':
    '{actor} closed issue {issue} at {repo}',
  '{actor} edited {member} at {repo}': '{actor} edited {member} at {repo}',
  '{actor} removed {member} at {repo}': '{actor} removed {member} at {repo}',
  '{actor} added {member} at {repo}': '{actor} added {member} at {repo}',
  '{actor} made {repo} public': '{actor} made {repo} public',
  '{actor} opened pull request {pr} at {repo}':
    '{actor} opened pull request {pr} at {repo}',
  '{actor} reopened pull request {pr} at {repo}':
    '{actor} reopened pull request {pr} at {repo}',
  '{actor} merged pull request {pr} at {repo}':
    '{actor} merged pull request {pr} at {repo}',
  '{actor} closed pull request {pr} at {repo}':
    '{actor} closed pull request {pr} at {repo}',
  '{actor} commented on pull request {pr} at {repo}':
    '{actor} commented on pull request {pr} at {repo}',
  '{actor} pushed to {ref} at {repo}': '{actor} pushed to {ref} at {repo}',
  '{actor} published release {id}': '{actor} published release {id}',
  '{actor} starred {repo}': '{actor} starred {repo}',
  'One of the most feature-rich GitHub clients that is 100% free':
    'One of the most feature-rich GitHub clients that is 100% free',
  auth: {
    login: {
      connectingToGitHub: 'Connecting to GitHub...',
      preparingGitPoint: 'Preparing GitPoint...',
      cancel: 'CANCEL',
      troubles: "Can't login?",
      welcomeTitle: 'Welcome to GitPoint',
      welcomeMessage:
        'One of the most feature-rich GitHub clients that is 100% free',
      notificationsTitle: 'Control notifications',
      notificationsMessage:
        'View and control all of your unread and participating notifications',
      reposTitle: 'Repositories and Users',
      reposMessage:
        'Easily obtain repository, user and organization information',
      issuesTitle: 'Issues and Pull Requests',
      issuesMessage:
        'Communicate on conversations, merge pull requests and more',
      signInButton: 'SIGN IN',
    },
    networkError: 'Oops! it seems that you are not connected to the internet!',
    welcome: {
      welcomeTitle: 'Welcome to GitPoint',
    },
    events: {
      welcomeMessage:
        "Welcome! This is your news feed - it'll help you keep up with recent activity on repositories you watch and people you follow.",
      commitCommentEvent: 'commented on commit',
      createEvent: 'created {{object}}',
      deleteEvent: 'deleted {{object}}',
      issueCommentEvent: '{{action}} on {{type}}',
      issueEditedEvent: '{{action}} their comment on {{type}}',
      issueRemovedEvent: '{{action}} their comment on {{type}}',
      issuesEvent: '{{action}} issue',
      publicEvent: {
        action: 'made',
        connector: 'public',
      },
      pullRequestEvent: '{{action}} pull request',
      pullRequestReviewEvent: '{{action}} pull request review',
      pullRequestReviewCommentEvent: '{{action}} on pull request',
      pullRequestReviewEditedEvent: '{{action}} their comment on pull request',
      pullRequestReviewDeletedEvent: '{{action}} their comment on pull request',
      releaseEvent: '{{action}} release',
      atConnector: 'at',
      toConnector: 'at',
      types: {
        pullRequest: 'pull request',
        issue: 'issue',
      },
      objects: {
        repository: 'repository',
        branch: 'branch',
        tag: 'tag',
      },
      actions: {
        added: 'added',
        created: 'created',
        edited: 'edited',
        deleted: 'deleted',
        assigned: 'assigned',
        unassigned: 'unassigned',
        labeled: 'labeled',
        unlabeled: 'unlabeled',
        opened: 'opened',
        milestoned: 'milestoned',
        demilestoned: 'demilestoned',
        closed: 'closed',
        reopened: 'reopened',
        review_requested: 'review requested',
        review_request_removed: 'review request removed',
        submitted: 'submitted',
        dismissed: 'dismissed',
        published: 'published',
        publicized: 'publicized',
        privatized: 'privatized',
        starred: 'starred',
        pushedTo: 'pushed to',
        forked: 'forked',
        commented: 'commented',
        removed: 'removed',
      },
    },
    profile: {
      orgsRequestApprovalTop: "Can't see all your organizations?",
      orgsRequestApprovalBottom: 'You may have to request approval for them.',
      codePushCheck: 'Check for update',
      codePushChecking: 'Checking for update...',
      codePushUpdated: 'App is up to date',
      codePushAvailable: 'Update is available!',
      codePushNotApplicable: 'Not applicable in debug mode',
    },
    userOptions: {
      donate: 'Make a donation',
      title: 'Options',
      language: 'Language',
      privacyPolicy: 'Privacy Policy',
      signOut: 'Sign Out',
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      effectiveDate: 'Last updated: July 15, 2017',
      introduction:
        "We're glad you decided to use GitPoint. This Privacy Policy is here to inform you about what we do — and do not do — with our user's data.",
      userDataTitle: 'USER DATA',
      userData1:
        "We do not do anything with your GitHub information. After authenticating, the user's OAuth token is persisted directly on their device storage. It is not possible for us to retrieve that information. We never view a user's access token nor store it whatsoever.",
      userData2:
        "This means that in no way, shape or form do we ever view, use or share a user's GitHub data. If private data ever becomes visible at any point we will not record or view it. If it happens to be accidentally recorded, we will delete it immediately using secure erase methods. Again, we've set up authentication specifically so that this never happens.",
      analyticsInfoTitle: 'ANALYTICS INFORMATION',
      analyticsInfo1:
        'We currently use Google Analytics and iTunes App Analytics to help us measure traffic and usage trends for the GitPoint. These tools collect information sent by your device including device and platform version, region and referrer. This information cannot reasonably be used to identify any particular individual user and no personal information is extracted.',
      analyticsInfo2:
        "If we happen to include another third party platform to collect stack traces, error logs or more analytics information, we'll make sure that user data remains anonymized and encrypted.",
      openSourceTitle: 'OPEN SOURCE',
      openSource1:
        'GitPoint is open source and the history of contributions to the platform will always be visible to the public.',
      openSource2:
        'With each contribution to the app, code review is always performed to prevent anybody from including malicious code of any kind.',
      contactTitle: 'CONTACT',
      contact1:
        'Thank you for reading our Privacy Policy. We hope you enjoy using GitPoint as much as we enjoyed building it.',
      contact2:
        'If you have any questions about this Privacy Policy or GitPoint in general, please file an issue in the',
      contactLink: 'GitPoint repository',
    },
  },
  notifications: {
    main: {
      unread: 'unread',
      participating: 'participating',
      all: 'all',
      unreadButton: 'Unread',
      participatingButton: 'Participating',
      allButton: 'All',
      retrievingMessage: 'Retrieving notifications',
      noneMessage: "You don't have any notifications of this type",
      markAllAsRead: 'Mark all as read',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repositories',
      userButton: 'Users',
      searchingMessage: 'Searching for {{query}}',
      searchMessage: 'Search for any {{type}}',
      repository: 'repository',
      user: 'user',
      noUsersFound: 'No users found :(',
      noRepositoriesFound: 'No repositories found :(',
    },
  },
  user: {
    profile: {
      userActions: 'User Actions',
      unfollow: 'Unfollow',
      follow: 'Follow',
    },
    repositoryList: {
      title: 'Repositories',
    },
    starredRepositoryList: {
      title: 'Stars',
      text: 'Stars',
    },
    followers: {
      title: 'Followers',
      text: 'Followers',
      followsYou: 'Follows you',
    },
    following: {
      title: 'Following',
      text: 'Following',
      followingYou: 'Following',
    },
  },
  repository: {
    main: {
      notFoundRepo: 'Repository is not found',
      unknownLanguage: 'Unknown',
      shareRepositoryTitle: 'Share {{repoName}}',
      shareRepositoryMessage: 'Check out {{repoName}} on GitHub. {{repoUrl}}',
      repoActions: 'Repository Actions',
      forkAction: 'Fork',
      starAction: 'Star',
      unstarAction: 'Unstar',
      shareAction: 'Share',
      unwatchAction: 'Unwatch',
      watchAction: 'Watch',
      ownerTitle: 'OWNER',
      contributorsTitle: 'CONTRIBUTORS',
      noContributorsMessage: 'No contributors found',
      sourceTitle: 'SOURCE',
      readMe: 'README',
      viewSource: 'View Code',
      issuesTitle: 'ISSUES',
      noIssuesMessage: 'No issues',
      noOpenIssuesMessage: 'No open issues',
      viewAllButton: 'View All',
      newIssueButton: 'New Issue',
      pullRequestTitle: 'PULL REQUESTS',
      noPullRequestsMessage: 'No pull requests',
      noOpenPullRequestsMessage: 'No open pull requests',
      starsTitle: 'Stars',
      forksTitle: 'Forks',
      forkedFromMessage: 'forked from',
      starred: 'Starred',
      watching: 'Watching',
      watchers: 'Watchers',
      topicsTitle: 'TOPICS',
    },
    codeList: {
      title: 'Code',
    },
    issueList: {
      title: 'Issues',
      openButton: 'Open',
      closedButton: 'Closed',
      searchingMessage: 'Searching for {{query}}',
      noOpenIssues: 'No open issues found!',
      noClosedIssues: 'No closed issues found!',
    },
    pullList: {
      title: 'Pull Requests',
      openButton: 'Open',
      closedButton: 'Closed',
      searchingMessage: 'Searching for {{query}}',
      noOpenPulls: 'No open pull requests found!',
      noClosedPulls: 'No closed pull requests found!',
    },
    pullDiff: {
      title: 'Diff',
      numFilesChanged: '{{numFilesChanged}} files',
      new: 'NEW',
      deleted: 'DELETED',
      fileRenamed: 'File renamed without any changes',
    },
    readMe: {
      readMeActions: 'README Actions',
      noReadMeFound: 'No README.md found',
    },
  },
  organization: {
    main: {
      membersTitle: 'MEMBERS',
      descriptionTitle: 'DESCRIPTION',
    },
    organizationActions: 'Organization Actions',
  },
  issue: {
    settings: {
      title: 'Settings',
      pullRequestType: 'Pull Request',
      issueType: 'Issue',
      applyLabelButton: 'Apply Label',
      noneMessage: 'None yet',
      labelsTitle: 'LABELS',
      assignYourselfButton: 'Assign Yourself',
      assigneesTitle: 'ASSIGNEES',
      actionsTitle: 'ACTIONS',
      unlockIssue: 'Unlock {{issueType}}',
      lockIssue: 'Lock {{issueType}}',
      closeIssue: 'Close {{issueType}}',
      reopenIssue: 'Reopen {{issueType}}',
      areYouSurePrompt: 'Are you sure?',
      applyLabelTitle: 'Apply a label to this issue',
    },
    comment: {
      commentActions: 'Comment Actions',
      editCommentTitle: 'Edit Comment',
      editAction: 'Edit',
      deleteAction: 'Delete',
    },
    main: {
      assignees: 'Assignees',
      mergeButton: 'Merge Pull Request',
      noDescription: 'No description provided.',
      lockedCommentInput: 'Locked, but you can still comment...',
      commentInput: 'Add a comment...',
      lockedIssue: 'Issue is locked',
      states: {
        open: 'Open',
        closed: 'Closed',
        merged: 'Merged',
      },
      screenTitles: {
        issue: 'Issue',
        pullRequest: 'Pull Request',
      },
      openIssueSubTitle: '#{{number}} opened {{time}} ago by {{user}}',
      closedIssueSubTitle: '#{{number}} by {{user}} was closed {{time}} ago',
      issueActions: 'Issue Actions',
    },
    newIssue: {
      title: 'New Issue',
      missingTitleAlert: 'You need to have an issue title!',
      issueTitle: 'Issue Title',
      writeATitle: 'Write a title for your issue here',
      issueComment: 'Issue Comment',
      writeAComment: 'Write a comment for your issue here',
    },
    pullMerge: {
      title: 'Merge Pull Request',
      createMergeCommit: 'Create a merge commit',
      squashAndMerge: 'Squash and merge',
      merge: 'merge',
      squash: 'squash',
      missingTitleAlert: 'You need to have a commit title!',
      commitTitle: 'Commit Title',
      writeATitle: 'Write a title for your commit here',
      commitMessage: 'Commit Message',
      writeAMessage: 'Write a message for your commit here',
      mergeType: 'Merge Type',
      changeMergeType: 'Change Merge Type',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Stars',
    orgs: 'ORGANIZATIONS',
    noOrgsMessage: 'No organizations',
    info: 'INFO',
    company: 'Company',
    location: 'Location',
    email: 'Email',
    website: 'Website',
    repositories: 'Repositories',
    cancel: 'Cancel',
    yes: 'Yes',
    ok: 'OK',
    submit: 'Submit',
    relativeTime: {
      lessThanXSeconds: '{{count}}s',
      xSeconds: '{{count}}s',
      halfAMinute: '30s',
      lessThanXMinutes: '{{count}}m',
      xMinutes: '{{count}}m',
      aboutXHours: '{{count}}h',
      xHours: '{{count}}h',
      xDays: '{{count}}d',
      aboutXMonths: '{{count}}mo',
      xMonths: '{{count}}mo',
      aboutXYears: '{{count}}y',
      xYears: '{{count}}y',
      overXYears: '{{count}}y',
      almostXYears: '{{count}}y',
    },
    abbreviations: {
      thousand: 'k',
    },
    openInBrowser: 'Open in Browser',
  },
};
