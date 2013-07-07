function demo($scope) {
    $scope.number = 5
    $scope.getNumber = function(num) {
        return new Array(num)
    }
    setInterval(function() {
        PageTransitions.animate($(".section-transitions .pt-perspective")[Math.floor((Math.random()*60))])
    },70)
  $scope.transitions = [
    {enter:"moveToLeft", leave:"moveFromRight"},
    {enter:"moveToRight", leave:"moveFromLeft"},
    {enter:"moveToBottom", leave:"moveFromTop"},
    {enter:"fade", leave:"moveFromRight ontop"},
    {enter:"fade", leave:"moveFromLeft ontop"},
    {enter:"fade", leave:"moveFromBottom ontop"},
    {enter:"fade", leave:"moveFromTop ontop"},
    {enter:"moveToLeftFade", leave:"moveFromRightFade"},
    {enter:"moveToRightFade", leave:"moveFromLeftFade"},
    {enter:"moveToTopFade", leave:"moveFromBottomFade"},
    {enter:"moveToBottomFade", leave:"moveFromTopFade"},
    {enter:"moveToLeftEasing ontop", leave:"moveFromRight"},
    {enter:"moveToRightEasing ontop", leave:"moveFromLeft"},
    {enter:"moveToTopEasing ontop", leave:"moveFromBottom"},
    {enter:"moveToBottomEasing ontop", leave:"moveFromTop"},
    {enter:"scaleDown", leave:"moveFromRight ontop"},
    {enter:"scaleDown", leave:"moveFromLeft ontop"},
    {enter:"scaleDown", leave:"moveFromBottom ontop"},
    {enter:"scaleDown", leave:"moveFromTop ontop"},
    {enter:"scaleDown", leave:"scaleUpDown delay300"},
    {enter:"scaleDownUp", leave:"scaleUp delay300"},
    {enter:"moveToLeft ontop", leave:"scaleUp"},
    {enter:"moveToRight ontop", leave:"scaleUp"},
    {enter:"moveToTop ontop", leave:"scaleUp"},
    {enter:"moveToBottom ontop", leave:"scaleUp"},
    {enter:"scaleDownCenter", leave:"scaleUpCenter delay400"},
    {enter:"rotateRightSideFirst", leave:"moveFromRight delay20 ontop"},
    {enter:"rotateLeftSideFirst", leave:"moveFromLeft delay20 ontop"},
    {enter:"rotateTopSideFirst", leave:"moveFromTop delay20 ontop"},
    {enter:"rotateBottomSideFirst", leave:"moveFromBottom delay20 ontop"},
    {enter:"flipOutRight", leave:"flipInLeft delay500"},
    {enter:"flipOutLeft", leave:"flipInRight delay500"},
    {enter:"flipOutTop", leave:"flipInBottom delay500"},
    {enter:"flipOutBottom", leave:"flipInTop delay500"},
    {enter:"rotateFall ontop", leave:"scaleUp"},
    {enter:"rotateOutNewspaper", leave:"rotateInNewspaper delay500"},
    {enter:"rotatePushLeft", leave:"moveFromRight"},
    {enter:"rotatePushRight", leave:"moveFromLeft"},
    {enter:"rotatePushTop", leave:"moveFromBottom"},
    {enter:"rotatePushBottom", leave:"moveFromTop"},
    {enter:"rotatePushLeft", leave:"rotatePullRight delay180"},
    {enter:"rotatePushRight", leave:"rotatePullLeft delay180"},
    {enter:"rotatePushTop", leave:"rotatePullBottom delay180"},
    {enter:"rotatePushBottom", leave:"rotatePullTop delay180"},
    {enter:"rotateFoldLeft", leave:"moveFromRightFade"},
    {enter:"rotateFoldRight", leave:"moveFromLeftFade"},
    {enter:"rotateFoldTop", leave:"moveFromBottomFade"},
    {enter:"rotateFoldBottom", leave:"moveFromTopFade"},
    {enter:"moveToRightFade", leave:"rotateUnfoldLeft"},
    {enter:"moveToLeftFade", leave:"rotateUnfoldRight"},
    {enter:"moveToBottomFade", leave:"rotateUnfoldTop"},
    {enter:"moveToTopFade", leave:"rotateUnfoldBottom"},
    {enter:"rotateRoomLeftOut ontop", leave:"rotateRoomLeftIn"},
    {enter:"rotateRoomRightOut ontop", leave:"rotateRoomRightIn"},
    {enter:"rotateRoomTopOut ontop", leave:"rotateRoomTopIn"},
    {enter:"rotateRoomBottomOut ontop", leave:"rotateRoomBottomIn"},
    {enter:"rotateCubeLeftOut ontop", leave:"rotateCubeLeftIn"},
    {enter:"rotateCubeRightOut ontop", leave:"rotateCubeRightIn"},
    {enter:"rotateCubeTopOut ontop", leave:"rotateCubeTopIn"},
    {enter:"rotateCubeBottomOut ontop", leave:"rotateCubeBottomIn"},
    {enter:"rotateCarouselLeftOut ontop", leave:"rotateCarouselLeftIn"},
    {enter:"rotateCarouselRightOut ontop", leave:"rotateCarouselRightIn"},
    {enter:"rotateCarouselTopOut ontop", leave:"rotateCarouselTopIn"},
    {enter:"rotateCarouselBottomOut ontop", leave:"rotateCarouselBottomIn"},
    {enter:"rotateSidesOut", leave:"rotateSidesIn delay200"},
    {enter:"rotateSlideOut", leave:"rotateSlideIn"}
  ].reverse()
}
$(function() {
  $('.nav a, .brand').click(function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('data-target')).offset().top-50
    }, 500)
  })
})