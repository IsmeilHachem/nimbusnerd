# 🚀 Azure Compute: The Galactic Engine

Greetings, space explorer! 🚀 Welcome to the mesmerizing universe of Azure Compute! In this celestial journey, we'll encounter cosmic entities like Virtual Machines (VMs), Azure App Services, Application Insights, Azure Container Instances (ACI), and Azure Kubernetes Service (AKS). Let's power up our engines, set our course, and embark on this exciting exploration!

## 🌌 Virtual Machines (VMs)

Our first stop is the land of Virtual Machines. VMs embody the Infrastructure-as-a-Service (IaaS) model and are perfect when you crave control over your infrastructure. Imagine setting up test and dev environments at warp speed or hosting a website on a distant planet. 

When naming your VM, consider a format like "environment-location-instance-product/service-role". For instance, "dev-ue-web-vm-001" translates to the 1st dev web server hosted in US East. 

Choosing the size of your VM is like choosing the size of your spaceship, it depends on your mission. There are six sizes to choose from:

1. General Purpose (GP) - Balanced CPU-to-memory ratio
2. Compute Optimized - High CPU-to-memory ratio
3. Memory Optimized - High Memory-to-CPU ratio
4. Storage Optimized - High disk throughput and I/O
5. GPU - For heavy graphic rendering and video editing
6. High Performance Compute - The fastest and most powerful VM

VMs use disks to store OS, apps, and data. All VMs will have at least 2 disks: Windows OS Disk and Temp Disk. The OS disk is represented by the C:\ drive and the Temp disk by the D:\ drive. An optional third disk can be any letter except C or D, representing Data disks.

## 🌠 Azure App Services

Next, we journey to Azure App Services, Azure's HTTP(S) web hosting service. It offers secure, compliant, global scaling with high availability. You can purchase your own domain via Azure's App Service Domain or any other registrar. 

Within the App Services, you can create a web app. This web app gets assigned a subdomain, azurewebsites.net. To apply the custom domain you purchased, you need to upgrade your app service plan. The app service plan defines a set of compute resources for the web app to run. Multiple applications can share the same plan, but usage is split. Isolating an application to its own plan is best when:

- The app is resource-intensive
- You need to scale the app independently from others
- The app needs resources in a different geo region

## 🌐 Application Insights

Application Insights is like a cosmic telescope for monitoring live applications. It helps detect performance anomalies and provides insights into your application's behavior.

## 🌑 Azure Container Instances (ACI)

ACI helps run containers in Azure. Features of a container include:

- Fast startup times
- Hypervisor-level security
- Custom sizes - nodes scale dynamically
- Persistent storage
- Co-scheduled groups or Container groups

Container groups are a logical group of containers sharing the same network and node lifecycle. They are deployed via either ARM or YAML. ARM is best when deploying additional resources while YAML is best when only deploying container instances. To enable external client access, expose the port on the IP of the container group and from the container.

## 🌌 Azure Kubernetes Service (AKS)

Our final stop in the Compute universe is AKS. Here are some terms to familiarize yourself with:

- Pools - Group of nodes with identical configurations
- Nodes - Individual VMs running containerized applications
- Pods - Single instance of an application
- Container - Executable image
- Deployment - One or more identical pods managed by Kubernetes (K8S)
- Manifest - YAML file describing deployment

To process AKS orchestration requests, use the kubelet command. Kube-proxy is your go-to for routing traffic and managing IPs. The initial number of nodes and their sizes are defined when creating the AKS cluster. Once created, you have a default node pool which contains the underlying VMs that run the agent nodes. 

K8S uses four types of services to logically group a set of pods together:

1. Cluster IP - Creates internal IP. Ideal for internal-only applications
2. Node Port - Creates port mapping on the underlying node
3. Load Balancer - Connects requested pods to load balancer backend pool
4. External Name - Creates specific DNS entry for easier application access

AKS storage includes volumes and persistent volumes. Volumes store, retrieve, and persist data across pods and through the application's lifecycle. You use either disks or files. Disks are ReadWriteOnce, making them available to a single node. Files are for accessing multiple nodes simultaneously. Persistent volumes exist beyond an individual pod's lifetime. These can be statically created by the cluster admin or dynamically created by the K8S API server. 

Indeed, that was a cosmic load of information! Let's pause for a moment, bask in the interstellar panorama before we engage warp speed towards the Networking universe. Brace yourself for a supernova of knowledge! Until our next celestial rendezvous, keep your curiosity aflame, continue your cosmic journey, and remember - in the boundless universe of cloud computing, the cloud is your faithful galactic guide. Until our next adventure, young grasshopper! 🚀✨