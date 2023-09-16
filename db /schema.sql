```sql
CREATE TABLE feedback (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    message VARCHAR(2000) NOT NULL,
    category VARCHAR(50) NOT NULL,
    cohort VARCHAR(50) NOT NULL,
    votes INTEGER
);

INSERT INTO feedback (username, message, category, cohort)
  VALUES ('Elena','',
          'React','London 10');

```