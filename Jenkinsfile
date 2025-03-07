pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/yusufekoanggoro/yusufekoanggoro.github.io.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
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
}
