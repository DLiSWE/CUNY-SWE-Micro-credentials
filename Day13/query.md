<h2>Part1:</h2>
<img src='assignment7.JPG' width='400'/>

<h2>Part2</h2>
<ol>
<li> SELECT movie_name,release_date FROM movies;</li>
<p><b>53 records</b></p>

<li> SELECT first_name, last_name FROM directors WHERE nationality = 'American';</li>
<p><b>16 records</b></p>

<li>SELECT * FROM actors WHERE date_of_birth > '1970-01-01' and gender = 'M';</li>
<p><b>31 records</b></p>

<li> SELECT movie_name FROM movies WHERE movie_length > 90 and movie_lang = 'English';</li>
<p><b>37 records</b></p>
</ol>

<h2>PART 3:</h2>
<ol>

<li>SELECT movie_name, movie_lang FROM movies WHERE movie_lang = 'English' or movie_lang = 'Korean' or movie_lang = 'Spanish';</li>
<p><b>40 Records</b></p>

<li>2.SELECT first_name, last_name FROM actors WHERE (last_name LIKE 'M%') and date_of_birth between '1940-01-01' and '1969-12-31';</li>
<p><b>6 Records</b></p>

<li> SELECT first_name, last_name FROM directors WHERE nationality in ('German','British','French') and date_of_birth Between '1950-01-01' and '1980-12-31';</li>
<p><b>4 Records</b></p>
</ol>