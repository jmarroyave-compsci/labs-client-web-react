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
        stage('docs') {
            steps {
                bat 'npm run build-storybook'
            }
        }
        stage('upload to gitpages') {
            steps {
                bat 'git add .'
                bat 'git commit -am "updating demo and docs"'
                bat 'git config user.name "jmarroyave-compsci"'
                bat 'git push'
            }
        }
    }
}