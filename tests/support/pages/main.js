define(function() {
  // the page object is created as a constructor
  // so we can provide the remote Command object
  // at runtime
  function IndexPage(remote) {
    this.remote = remote.get(require.toUrl('dist/index.html'));
  }

  IndexPage.prototype = {
    constructor: IndexPage,

    // Returns a promise that resolves to the title of the page
    get title() {
      return this.remote.getPageTitle();
    },
  };

  return IndexPage;
});
