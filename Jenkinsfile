pipeline {
    agent any
    stages {
        stage('install') {
            steps {
                bat 'npm install'
            }
        }
        stage('build') {
            steps {
                bat 'npm run build'       
            }
        }
        stage('test') {
            steps {
                bat 'npm test'
            }
        }
        stage('upload to gitpages') {
            steps {
                bat 'git config user.email "jmarroyave.compsci@gmail.com"'
                bat 'git config user.name "jmarroyave-compsci"'
                bat 'git add .'
                bat 'git commit -am "updating demo and docs"'
                bat 'git push origin HEAD:main'
            }
        }
    }
}