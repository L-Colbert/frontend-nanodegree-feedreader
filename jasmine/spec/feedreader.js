/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function () {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function () {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URL\'s are defined and are not empty', () => {
            allFeeds.forEach(element => {
                expect(element.url).toBeDefined();
                expect(element.url).not.toBe("");
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined and are not empty', () => {
            allFeeds.forEach(element => {
                expect(element.name).toBeDefined();
                expect(element.name).not.toBe("");
            });
        });
    });


    /* This suite contains tests pertaining to the visibility of the site's menu */
    describe('The Menu', () => {
        /* Test that ensures the menu element is
        * hidden by default. You'll have to analyze the HTML and
        * the CSS to determine how we're performing the
        * hiding/showing of the menu element.
        */
        const menuIcon = document.querySelector('.menu-icon-link');
        const classList = document.querySelector('body').classList;

        it('is hidden', () => {
            expect(classList).toContain('menu-hidden');
        });

        /* Test that ensures the menu changes
        * visibility when the menu icon is clicked. This test
        * should have two expectations: does the menu display when
        * clicked and does it hide when clicked again.
        */
        it('changes visibility when the menu icon is clicked', () => {

            menuIcon.click();
            expect(classList.contains('menu-hidden')).toBe(false);
            menuIcon.click();
            expect(classList.contains('menu-hidden')).toBe(true);

        });
    });

    /* Ths suite deals with the feed entries" */
    describe('Initial Entries', () => {
        /* Test that ensures when the loadFeed function is called
        * and completes its work, there is at least a single 
        *.entry element within the .feed container.
        */


        beforeEach((done) => {
            loadFeed(0, done);
        })

        it('are present', () => {
            let entryList = document.querySelectorAll('.feed .entry-link .entry');

            expect(entryList.length).toBeGreaterThan(0);
        });
    });

    /* This suite deals with the feed's content */
    describe('New Feed Selection', () => {
        /* Test that ensures when a new feed is loaded
        * by the loadFeed function that the content actually changes.
        * Remember, loadFeed() is asynchronous.
        */
        let feedOne,
            feedTwo;

        beforeEach((done) => {
            loadFeed(0, () => {
                feedOne = document.querySelector('.feed').innerHTML;
                loadFeed(1, () => {
                    feedTwo = document.querySelector('.feed').innerHTML;
                    done();
                });
            });
        });

        it('prompts content change', () => {
            expect(feedOne).not.toEqual(feedTwo);
        });
    })
}());
