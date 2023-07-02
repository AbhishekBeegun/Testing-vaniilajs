<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
    .numBer{
        background-color : red ;
        color : white ;
        text-transform : uppercase ;
    }
    </style>
</head>

<body>

    this button run on client side
    <button onclick='testjs()'>
        show js function
    </button><br>
    php get rendered below <br>
    <?php
    $numbers = array("one", "two", "three", "four");

    foreach ($numbers as $num) {
    echo "<div class='numBer'><p>This number is $num</p></div>";
    }
    $cars = array("Mercedez", "Tesla", "Toyota");
    echo json_encode($cars);

    foreach ( $cars as $car) {
        echo '🚗' ; 
    }
 
    ?>
    <p>Testing PHP</p>

</body>
<script>



    function testjs() {
        alert("client-side-button")
    }

</script>
</html>