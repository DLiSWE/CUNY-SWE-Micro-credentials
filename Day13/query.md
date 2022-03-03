<img src='Day13\assignment7.JPG'

1. SELECT movie_name,release_date FROM movies

2. SELECT first_name, last_name FROM directors WHERE nationality = 'American'

3.SELECT * FROM actors WHERE date_of_birth > '1970-01-01' and gender = 'M'

4. SELECT movie_name FROM movies WHERE movie_length > 90 and movie_lang = 'English'


PART 2:
1.SELECT movie_name, movie_lang FROM movies WHERE movie_lang = 'English' or movie_lang = 'Korean' or movie_lang = 'Spanish'
40 Records

2.SELECT first_name, last_name FROM actors WHERE (last_name LIKE 'M%') and date_of_birth between '1940-01-01' and '1969-12-31'
6 Records

3. SELECT first_name, last_name FROM directors WHERE nationality in ('German','British','French') and date_of_birth Between '1950-01-01' and '1980-12-31'
4 Records