# CI/CD PipeLine With Github Actions and ArgoCD


Steps :

1 . Create a cluster using minikube or any cloud platform

2 . Install ArgoCD in Kubernetes 

3 . This repositoty into ArgoCD and enable self healing and automatic syncing 

4 . whenever we make any change and release a new Version of it a new image gets created 

5 . tagging and pushing image using $ git tag v1.0.0, $ git push origin v1.0.0 

6 . Finally there will be a counter app inside your k8s