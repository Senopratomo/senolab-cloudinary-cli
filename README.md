<h1>SenoLab Cloudinary CLI</h1>

This is a simple CLI to run some tasks such as upload, list all assets, and search assets.

How to use:
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
<pre>....coming soon....</pre>
<br>

 <h2>Installation</h2>
 Pre-requisite:
 1) node installed
 2) npm installed
 
Steps:
 1) Download (or clone) this repo
 2) open the resulting directory 
 3) cd into the directory (eg <pre>$cd senolab-cloudinary-cli</pre>) 
 4) run<br>
 <pre>$npm install</pre>
 <br>
 5) Run the below to check it works
 <pre>$node cloudinary</pre>
 <br>
 6) Enjoy
