require.config({
    paths: {
        jquery: 'jquery.min'
    }
});
 
require(['jquery'], function($) {
    alert($().jquery);
});