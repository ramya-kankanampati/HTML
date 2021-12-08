 Loops :
Loops can execute a block of code a number of times.
if you want to run the same code over and over again, each time with a different value.




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
const branches = ["CSE", "ECE", "EEE", "MECH", "CIVIL", "AI"];

let text = "";
for (let i = 0; i < branches.length; i++) {
  text += branches[i] + "<br>";
  
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>



<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For Loop</h2>

<p id="demo"></p>

<script>
let text = "";

for (let i = 0; i < 8; i++) {

  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>


(For In Loop) :

<!DOCTYPE html>
<html>
<body>

<h2>JavaScript For In Loop</h2>

<p id="demo"></p>

<script>
const person = {fname:"Ramya", lname:"Kankanampati", age:22,height:5.2}; 

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
</script>

</body>
</html>




<!DOCTYPE html>
<html>
<body>

<h2>JavaScript While Loop</h2>

<p id="demo"></p>

<script>
let text = "";
let i = 0;
while (i <16) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>


\<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Do While Loop</h2>

<p id="demo"></p>

<script>
let text = ""
let i = 0;

do {
  text += "<br>The number is " + i;
  i++;
}
while (i < 9);  

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
