$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('has URL', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeTruthy();
            });
        });

        it('has name', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            });
        });
    });

    describe('The Menu', function() {

        it('has menu hidden by default', function() {
            expect(document.body.classList).toContain('menu-hidden');
        });

        it('has menu display when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect(document.body.className).not.toBe('menu-hidden');

            $('.menu-icon-link').trigger('click');
            expect(document.body.className).toBe('menu-hidden');

        });
    });

    describe('Initial Entries', function() {

        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('should make sure that loadFeed has at least one entry', function(done) {
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

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