function demo($scope) {
    $scope.number = 5
    $scope.getNumber = function(num) {
        return new Array(num)
    }
    setInterval(function() {
        PageTransitions.animate($(".section-transitions .et-wrapper")[Math.floor((Math.random()*66))])
    },70)
  $scope.transitions = [
    {leave:"moveToLeft", enter:"moveFromRight"},
    {leave:"moveToRight", enter:"moveFromLeft"},
    {leave:"moveToBottom", enter:"moveFromTop"},
    {leave:"fade", enter:"moveFromRight ontop"},
    {leave:"fade", enter:"moveFromLeft ontop"},
    {leave:"fade", enter:"moveFromBottom ontop"},
    {leave:"fade", enter:"moveFromTop ontop"},
    {leave:"moveToLeftFade", enter:"moveFromRightFade"},
    {leave:"moveToRightFade", enter:"moveFromLeftFade"},
    {leave:"moveToTopFade", enter:"moveFromBottomFade"},
    {leave:"moveToBottomFade", enter:"moveFromTopFade"},
    {leave:"moveToLeftEasing ontop", enter:"moveFromRight"},
    {leave:"moveToRightEasing ontop", enter:"moveFromLeft"},
    {leave:"moveToTopEasing ontop", enter:"moveFromBottom"},
    {leave:"moveToBottomEasing ontop", enter:"moveFromTop"},
    {leave:"scaleDown", enter:"moveFromRight ontop"},
    {leave:"scaleDown", enter:"moveFromLeft ontop"},
    {leave:"scaleDown", enter:"moveFromBottom ontop"},
    {leave:"scaleDown", enter:"moveFromTop ontop"},
    {leave:"scaleDown", enter:"scaleUpDown delay300"},
    {leave:"scaleDownUp", enter:"scaleUp delay300"},
    {leave:"moveToLeft ontop", enter:"scaleUp"},
    {leave:"moveToRight ontop", enter:"scaleUp"},
    {leave:"moveToTop ontop", enter:"scaleUp"},
    {leave:"moveToBottom ontop", enter:"scaleUp"},
    {leave:"scaleDownCenter", enter:"scaleUpCenter delay400"},
    {leave:"rotateRightSideFirst", enter:"moveFromRight delay20 ontop"},
    {leave:"rotateLeftSideFirst", enter:"moveFromLeft delay20 ontop"},
    {leave:"rotateTopSideFirst", enter:"moveFromTop delay20 ontop"},
    {leave:"rotateBottomSideFirst", enter:"moveFromBottom delay20 ontop"},
    {leave:"flipOutRight", enter:"flipInLeft delay500"},
    {leave:"flipOutLeft", enter:"flipInRight delay500"},
    {leave:"flipOutTop", enter:"flipInBottom delay500"},
    {leave:"flipOutBottom", enter:"flipInTop delay500"},
    {leave:"rotateFall ontop", enter:"scaleUp"},
    {leave:"rotateOutNewspaper", enter:"rotateInNewspaper delay500"},
    {leave:"rotatePushLeft", enter:"moveFromRight"},
    {leave:"rotatePushRight", enter:"moveFromLeft"},
    {leave:"rotatePushTop", enter:"moveFromBottom"},
    {leave:"rotatePushBottom", enter:"moveFromTop"},
    {leave:"rotatePushLeft", enter:"rotatePullRight delay180"},
    {leave:"rotatePushRight", enter:"rotatePullLeft delay180"},
    {leave:"rotatePushTop", enter:"rotatePullBottom delay180"},
    {leave:"rotatePushBottom", enter:"rotatePullTop delay180"},
    {leave:"rotateFoldLeft", enter:"moveFromRightFade"},
    {leave:"rotateFoldRight", enter:"moveFromLeftFade"},
    {leave:"rotateFoldTop", enter:"moveFromBottomFade"},
    {leave:"rotateFoldBottom", enter:"moveFromTopFade"},
    {leave:"moveToRightFade", enter:"rotateUnfoldLeft"},
    {leave:"moveToLeftFade", enter:"rotateUnfoldRight"},
    {leave:"moveToBottomFade", enter:"rotateUnfoldTop"},
    {leave:"moveToTopFade", enter:"rotateUnfoldBottom"},
    {leave:"rotateRoomLeftOut ontop", enter:"rotateRoomLeftIn"},
    {leave:"rotateRoomRightOut ontop", enter:"rotateRoomRightIn"},
    {leave:"rotateRoomTopOut ontop", enter:"rotateRoomTopIn"},
    {leave:"rotateRoomBottomOut ontop", enter:"rotateRoomBottomIn"},
    {leave:"rotateCubeLeftOut ontop", enter:"rotateCubeLeftIn"},
    {leave:"rotateCubeRightOut ontop", enter:"rotateCubeRightIn"},
    {leave:"rotateCubeTopOut ontop", enter:"rotateCubeTopIn"},
    {leave:"rotateCubeBottomOut ontop", enter:"rotateCubeBottomIn"},
    {leave:"rotateCarouselLeftOut ontop", enter:"rotateCarouselLeftIn"},
    {leave:"rotateCarouselRightOut ontop", enter:"rotateCarouselRightIn"},
    {leave:"rotateCarouselTopOut ontop", enter:"rotateCarouselTopIn"},
    {leave:"rotateCarouselBottomOut ontop", enter:"rotateCarouselBottomIn"},
    {leave:"rotateSidesOut", enter:"rotateSidesIn delay200"},
    {leave:"rotateSlideOut", enter:"rotateSlideIn"}
  ].reverse()
}
$(function() {
  $('.nav a, .brand, a[data-target]').click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('data-target')).offset().top-50
    }, 500)
  })
})