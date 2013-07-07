var PageTransitions = (function() {

	var startElement = 0
	animEndEventNames = {
		'WebkitAnimation' : 'webkitAnimationEnd',
		'OAnimation' : 'oAnimationEnd',
		'msAnimation' : 'MSAnimationEnd',
		'animation' : 'animationend'
	},
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ],
		// support css animations
		support = Modernizr.cssanimations

		function init() {
			$(".pt-page").each( function() {
				$(this).data( 'originalClassList', $(this).attr( 'class' ) )
			})
			$(".et-wrapper`").each( function() {
				$(this).data('current', 0)
				$(this).data('isAnimating', false)
				$(this).children(".pt-page").eq(startElement).addClass( 'pt-page-current' )
			})

			$(".pt-rotate").click(function() {
				animate($(this))
			})
		}
		function animate(block) {
			nextPage($(block).closest('.et-wrapper'), $(block).attr('pt-out'), $(block).attr('pt-in'))
		}

		function nextPage( block, outClass, inClass ) {
			block = $(block)
			var inClass = formatClass(inClass),
				outClass = formatClass(outClass),
				current = block.data('current'),
				$pages = block.children( 'div.pt-page' ),
				pagesCount = $pages.length,
				endCurrPage = false,
				endNextPage = false


			if( block.data('isAnimating')) {
				return false
			}

			block.data('isAnimating', true)

			var $currPage = $pages.eq(current)

			if(current < pagesCount - 1 ) {
				++current
			}
			else {
				current = 0
			}
			block.data('current', current)

			var $nextPage = $pages.eq(current).addClass( 'pt-page-current' )


			$currPage.addClass( outClass ).on( animEndEventName, function() {
				$currPage.off( animEndEventName )
				endCurrPage = true
				if( endNextPage ) {
					onEndAnimation( $currPage, $nextPage, block )
				}
			} )

			$nextPage.addClass( inClass ).on( animEndEventName, function() {
				$nextPage.off( animEndEventName )
				endNextPage = true
				if( endCurrPage ) {
					onEndAnimation( $currPage, $nextPage, block )
				}
			} )

			if( !support ) {
				onEndAnimation( $currPage, $nextPage, block )
			}

		}

		function onEndAnimation( $outpage, $inpage, block ) {
			resetPage( $outpage, $inpage )
			block.data('isAnimating' , false)
		}

		function resetPage( $outpage, $inpage ) {
			$outpage.attr( 'class', $outpage.data( 'originalClassList' ) )
			$inpage.attr( 'class', $inpage.data( 'originalClassList' ) + ' pt-page-current' )
		}

		

		function formatClass(str) {
			classes = str.split(" ")
			output=""
			for(var n=0;n<classes.length;n++){
				output += " pt-page-" + classes[n]
			}
			return output
		}
		return { init : init, nextPage: nextPage, animate: animate }

	})()

$(function() {
	PageTransitions.init()
})