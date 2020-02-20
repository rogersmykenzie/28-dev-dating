UPDATE users
SET q1 = $1,
q2 = $2,
q3 = $3
WHERE email = $4;