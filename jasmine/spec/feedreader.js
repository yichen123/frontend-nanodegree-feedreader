/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* This is our first test suite - a test suite just contains
 * a related set of tests. This suite is all about the RSS
 * feeds definitions, the allFeeds variable in our application.
 */

describe('RSS Feeds', function() {
    /* This is our first test - it tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty. Experiment with this before you get started on
     * the rest of this project. What happens when you change
     * allFeeds in app.js to be an empty array and refresh the
     * page?
     */
    it('are defined', function() {
        expect(allFeeds).toBeDefined();
    });

    it('are non-empty', function() {
        expect(allFeeds.length).not.toBe(0);
    });


    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */
    it('each feed contains URL', function() {
        for (var i = 0, len = allFeeds.length; i < len; i++) {
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url.length).not.toBe(0);
        }
    });


    /* a test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */

    it('each feed contains name', function() {
        for (var i = 0, len = allFeeds.length; i < len; i++) {
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name.length).not.toBe(0);
        }
    });

});

/* test suite named "The menu" */
describe('The menu', function() {
    var body = $('body');
    /* test that ensures the menu element is
     * hidden by default.
     */
    it('is hidden initialy', function() {
        expect(body.hasClass('menu-hidden')).toBe(true);
    });

    /* TODO: Write a test that ensures the menu changes
     * visibility when the menu icon is clicked. This test
     * should have two expectations: does the menu display when
     * clicked and does it hide when clicked again.
     */
    it('changes its visibility when menu icon is clicked', function() {
        $('a.menu-icon-link').click();
        expect(body.hasClass('menu-hidden')).toBe(false);
        $('a.menu-icon-link').click();
        expect(body.hasClass('menu-hidden')).toBe(true);
    });

});

/* We're placing rest of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
/* test suite named "Initial Entries" */
describe('Initial Entries', function() {
    beforeEach(function(done) {
        setTimeout(function() {
            loadFeed(0, done);
        }, 3);
    });
    /* a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container
     */
    it('has at least one .entry element in .feed', function() {
        expect($('.feed').has('.entry').length).not.toBe(0);
    });
});


// a new test suite named "New Feed Selection"
describe('New Feed Selection', function() {
    /* a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.

     */
    var headTitle = $('.header-title');
    var oldTitle,
        newTitle;

    beforeEach(function(done) {
        setTimeout(function() {
            loadFeed(0, function() {
                oldTitle = headTitle.html();
                done();
            });
        }, 3);
    });
    beforeEach(function(done) {
        setTimeout(function() {
            loadFeed(1, function() {
                newTitle = headTitle.html();
                done();
            });
        }, 3);
    });    it('changes content', function() {
        expect(oldTitle).not.toBe(newTitle);
    });
});
