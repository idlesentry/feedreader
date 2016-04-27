/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

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
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL', function() {
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name', function() {
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
            });
        });
    });

    describe('The Menu', function() {
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('has menu hidden by default', function() {
            expect($('body').hasClass('slide-menu')).toBe(false);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        var body = document.body;

        it('has menu display when clicked', function() {
            $('.menu-icon-link').trigger('click');
              expect(body.className).not.toBe('menu-hidden');

            $('.menu-icon-link').trigger('click');
              expect(body.className).toBe('menu-hidden');

        });
    });

    describe('Initial Entries', function() {
        beforeEach(function(done){
            loadFeed(0,done);
        });

        it("should make sure that loadFeed has at least one entry", function(done){
            expect($('.feed').children().length).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {
        beforeEach(function(done){
            $('.feed').empty()

            loadFeed(0, function() {
                before = $('.feed').find("h2").text();
            });

            loadFeed(1, function() {
                after = $('.feed').find("h2").text();
                done();
            });
        });

        it('should make sure that loadFeed changes content', function(done){
            expect(before).not.toEqual(after)
            done();
        });
    });

}());