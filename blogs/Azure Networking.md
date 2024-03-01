# 🌌 Welcome to the Galactic Network! 🌌

In this vast cosmos, we have many celestial bodies to visit. Our cosmic tour includes:

- 🌐 Virtual Networks (Vnets)
- 🛡️ Network Security Groups (NSG)
- 🔥 Azure Firewall
- 📞 Domain Name System (DNS) and Azure DNS
- 🚦 Network Routing and Endpoints
- 🚄 ExpressRoute
- ⚖️ Azure Load Balancer (ALB)
- 🌐 Azure Application Gateway (AAG)
- 📝 IP Schema
- 📦 Network Virtual Appliance (NVA)

## 🌐 Virtual Networks (Vnets)

Think of a Vnet as a galaxy, and within each galaxy are solar systems, in this case, subnets. Subnets are a range of IP addresses within a Vnet address space. A Vnet can have many subnets, just need to be aware of not overlapping IP ranges with other subnets. Each subnet can have its own security policies, just like each solar system can have its own laws of physics.

## 🛡️ Network Security Groups (NSGs)

These cosmic shields allow or deny network traffic into your subnets. They get placed on either the subnet or the network interface card that sits on the virtual machine. They are like the guardians of the galaxy, protecting your resources from unwanted traffic.

## 🔥 Azure Firewall

This is a stateful, highly available, and scalable application that can be integrated with azure monitor for logging and analytics. This application allows you to centrally create allow and/or deny rules and uses threat intelligence-based filtering to allow for easier debugging. It's like the cosmic police, keeping an eye on all the traffic and making sure everything is in order.

## 📞 Domain Name System (DNS) and Azure's DNS

DNS is basically the phonebook of the internet. It translates domain names into IP addresses so web browsers can load up the content. Azure DNS helps us host DNS records for our domains. It's like the intergalactic directory, helping us find the right planets (websites) we want to visit.

## 🚦 Network Routing and Endpoints

System routes direct traffic between virtual machines, on-premise, and the internet. User-defined routes are more customizable and define routes that specify the next hop in traffic flow. It's like the cosmic GPS, guiding our spaceships (data packets) to their destinations.

## 🚄 ExpressRoute

This resource allows you to connect privately between azure and on-premise. Instead of going over the internet, it goes directly through the backbone of the cloud. It's like a wormhole, allowing us to travel quickly and securely between different parts of the cosmos.

## ⚖️ Azure Load Balancer (ALB)

This resource helps handle how traffic is distributed to the backend. We use health probes to ensure the backend is healthy to receive traffic. It's like the traffic controller of the galaxy, making sure all spaceships (data packets) are evenly distributed and the traffic flows smoothly.

## 🌐 Azure Application Gateway (AAG)

This resource manages requests sent to web applications from client applications. It will route traffic to a pool of webservers based on the URL of the request. It's like the interstellar post office, making sure all messages (requests) are delivered to the right planets (servers).

## 📝 IP Schema

This describes Azure's IP design which uses private IPs. There are three ranges of non-routable IPs for the internal network. 
1. 10.0.0.0 - 10.255.255.255
2. 172.16.0.0 - 176.31.255.255
3. 192.168.0.1 - 192.168.255.255

It's like the cosmic map, showing us the layout of the galaxy and where each planet (IP address) is located.

## 📦 Network Virtual Appliance (NVA)

This is a virtual machine that controls the flow of traffic by controlling the routing. It acts as a router forwarding requests between subnets. It's like the cosmic traffic cop, directing traffic and making sure everything flows smoothly.

That's the end of our interstellar voyage through the Galactic Network! Keep your curiosity alive, continue exploring the infinite cosmos of cloud computing, and remember - in the vast expanse of the universe, the cloud is your cosmic companion. Until our next adventure, young grasshopper! 🚀✨