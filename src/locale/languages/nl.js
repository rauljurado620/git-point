export const nl = {
  auth: {
    login: {
      welcomeTitle: 'Welkom bij GitPoint',
      welcomeMessage: 'De meest complete GitHub client die geen geld kost',
      notificationsTitle: 'Beheer notificaties',
      notificationsMessage:
        'Bekijk en beheer al je ongelezen en deelnemende notificaties',
      reposTitle: 'Repositories en Gebruikers',
      reposMessage:
        'Verkrijg snel repoisitory, gebruiker en organisatie informatie',
      issuesTitle: 'Issues en Pull Requests',
      issuesMessage: 'Neem deel aan conversaties, merge pull requests en meer',
      signInButton: 'AANMELDEN',
    },
    welcome: {
      welcomeTitle: 'Welbij bij GitPoint',
    },
    events: {
      welcomeMessage:
        'Welkom! Dit is je nieuws tijdlijn - dit helpt je up to date te blijven bij repositories en gebruikers die je volgt.',
      commitCommentEvent: 'heeft een reactie geplaatst op commit',
      createEvent: '{{object}} aangemaakt',
      deleteEvent: '{{object}} verwijderd',
      issueCommentEvent: '{{action}} op {{type}}',
      issueEditedEvent: 'heeft een opmerking {{action}} op {{type}}',
      issueRemovedEvent: 'heeft een opmerking {{action}} bij {{type}}',
      issuesEvent: '{{action}} issue',
      publicEvent: {
        action: 'heeft',
        connector: 'openbaar gemaakt',
      },
      pullRequestEvent: 'heeft pull request {{action}}',
      pullRequestReviewEvent: 'pull request review {{action}} ',
      pullRequestReviewCommentEvent: '{{action}} op pull request',
      pullRequestReviewEditedEvent:
        'heeft een opmerking {{action}} op pull request',
      pullRequestReviewDeletedEvent:
        'heeft een opmerking {{action}} op pull request',
      releaseEvent: '{{action}} release',
      atConnector: 'op',
      toConnector: 'bij',
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
        added: 'toegevoegd',
        created: 'aangemaakt',
        edited: 'bijgewerkt',
        deleted: 'verwijderd',
        assigned: 'toegewezen',
        unassigned: 'niet-toegewezen',
        labeled: 'labeled',
        unlabeled: 'unlabeled',
        opened: 'geopend',
        milestoned: 'milestoned',
        demilestoned: 'demilestoned',
        closed: 'gesloten',
        reopened: 'heropend',
        review_requested: 'review aangevraagd',
        review_request_removed: 'review aangevraag verwijderd',
        submitted: 'ingediend',
        dismissed: 'ontslagen',
        published: 'gepubliceerd',
        publicized: 'publicized',
        privatized: 'privatized',
        starred: 'heeft een ster gegeven aan',
        pushedTo: 'pushed to',
        forked: 'forked',
        commented: 'heeft een opmerking gemaakt',
        removed: 'verwijderd',
      },
    },
    profile: {
      orgsRequestApprovalTop: 'Kan je niet al je organisaites zien?',
      orgsRequestApprovalBottom: 'Je moet misschien om toestemming vragen.',
      codePushCheck: 'Controleer op updates',
      codePushChecking: 'Controleren als er updates zijn...',
      codePushUpdated: 'App is bijgewerkt',
      codePushAvailable: 'Update beschikbaar!',
      codePushNotApplicable: 'Niet beschikbaar in debug mode',
    },
    userOptions: {
      title: 'Opties',
      language: 'Taal',
      privacyPolicy: 'Privacybeleid',
      signOut: 'Uitloggen',
    },
    privacyPolicy: {
      title: 'Privacybeleid',
      effectiveDate: 'Laats ge-updated op: July 15, 2017',
      introduction:
        'We zijn blij dat je voor GitPoint hebt gekozen. Dit privacybeleid is hier om u te informeren over wat wij doen - en niet doen - met de gegevens van onze gebruikers.',
      userDataTitle: 'GEBRUIKERS INFORMATIE',
      userData1:
        'We doen niets met uw GitHub informatie. Na de authenticatie wordt de OAuth-token van de gebruiker rechtstreeks op hun apparaatopslag opgeslagen. Het is niet mogelijk voor ons om die informatie te verkrijgen. Wij zien nooit de toegangscode van een gebruiker en slaan het ook niet op.',
      userData2:
        'Dit betekent dat wij op geen enkele wijze de GitHub-gegevens van een gebruiker ooit kunnen inzien, gebruiken of delen. Als privégegevens ooit zichtbaar worden, zullen we het niet opnemen of bekijken. Als het per ongeluk wordt opgenomen, zullen wij het onmiddellijk verwijderen met veilige verwijderingsmethoden. Nogmaals, wij hebben authentificatie speciaal ingesteld zodat dit nooit gebeurt.',
      analyticsInfoTitle: 'ANALYTICS INFORMATIE',
      analyticsInfo1:
        'We gebruiken op dit moment Google Analytics en iTunes App Analytics om ons te helpen met het meten van verkeer en gebruikstendensen voor het GitPoint. Deze tools verzamelen informatie die door uw apparaat wordt verzonden, inclusief apparaat- en platformversie, regio en verwijzer. Deze informatie kan niet worden gebruikt om een bepaalde individuele gebruiker te identificeren en er worden geen persoonlijke gegevens geëxtraheerd.',
      analyticsInfo2:
        'Als wij een ander platform van derden opnemen om problemen, fouten of meer analytische informatie te verzamelen, zullen wij ervoor zorgen dat de gebruikersgegevens geanonimiseerd en gecodeerd zijn.',
      openSourceTitle: 'OPEN SOURCE',
      openSource1:
        'GitPoint is open source en de geschiedenis van de bijdragen aan het platform is altijd zichtbaar voor het publiek.',
      openSource2:
        'Bij elke bijdrage aan de app wordt er een code review uitgevoerd om te voorkomen dat iemand schadelijke codes toevoegd.',
      contactTitle: 'CONTACT',
      contact1:
        'Bedankt voor het lezen van ons privacybeleid. Wij hopen dat u het leuk vindt om GitPoint te gebruiken net zoals wij het leuk vinden om het te bouwen.',
      contact2:
        'Als u vragen heeft over dit Privacybeleid of GitPoint in het algemeen, gelieve een probleem in de',
      contactLink: 'GitPoint repository',
    },
  },
  notifications: {
    main: {
      unread: 'ongelezen',
      participating: 'deelnemend',
      all: 'Alles',
      unreadButton: 'Ongelezen',
      participatingButton: 'Deelnemend',
      allButton: 'Alles',
      retrievingMessage: 'Notificaties ophalen',
      noneMessage: 'Je hebt geen notificaties met dit type',
    },
  },
  search: {
    main: {
      repositoryButton: 'Repositories',
      userButton: 'Gebruikers',
      searchingMessage: 'Zoeken naar {{query}}',
      searchMessage: 'Zoeken naar {{type}}',
      repository: 'repository',
      user: 'gebruiker',
    },
  },
  user: {
    profile: {
      userActions: 'Gebruiker Acties',
      unfollow: 'Ontvolgen',
      follow: 'Volgen',
    },
    repositoryList: {
      title: 'Repositories',
    },
    followerList: {
      title: 'Volgers',
    },
    followingList: {
      title: 'Volgen',
    },
    followYou: {
      title: 'Volgt jou',
    },
  },
  repository: {
    main: {
      shareRepositoryTitle: 'Delen {{repoName}}',
      shareRepositoryMessage: 'Bekijk {{repoName}} op GitHub. {{repoUrl}}',
      repoActions: 'Repository Acties',
      forkAction: 'Fork',
      starAction: 'Star',
      unstarAction: 'Unstar',
      shareAction: 'Delen',
      unwatchAction: 'Unwatch',
      watchAction: 'Watch',
      ownerTitle: 'EIGENAAR',
      contributorsTitle: 'MEDEWERKERS',
      noContributorsMessage: 'Geen medewerkers gevonden',
      sourceTitle: 'BRON',
      readMe: 'README',
      viewSource: 'Bekijk Code',
      issuesTitle: 'ISSUES',
      noIssuesMessage: 'Geen issues',
      noOpenIssuesMessage: 'Geen open issues',
      viewAllButton: 'Bekijk Alles',
      newIssueButton: 'Nieuw Issue',
      pullRequestTitle: 'PULL REQUESTS',
      noPullRequestsMessage: 'Geen pull requests',
      noOpenPullRequestsMessage: 'Geen open pull requests',
      starsTitle: 'Stars',
      forksTitle: 'Forks',
      forkedFromMessage: 'forked from',
    },
    codeList: {
      title: 'Code',
    },
    issueList: {
      title: 'Issues',
      openButton: 'Open',
      closedButton: 'Gesloten',
      searchingMessage: 'Zoeken naar {{query}}',
      noOpenIssues: 'Geen open issues gevonden!',
      noClosedIssues: 'Geen gesloten issues gevonden!',
    },
    pullList: {
      title: 'Pull Requests',
      openButton: 'Open',
      closedButton: 'Gesloten',
      searchingMessage: 'Zoeken naar {{query}}',
      noOpenPulls: 'Geen open pull requests gevonden!',
      noClosedPulls: 'Geen gesloten pull requests gevonden!',
    },
    pullDiff: {
      title: 'Diff',
      numFilesChanged: '{{numFilesChanged}} files',
      new: 'NIEW',
      deleted: 'VERWIJDERD',
      fileRenamed: 'Bestand hernoemd zonder veranderingen',
    },
  },
  organization: {
    main: {
      membersTitle: 'LEDEN',
      descriptionTitle: 'BESCHRIJVING',
    },
  },
  issue: {
    settings: {
      title: 'Instellingen',
      pullRequestType: 'Pull Request',
      issueType: 'Issue',
      applyLabelButton: 'Voeg label toe',
      noneMessage: 'geen',
      labelsTitle: 'LABELS',
      assignYourselfButton: 'Assign jezelf',
      assigneesTitle: 'ASSIGNEES',
      actionsTitle: 'ACTIES',
      unlockIssue: 'Ontgrendel {{issueType}}',
      lockIssue: 'Vergrendel {{issueType}}',
      closeIssue: 'Sluit {{issueType}}',
      reopenIssue: 'Heropen {{issueType}}',
      areYouSurePrompt: 'Weet je het zeker?',
      applyLabelTitle: 'Voeg een label toe aan deze issue',
    },
    main: {
      assignees: 'Assignees',
      mergeButton: 'Merge Pull Request',
      noDescription: 'Niet voorzien van een beschrijving.',
      lockedCommentInput: 'Gesloten maar je kan nog opmerkingen maken...',
      commentInput: 'Plaats opmerking...',
      commentButton: 'Post',
      lockedIssue: 'Issue is gesloten',
      states: {
        open: 'Open',
        closed: 'Gesloten',
        merged: 'Merged',
      },
      screenTitles: {
        issue: 'Issue',
        pullRequest: 'Pull Request',
      },
    },
    newIssue: {
      title: 'Niew Issue',
      missingTitleAlert: 'Een titel is verplicht!',
      issueTitle: 'Issue title',
      writeATitle: 'Schrijf een titel voor je issue hier',
      issueComment: 'Issue omschrijving',
      writeAComment: 'Schrijf een omschrijving voor je issue hier',
    },
    pullMerge: {
      title: 'Merge Pull Request',
      createMergeCommit: 'Maak een merge commit',
      squashAndMerge: 'Squash en merge',
      merge: 'merge',
      squash: 'squash',
      missingTitleAlert: 'Een commit titel is verplicht!',
      commitTitle: 'Commit Title',
      writeATitle: 'Schrijf een titel voor je commit hier',
      commitMessage: 'Commit samenvatting',
      writeAMessage: 'Schrijf een samenvatting voor je commit hier',
      mergeType: 'Merge Type',
      changeMergeType: 'Verander Merge Type',
    },
  },
  common: {
    bio: 'BIO',
    stars: 'Sterren',
    orgs: 'ORGANISATIES',
    noOrgsMessage: 'Geen organizations',
    info: 'INFO',
    company: 'Bedrijf',
    location: 'Locatie',
    email: 'Email',
    website: 'Website',
    repositories: 'Repositories',
    followers: 'Volgers',
    following: 'Volgen',
    cancel: 'Annuleren',
    yes: 'Ja',
    ok: 'OKE',
    submit: 'Versturen',
    relativeTime: {
      past: '%s',
      s: '%ds',
      m: '%dm',
      mm: '%dm',
      h: '%dh',
      hh: '%dh',
      d: '%dd',
      dd: '%dd',
      M: '%dmo',
      MM: '%dmo',
      y: '%dy',
      yy: '%dy',
    },
  },
};
