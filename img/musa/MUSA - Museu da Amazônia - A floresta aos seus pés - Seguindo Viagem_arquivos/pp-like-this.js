function likeThis(postId) {
if (postId != '') {
  jQuery('#iLikeThis-'+postId+' .iLikeThis-off').text('...');
  jQuery.post(blogUrl + "/wp-content/plugins/pp-like-this/like.php",{ id: postId },function(data){ jQuery('#iLikeThis-'+postId).html(data); });
  }
}