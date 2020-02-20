SELECT id FROM answers
WHERE answer = $1
UNION
SELECT id FROM answers
WHERE answer = $2
UNION
SELECT id FROM answers
WHERE answer = $3;