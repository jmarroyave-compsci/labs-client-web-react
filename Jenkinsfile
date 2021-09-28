pipeline {
    agent any
    stages {
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