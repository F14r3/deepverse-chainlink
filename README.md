# DeepVerse  ![logo](https://github.com/F14r3/deepverse_tech/blob/main/assets/img/logo.png)

## a platform leveraging both Machine Learning and Blockchain to solve real-world problems

- Developed by: Fredrik Liu, Lupeng Yang, Siyu Chen
- Video link: https://youtu.be/cxvsUlYAkDI 

Let me make this clear first, machines _do **not**_ learn and smart contracts _are **not**_ smart. Why? Because if we slightly distort the inputs, the output is very likely to become completely wrong. A machine learning algorithm, if trained by 'looking' at an object straight, will fail to recognize the object if rotated unless it was also trained to recognition rotation. (Though Fred is working on 3D equivariant neural networks that can handle translation, rotation, and inversion under Euclidean space). For smart contracts, which are hard coded to do only one thing, has proven to be neither smart nor even enforceable for the case of the DAO. But Blockchain is still an truly innovative approach to governance for networks and machines. 

Our vision at **DeepVerse** is to integrate machine learning and blockchain to *do various useful things without being explicited programmed to and yet remain open, transparent, and decentralized.* 
```diff
+ Bridging the digital world and the real world.
```

## Architecture
- Machine learning backends
- Model hosted decentralized
- Decentralized storage
- API calls via Oracles
- Smart contract logic

![Illustration](https://github.com/F14r3/deepverse-chainlink/blob/master/illustration.png)


## What problem we are solving! 
Last-mile problem! What blockchain can not do!

Blockchain is good at sharing digital records and assets, where it can replace the trust between players or a central authority to verify. We have seen people claims to use blockchain for tracebility and supply chain management. The digital records may be immutable and verifiable, but how does someone know which digital record is attched to an real-life object or human. To link an entry on the blockchain, we need a physical identifier whether a small chip or QR code to links to its digital record. And this is blockchain falls down.

We are using machine learning algorithms to establish the link and solve the last-mile problem, so it can be used not only to ensure data integrity but also to give individuals control over how their data is used (for academic research, for COVID contact tracing, for drug deveopment, etc.)  


## Scenario
verification for objects on-chain and off-chain without a centralized human intervention or operation

### 1. Deepverse for product tracking
As we all know, the tamper-proof properties of blockchain are most suitable for product tracking. However, traditional schemes are easy to be deceived because there is no mechanism to prevent people from uploading fake data to the blockchain. Now, with DeepVerse's solution, you can customize a machine learning model for the product you want to track (for example, let’s say an apple recognition model), then verify if each record to be uploaded to the blockchain really means an apple. This apple recognition model bridges the digital apple (that is on the blockchain) and the real apple (that is on a supply chain), which finally perfects the blockchain tracking system. No cheating on or off the chain! In particular, we notice so far the multi-target recognition algorithm has made some good progress. By calling these algorithms, the blockchain is able to directly count the number of apples and determine their sizes and positions in a camera, which has great potential for cooperation with IoT (Internet of things) equipment.


<img src="https://github.com/F14r3/deepverse-chainlink/blob/master/tracebility_apple.png" text='illustration for tracebility' width="600">


### 2. DeepVerse for NFTs
#### 2.1 Chain of Custody
Our platform is capable of creating real-life objects and their digital twin simultaneously when combined with off-chain manufacturing. The proof of identity opens great opportunities for on-chain, off-chain exchange, which provides the foundation for next-generation commerce in our point of view.

#### 2.2 Wildlife preservation
Some animals have unique colour patterns such as Orca and Zebra, which can be used to create a digital twin of themselves for scientific research or other public funding wildlife preservation purposes. Moreover, they have their own characteristics, which can be used for digital characteristics or traits. 
For animals in zoos, it can be easily achieved as an interactive way for fundraising as people can choose their favourite ones and donate to that digital twin token, or fund the charity by purchasing the token for a definite amount of time. The money will be used to take care of the animal, and others when using apps or other devices to check the animals can also be notified by who is sponsoring the animal. 


## Attacks

For viewers of our video, you may spot GAN in our script. We briefly showed the Generative Adversarial Network (GAN) attack for image recognition and we have successfully launched an attack to our image recognition APIs. This is indeed a problem but can be addressed in a decentralized way. Our previous development for generating federated learning models while protecting data privacy comes in handy to address this issue, which is available at https://deepverse.co.uk. 
