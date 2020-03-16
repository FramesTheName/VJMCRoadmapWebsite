import { Career } from '../models/career';

export const CAREERS: Career[] = [
    {
        "id": 1,
        "name": "Cyber Security",
        "shortDescription": "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security.",
        "description": "Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories.Network security is the practice of securing a computer network from intruders, whether targeted attackers or opportunistic malware.\nApplication security focuses on keeping software and devices free of threats. A compromised application could provide access to the data its designed to protect. Successful security begins in the design stage, well before a program or device is deployed.\nInformation security protects the integrity and privacy of data, both in storage and in transit.\nOperational security includes the processes and decisions for handling and protecting data assets. The permissions users have when accessing a network and the procedures that determine how and where data may be stored or shared all fall under this umbrella.\nDisaster recovery and business continuity define how an organization responds to a cyber-security incident or any other event that causes the loss of operations or data. Disaster recovery policies dictate how the organization restores its operations and information to return to the same operating capacity as before the event. Business continuity is the plan the organization falls back on while trying to operate without certain resources.\nEnd-user education addresses the most unpredictable cyber-security factor: people. Anyone can accidentally introduce a virus to an otherwise secure system by failing to follow good security practices. Teaching users to delete suspicious email attachments, not plug in unidentified USB drives, and various other important lessons is vital for the security of any organization.",
        "salaryRange": [
          50000,
          100000
        ],
        "priorExperience": "2-4 years",
        "estimatedCompletion": "4 years",
        "skillValue": [
          [1,1],
          [2,2],
          [3,3],
          [4,4],
          [5,5],
          [6,1],
          [7,2],
          [8,3],
          [9,4],
          [10,5],
          [11,1],
          [12,2],
          [13,3],
          [14,4],
          [15,5],
          [16,1],
          [17,2],
          [18,3],
          [19,4]
        ]
      },
    {id: 2, name: 'career 2', description: 'A long indepth description of Career 2', shortDescription: 'A short indepth description of Career 2', 
    salaryRange: [10000, 11000], priorExperience: 'none', estimatedCompletion: '2 years',
    "skillValue": [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19]]},
    {id: 3, name: 'career 3', description: 'A long indepth description of Career 3', shortDescription: 'A short indepth description of Career 3', 
    salaryRange: [9000, 10000], priorExperience: '3-5 yrs', estimatedCompletion: 'None',
    "skillValue": [[1,1],[2,2],[3,3],[4,4],[5,5],[6,6],[7,7],[8,8],[9,9],[10,10],[11,11],[12,12],[13,13],[14,14],[15,15],[16,16],[17,17],[18,18],[19,19]]}
];
