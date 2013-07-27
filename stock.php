<?php
  //if (isset($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) === 'xmlhttprequest') {
		$url = 'http://www.jamstockex.com/ticker-xml/test.xml?ini=' .rand();

		function url_get_contents($Url) {
			if (!function_exists('curl_init')){ 
				die('CURL is not installed!');
			}
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $Url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$output = curl_exec($ch);
			curl_close($ch);
			return $output;
		}
		
		$file = str_replace("s&", " ",url_get_contents($url));
        header('Content-Type: text/xml'); 
		die($file);
	//}
	
?>
