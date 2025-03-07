pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "yusufdocker234/yusufekoanggoro.github.io"
        DOCKER_TAG = "latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/yusufekoanggoro/yusufekoanggoro.github.io.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t $DOCKER_IMAGE:$DOCKER_TAG ."
                }
            }
        }

        stage('Login to Docker Hub') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'docker-token', variable: 'DOCKER_PASSWORD')]) {
                        sh "echo $DOCKER_PASSWORD | docker login -u username --password-stdin"
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    sh "docker push $DOCKER_IMAGE:$DOCKER_TAG"
                }
            }
        }

        stage('Cleanup') {
            steps {
                sh "docker rmi $DOCKER_IMAGE:$DOCKER_TAG"
            }
        }

    }

    post {
        success {
            echo 'Deployment berhasil! 🚀'
        }
        failure {
            echo 'Deployment gagal! ❌'
        }
    }
}
