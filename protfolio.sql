create database portfolio;
use portfolio;

CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    subject VARCHAR(200),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE projects (
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(200),
    technology VARCHAR(200),
    description TEXT,
    github_link VARCHAR(255),
    project_date DATE
);

CREATE TABLE skills (
    skill_id INT AUTO_INCREMENT PRIMARY KEY,
    skill_name VARCHAR(100),
    skill_level VARCHAR(50)
);

CREATE TABLE resume (
    resume_id INT AUTO_INCREMENT PRIMARY KEY,
    file_name VARCHAR(255),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);