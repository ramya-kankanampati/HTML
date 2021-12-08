// JavaScript we have the following conditional statements:

// (if) to specify a block of code to be executed, if a specified condition is true
// (else) to specify a block of code to be executed, if the same condition is false
//  (else if) to specify a new condition to test, if the first condition is false
//   (switch) : to specify many alternative blocks of code to be executed



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if</h2>

<p>Display "Happy Birthday!" if the hour is less than 10:00:</p>

<p id="demo">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Happy Birthday!";
}
</script>

</body>
</html>


<!DOCTYPE html>
<html>
<body>

<h2>JavaScript if .. else</h2>


<p id="demo"></p>

<script>
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Happi Birthday";
} else if (time < 20) {
  greeting = "Happi Birthday";
} else {
  greeting = "Happy Birthday";
}
document.getElementById("demo").innerHTML = greeting;
</script>

</body>
</html>

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript switch</h2>

<p id="demo"></p>

<script>
let day;
switch (new Date().getDay()) 
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";

document.getElementById("demo").innerHTML = "Today is " + day;
</script>

</body>
</html>

