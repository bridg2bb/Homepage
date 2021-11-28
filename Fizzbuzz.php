<?php
	if (!empty($_POST))
	{
		$numberPost = $_POST["txtNumber"];
		$results  = "";
		$number = intval($numberPost);
		
		
		if (!is_int($number) || $number < 1)
		{
			$results = "You must enter a valid positive whole number.";            
		} else {
			for ($i = 1; $i <= $number; $i ++)
			{
				//Here is a version that is small but is harder to read
				
				$output = ($i % 3 == 0 ? "Fizz" : "") . ($i % 5 == 0 ? "Buzz" : "")  . ($i % 3 != 0 &&  $i % 5 != 0 ? strval($i) : "");
		
				$results .= $output . "<br />";
				
				/*
				//Here is a version that is much more readable
				$divisibleBy3 = ($i % 3) == 0;
				$divisibleBy5 = ($i % 5) == 0;
				if ($divisibleBy3)
				{
					$results .= "Fizz";
				}
				if ($divisibleBy5) 
				{
					$results .= "Buzz";
				}
				if (!$divisibleBy3 && !$divisibleBy5)
				{
					$results .= strval($i);
				}
				$results .= "<br />";
				
				*/
			}
		}
	}
?>

<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <link rel="icon" type="image/png" href="favicon.png"/>


  <title>The Bridges - Home</title>
  <meta name="description" content="The bridges home">
  <meta name="author" content="Brad Bridges">

  <meta property="og:title" content="The bridges home">
  <meta property="og:type" content="website">
  <meta property="og:description" content="The bridges home">
  <meta property="og:image" content="favicon.png">



  <link rel="stylesheet" href="styles/main.css?v=1.1">
  <script src="https://kit.fontawesome.com/13ac134712.js" crossorigin="anonymous"></script>

</head>
<body>
    
    <nav id="navigation">
        <button id="btnExpandNav" title="Toggle Menu">
            <i class="fas fa-bars" ></i>
        </button>
        <ul id="menu">
            <li class="nav-header">
                <a href="./" title="Back home"><i class="fas fa-home"></i> Home</a>
            </li>
            <li class="nav-header"> 
                <button id="btnToggleMode"  title="Toggle Light Mode">
                    <i class="fas fa-adjust"></i> Toggle Light Mode
                </button>
            </li>
        </ul>
    </nav>
	<div class="main-wrapper">
        <div class="col-full">
            <div class="content-section">
                <h1>
					Fizz buzz
                </h1>
				<form id="form" name="form" action="Fizzbuzz.php" method="post">
					<label>Positve whole number:</label>
					<input type="text" value="" size="30" maxlength="100" name="txtNumber" id="txtNumber" />
					<br />
					What should process this?
					<input type="radio" name="language" value="php" <?php if (empty($_POST["language"]) || $_POST["language"] == "php") { echo "checked='checked'"; } ?>/> PHP
					<input type="radio" name="language" value="js"  <?php if ($_POST["language"] == "js") { echo "checked='checked'"; } ?> /> JavaScript
					<br />
					<button id="btnSubmit" type="button">Submit</button>
					<br />
					<br />
					<div id="results">
						<?php echo $results; ?>
					</div>
				</form>
            </div>
        </div>
        <div class="col-full">
			<div class="content-section">
				<div class="code-section">
				<?php
					$source = show_source("Fizzbuzz.php", true);
					print $source;

				?>
				</div>
			</div>
		</div>
    </div>    
    <script  src="scripts/main.js"></script>
    <script  src="scripts/fizzbuzz.js"></script>
</body>

