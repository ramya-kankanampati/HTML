<!DOCTTYPE html>
<html>
    <body>
        <h1> change the HTML content</h1>
        <h2 id="hcontent">Hello Guest!</h2>
        <h3>Welcome to JavaScript</h3>
        <button type ="button" onclick='document.getelEmentById("hcontent").inner HTML="Hello Ramya!"'>Ramya</button>
        <button type ="button" onclick='document.getelEmentById("hcontent").inner HTML="Hello Kankanampati!"'>Kankanampati</button>

        <h1>Change in attributes</h1>
        <img id="image"src="red.jpg"width="100" height="100"><br><br>
        <button type="button" onclick='document.getelEmentById ("image").src="green.png"'>Green</button>
        <button type="button" onclick='document.getelEmentById ("image").src="blue.png"'>Blue</button>
        <button type="button" onclick='document.getelEmentById ("image").src="red.png"'>Red</button>

<h1>Change in CSS</h1>
<h2 id="text">Introduction to JavaScript</h2>
<button type="button" onclick='document.getelEmentById ("text").Style.color="green"'>Green</button>
<button type="button" onclick='document.getelEmentById ("text").Style.color="blue"'>Blue</button>
<button type="button" onclick='document.getelEmentById ("text").Style.color="red"'>Red</button>

<h1>HIDE DISPLAY CONTENT</h1>
<h2 id ="hidedisplay">This will demonstrate the hiding and displaying the content</h2>
<button type="button" onclick='document.getelEmentById ("hidedisplay").Style.display="none"'>Hide</button>
<button type="button" onclick='document.getelEmentById ("hidedisplay").Style.display="black"'>Display</button>

</body>
 </html>



<!DOCTYPE html>
<html>
<head>
<style>
.myDiv {
  position: relative;
  border: 5px outset red;
  background-color: lightblue;    
  height: 500px;
  width:500px;
}
.myDiv1{
    position: absolute;
    bottom: 0;
    border: 1px outset red;
     height: 20px;
    width: 300px;
  }
  .myDiv2{ 
    position: absolute;
    border: 1px outset red;
    background-color: lawngreen;
    text-align: center;
      height: 20px;
      width: 100px;
  }
  .myDiv3{
    
    position: fixed;
    border: 1px outset red;
    text-align: center;
    height: 20px;
    width: 100px;
  }
  .myDiv4{
    
    position: fixed;
    border: 1px outset red;
    text-align: right;
      height: 20px;
      width: 100px;
    }
</style>
</head>
<body>

<h1>The div element</h1>

<div class="myDiv">
  
    <div class="myDiv1">
    <div class="myDiv2">Dashboard</div>
    <div class="myDiv3">menu</div>
    <div class="myDiv4">view</div>
    </div>

</div>

</body>
</html>

