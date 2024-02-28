//event is bubbled up to parent

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Event Bubbling Example</title>
<style>
    .outer {
        padding: 20px;
        background-color: lightblue;
    }
    .inner {
        padding: 20px;
        background-color: lightgreen;
    }
</style>
</head>
<body>

<div class="outer" id="outer">
    <div class="inner" id="inner">
        Click me!
    </div>
</div>

<script>
    // Get the inner and outer elements
    const outer = document.getElementById('outer');
    const inner = document.getElementById('inner');

    // Add a click event listener to the outer element
    outer.addEventListener('click', function(event) {
        console.log('Outer element clicked');
    });

    // Add a click event listener to the inner element
    inner.addEventListener('click', function(event) {
        console.log('Inner element clicked');
        // Stop the event from propagating further (optional)
        event.stopPropagation();
    });
</script>

</body>
</html>
