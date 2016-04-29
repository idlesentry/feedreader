$(function() {

    describe('RSS Feeds', function() {

        //made to fail by removing any definition in JSON (i.e. name: ,)
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        //made to fail by removing text inside url definition in JSON (i.e. url: '',)
        it('has URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        //made to fail by removing text inside name definition in JSON (i.e. name: '',)
        it('has name', function() {
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
            $('.menu-icon-link').trigger('click');
            expect(document.body.className).not.toBe('menu-hidden');

            $('.menu-icon-link').trigger('click');
            expect(document.body.className).toBe('menu-hidden');

        });
    });

    describe('Initial Entries', function() {

        //made to fail by removing '[id]' from 'feedUrl = allFeeds[id].url' in app.js
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should make sure that loadFeed has at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        //made to fail by removing brackets from '{{title}}' and '{{contentSnippet}}' in index.html
        beforeEach(function(done) {
            $('.feed').empty()

            loadFeed(0, function() {
                before = $('.feed').text();
            });

            loadFeed(1, function() {
                after = $('.feed').text();
                done();
            });
        });

        it('should make sure that loadFeed changes content', function(done) {
            expect(before).not.toEqual(after)
            done();
        });
    });
}());