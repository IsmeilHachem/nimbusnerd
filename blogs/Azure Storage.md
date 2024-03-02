# 🚀 Azure Storage: The Galactic Vault

Salutations, interstellar explorers! In the infinite cosmos of Azure, the Storage Account is our celestial vault. It's a colossal, scalable storage system for objects and files, capable of storing messages and NoSQL data. You might ponder why to choose this when there are other storage options in the cosmos. The advantages of Azure's Storage account are:

- Durability and high availability
- Detailed access control for security
- Effortless scalability
- Managed by Microsoft, so you can focus on your mission

Azure Storage can be used to store data for three categories:

1. Virtual Machine (VM) storage
2. Unstructured data
3. Structured data

Let's set a course and explore these categories.

## 🌌 Virtual Machine (VM) Storage

When considering VM storage, envision disks and files for that VM. Disks represent persistent block store while files are fully managed file shares.

## 🌠 Unstructured Data

For unstructured data, we store entities like blobs and data lake. Blobs, which we'll delve into later, are highly scalable, REST-based object storage. Data lake represents a Hadoop distributed file system, a fancy way of saying "handles big data".

## 🌐 Structured Data

Finally, structured data. Think tables, CosmosDB, and AzSQL. We'll discuss tables later in this guide but CosmosDB and AzSQL will have their own dedicated exploration.

There are two types of Storage accounts; Standard and Premium. Standard offers the lowest cost/GB, perfect for bulk storage or dealing with infrequently accessed data. Premium, while slightly more expensive, provides consistent low-latency performance, perfect for input/output intensive applications. Choose wisely, once you've picked a type, the selection cannot be reversed!

Now that we've discussed the types, let's explore the five services:

1. Blob
2. Data Lake Gen 2
3. Azure Files
4. Queue
5. Table

We promised a deeper dive into blobs, so let's plunge into the cosmic ocean!

## 🌑 Blob Storage

Blob storage, also known as "object store", stores vast amounts of unstructured data. Blobs are perfect for:

- Serving images/documents directly to the browser
- Storing files for distributed access
- Streaming video and audio data
- Storing backup, disaster recovery, and archival data
- Storing analysis data

When it comes to naming a blob, it craves uniqueness. You can only use lowercases, numbers, and hyphens. The name must begin with a letter or number and it must be between 3-63 characters long. Blobs also have versioning which allows for object replication.

## 🌌 Azure Files

Azure Files establishes highly available network file shares that are accessed via Server Message Block (SMB). This is perfect for:

- Migrating on-prem files to Azure
- Storing config files
- Storing logs, metrics, and crash dumps

When wanting to connect to Azure file share, ensure port 445 is open because SMB communicates over this port.

## 🌠 Queue and Tables

Queue's purpose is simply to store and retrieve messages. Table is perfect when working with structured, non-relational data.

## 🌐 Replication Options: The Cosmic Clones

In the Azure cosmos, data replication is akin to creating cosmic clones of your data. These clones ensure your data's durability and availability, even in the face of interstellar calamities. Azure offers four types of replication options:

1. **Locally Redundant Storage (LRS)**: This is the most cost-effective option, but also the least durable. It's like having three clones of your data in a single datacenter. Ideal for easily reconstructed data and constantly changing data such as live feeds.

2. **Zone Redundant Storage (ZRS)**: This is LRS taken to the next level. Your data is replicated across three availability zones within a single region, like having your data clones spread across different planets in the same solar system.

3. **Geo Redundant Storage (GRS)**: This is like LRS but it replicates to a secondary region asynchronously. The secondary region is only accessed once a failover is initiated. It's like having a backup planet in another solar system.

4. **Geo-Zone Redundant Storage (GZRS)**: This is the ultimate combination of ZRS and GRS. It's like having your data clones spread across different planets in multiple solar systems. This is ideal if you want consistent, durable, highly available, excellent performance, and resiliency for disaster recovery.

Both Geo options have their own read access version; RA-GRS and RA-GZRS. These are like having a telescope that can read your data from the backup planet without having to travel there.

## 🚀 Security in the Storage Realm

All data is auto encrypted via Server Side Encryption (SSE). Few ways to handle authorization requests are:

- Azure AD
- Shared Keys
- SAS tokens

SAS tokens or shared access signature is a secure way to share resources without compromising account keys.

## 🌌 Configuring Storage Tools and AzCopy

Couple tools we'll talk about are Azure Storage Explorer and Import/Export service. The storage explorer is a standalone app that manages all the storage content. Import/Export Service is used when wanting to securely import/export large data to/from blobs and files by shipping drives to/from the Azure datacenter or on-premise site.

AzCopy is a command used to copy data to/from blobs and file storage. This is an ideal tool for incremental copy scenarios.

Indeed, that was a galaxy of knowledge! Let's take a moment for a cosmic snack break before we launch into our next adventure. Our next destination in this interstellar journey is the Compute constellation, a realm not to be underestimated. Until our next celestial encounter, keep your curiosity ignited, continue your exploration, and remember - in the infinite cosmos of cloud computing, the cloud is your trusted intergalactic ally. Until our next adventure, young grasshopper! 🚀✨