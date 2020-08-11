({
    handleLikeButtonClick : function (cmp) {
        cmp.set('v.liked', !cmp.get('v.liked'));
    },
    handleDislikeButtonClick: function (cmp) {
        cmp.set('v.disliked', !cmp.get('v.disliked'));
    }
});
