export const renderHead = (title) => {
	const head = document.querySelector('head');
	head.innerHTML = `<meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#000000" />
    <link rel="manifest" href="https://michaeldoctor.imfast.io/portfolio/manifest.json" />
    
    <meta name="description" content="React app of portfolio theme and components">
    <meta name="author" content="Michael Doctor">
    
    <!--[if lt IE 9]>
        <script src="js/html5shiv.js"></script>
        <script src="js/respond.min.js"></script>
        <![endif]-->
    <link rel="shortcut icon" href="https://michaeldoctor.imfast.io/portfolio/images/ico/favicon.ico" type="image/x-icon">
    <link href="https://michaeldoctor.imfast.io/portfolio/css/bootstrap.min.css" rel="stylesheet" >
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.12.0/css/all.css" >
				<link href="https://michaeldoctor.imfast.io/portfolio/css/pe-icons.css" rel="stylesheet" >
				<link href="https://michaeldoctor.imfast.io/portfolio/css/prettyPhoto.css" rel="stylesheet" >
				<link href="https://michaeldoctor.imfast.io/portfolio/css/animate.css" rel="stylesheet" >
				<link href="https://michaeldoctor.imfast.io/portfolio/style.css" rel="stylesheet" >
    <script src="https://michaeldoctor.imfast.io/portfolio/js/jquery.js" ></script>
    <title>${title}</title>
    
    <script type="text/javascript">
      jQuery(document).ready(function ($) {
        'use strict';
        jQuery('body').backstretch([
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg1.jpg",// https://unsplash.com/photos/IzyKe_nNx2A @canont3guy
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg2.jpg",// https://unsplash.com/photos/_ZBekGTBh-c @knixon
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg3.jpg",// https://unsplash.com/photos/ZGjbiukp_-A @samsonyyc
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg4.jpg",// https://unsplash.com/photos/0hbtMehsV2I @captainhaja
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg5.jpg",// https://unsplash.com/photos/OjlXUS5Jd0k @exappiah
          "https://michaeldoctor.imfast.io/portfolio/images/bg/bg6.jpg"// https://unsplash.com/photos/4ZPrc2__Kr0 @denisseleon
        ], { duration: 5000, fade: 500, centeredY: true });
      });
    </script>`;
};
