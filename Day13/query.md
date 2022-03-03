<h2>Part1:</h2>
<img src='assignment7.JPG' width='400'/>
<br>
<h2>Part2</h2>
<ol>
<img src='p2q1.jpg' width='400'/>
<li>SELECT movie_name,release_date FROM movies;</li>
<p><b>53 records</b></p>
<br>
<img src='p2q2.jpg' width='400'/>
<li>SELECT first_name, last_name FROM directors WHERE nationality = 'American';</li>
<p><b>16 records</b></p>
<br>
<img src='p2q3.jpg' width='400'/>
<li>SELECT * FROM actors WHERE date_of_birth > '1970-01-01' and gender = 'M';</li>
<p><b>31 records</b></p>
<br>
<img src='p2q4.jpg' width='200'/>
<li>SELECT movie_name FROM movies WHERE movie_length > 90 and movie_lang = 'English';</li>
<p><b>37 records</b></p>
<br>
</ol>

<h2>PART 3:</h2>
<ol>
<img src='p3q1.jpg' width='200'/>
<li>SELECT movie_name, movie_lang FROM movies WHERE movie_lang = 'English' or movie_lang = 'Korean' or movie_lang = 'Spanish';</li>
<p><b>40 Records</b></p>
<br>
<img src='p3q2.jpg' width='200'/>
<li>SELECT first_name, last_name FROM actors WHERE (last_name LIKE 'M%') AND date_of_birth BETWEEN '1940-01-01' AND '1969-12-31';</li>
<p><b>6 Records</b></p>
<br>
<img src='p3q3.jpg' width='200'/>
<li>SELECT first_name, last_name FROM directors WHERE nationality IN ('German','British','French') AND date_of_birth BETWEEN '1950-01-01' AND '1980-12-31';</li>
<p><b>4 Records</b></p>
</ol>