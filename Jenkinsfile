pipeline {
  agent any
  stages {
    stage('Clone Repository') {
      steps {
        git branch: 'main', url: 'https://github.com/itsnabih/CI-CD-case-testing.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("cd-ci-case-testing", ".")
        }
      }
    }
    stage('Run Unit Tests') {
      steps {
        script {
          dockerImage.inside {
            sh 'npm install'
            sh 'npm test'
          }
        }
      }
    }
    // Docker build kit
    stage('Build Docker Image') {
    steps {
        script {
            env.DOCKER_BUILDKIT = "1"
            sh 'docker build -t cd-ci-case-testing .'
        }
    }
}
    stage ("Clean up Docker container") {
      steps {
        script {
          sh """
            if [ \$(docker ps -q -f name=hello-world-app) ]; then
              docker stop hello-world-app
            fi
            """

            // Remove the container if it exists
            sh """
            if [ \$(docker ps -a -q -f name=hello-world-app) ]; then
              docker rm hello-world-app
            fi
            """
        }
      }
    }
    stage('Deploy to Production') {
      steps {
        script {
          dockerImage.run('-p 3000:3000 --name hello-world-app')
        }
      }
    }
  }
}