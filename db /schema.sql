```sql
CREATE TABLE feedback (
    id SERIAL PRIMARY KEY
    name VARCHAR(50) NOT NULL
    message VARCHAR(50) NOT NULL
    category VARCHAR(50) NOT NULL
    cohort VARCHAR(50) NOT NULL
    votes INTEGER
);

INSERT INTO feedback (name, message, category, cohort)
  VALUES ('Elena','',
          'React','London 10');

```