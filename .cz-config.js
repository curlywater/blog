module.exports = {
    types: [
      { value: 'publish', name: 'publish:     A new blog' },
      { value: 'update', name: 'update:      A existing blog change' },
      { value: 'draft', name: 'draft:      Add a blog to draft' },
      { value: 'category', name: 'category:     Change category structure' },
      {
        value: 'style',
        name:
          'style:    change blog style',
      },
      {
        value: 'build',
        name: 'build:     Improve blog experience',
      },
    ],
  
    scopes: [],
  
    allowTicketNumber: false,
    isTicketNumberRequired: false,
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
  
    // it needs to match the value for field type. Eg.: 'fix'
    /*
    scopeOverrides: {
      fix: [
  
        {name: 'merge'},
        {name: 'style'},
        {name: 'e2eTest'},
        {name: 'unitTest'}
      ]
    },
    */
    // override the messages, defaults are as follows
    messages: {
      type: "Select the type of change that you're committing:",
      scope: '\nDenote the SCOPE of this change (optional):',
      // used if allowCustomScopes is true
      customScope: 'Denote the SCOPE of this change:',
      subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
      body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
      breaking: 'List any BREAKING CHANGES (optional):\n',
      footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
  
    allowCustomScopes: true,
    allowBreakingChanges: ['feat', 'fix'],
    // skip any questions you want
    skipQuestions: ['body'],
  
    // limit subject length
    subjectLimit: 100,
    // breaklineChar: '|', // It is supported for fields body and footer.
    // footerPrefix : 'ISSUES CLOSED:'
    // askForBreakingChangeFirst : true, // default is false
  };