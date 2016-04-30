$(function() {

    describe('RSS Feeds', function() {

        //made to fail by removing any definition in JSON (i.e. name: ,)
        it('is defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //made to fail by removing text inside url definition in JSON (i.e. url: '',)
        it('has URL that is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        //made to fail by removing text inside name definition in JSON (i.e. name: '',)
        it('has name that is defined and is not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });

    describe('The Menu', function() {

        //made to fail by changing title of 'menu-hidden' class from index.html
        it('has menu hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });

        //made to fail by changing title of 'menu-hidden' class in 'menu-icon.on('click') function in app.js
        it('has menu display when clicked', function() {
            expect($("body").hasClass('menu-hidden')).toBe(true);

            //checked with console.log output of 'document.body.className' before and after click is triggered
            expect(document.body.className).toBeTruthy();
            $('.menu-icon-link').trigger('click');
            expect(document.body.className).toBeFalsy();

            //extra click to get the menu out of the way after testing!
            $('.menu-icon-link').trigger('click');
        });
    });

    describe('Initial Entries', function() {

        //made to fail by removing '[id]' from 'feedUrl = allFeeds[id].url' in app.js
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should make sure that loadFeed has at least one entry', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
    });

    describe('New Feed Selection', function() {

        //made to fail by removing '[id]' from 'var feedUrl = allFeeds[id].url' to use only one feed
        beforeEach(function(done) {
            $('.feed').empty();

            loadFeed(0, function() {
                before = $('.feed').text();

                loadFeed(1, function() {
                    after = $('.feed').text();
                    done();
                });
            });
        });

        it('should make sure that loadFeed changes content', function(done) {
            //checked with console.log output of variables 'before' and 'after'
            expect(before).not.toEqual(after);
            done();
        });
    });
}());