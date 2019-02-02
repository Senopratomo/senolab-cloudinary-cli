<h1>SenoLab Cloudinary CLI</h1>

This is a simple CLI to run some tasks such as upload, list all assets, and search assets.

<h1>Installation</h1>
 Pre-requisite:<br>
 1) node installed<br>
 2) npm installed<br>
 <br>
 
Steps:
 1) Download (or clone) this repo
 2) open the resulting directory 
 3) Create a new file .env inside the directory and specify the Cloudinary host, api key, and secret (you'll get by opening account:<br>
 CLOUD_NAME=[cloud_name]<br>
 API_KEY=[api_key]<br>
 SECRET=[secret]<br>
  
 4) cd into the directory (eg <pre>$cd senolab-cloudinary-cli</pre>) 
 5) run<br>
 <pre>$npm install</pre>
 <br>
 6) Run the below to check it works
 <pre>$node cloudinary</pre>
 <br>
 7) Enjoy

<h2>How to use:</h2>

<pre>
$node cloudinary [action] [options#1] [options#2]
</pre>

List of actions:<br>
1. upload<br>
This action upload assets from specified path to Cloudinary<br>
options#1: path to the assets to upload. for path with space (eg in Windows), enclose with double-quotes (").<br>
options#2: assets tag (for search purpose).<br>
<br>
sample command:<br>
<pre>$node cloudinary upload /home/mkhan/mypic.jpg my_pic</pre>
<br>
2. listall<br>
This action list all images assets.<br>
sample command:
<pre>$node cloudinary listall</pre>
<br>
3. search<br>
This action search all your assets based on keyword match to tags and context then return the result of the search.<br>
sample command:
<pre>$node cloudinary search my_pic</pre>
<br>

 
