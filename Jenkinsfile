pipeline {
    agent any
    stages {
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
                bat 'git push'
            }
        }
    }
}