pipeline {
    agent any

    environment {
        COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Clone Repository') {
    steps {
        git url: 'https://github.com/aditya-1310/Estate.git', branch: 'main'
    }
}

        stage('Build Docker Containers') {
            steps {
                sh 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }

        stage('Post Build') {
            steps {
                echo 'Deployment done. Your app should be live!'
            }
        }
    }
}
