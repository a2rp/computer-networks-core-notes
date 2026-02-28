export const qnaData = [
    {
        category: "Network Basics and Models",
        items: [
            {
                q: "What is a computer network",
                a: "A computer network is a group of interconnected devices that communicate and share data using standardized protocols.",
            },

            {
                q: "What is a protocol",
                a: "A protocol is a defined set of rules that governs how data is transmitted and received over a network. Example: HTTP, TCP, DNS.",
            },

            {
                q: "What is a packet",
                a: "A packet is a small unit of data sent across a network. It contains headers and payload.",
            },

            {
                q: "Difference between packet, segment and frame",
                a: "Segment is Transport layer data unit, Packet is Network layer data unit, Frame is Data Link layer data unit.",
            },

            {
                q: "What is bandwidth",
                a: "Bandwidth is the maximum capacity of a link measured in Mbps or Gbps.",
            },

            {
                q: "What is throughput",
                a: "Throughput is the actual data transfer rate achieved in real conditions.",
            },

            {
                q: "What is latency",
                a: "Latency is the time delay between sending and receiving data, usually measured in milliseconds.",
            },

            {
                q: "What is jitter",
                a: "Jitter is the variation in latency over time.",
            },

            {
                q: "What is LAN",
                a: "LAN stands for Local Area Network. It connects devices within a small area like a home or office.",
            },

            {
                q: "What is WAN",
                a: "WAN stands for Wide Area Network. It connects networks across large geographic areas. The internet is a WAN.",
            },

            {
                q: "What is PAN",
                a: "PAN stands for Personal Area Network. Example: Bluetooth connection between phone and earphones.",
            },

            {
                q: "What is network topology",
                a: "Topology defines how devices are physically or logically connected. Example: star, mesh, bus, ring.",
            },
        ],
    },

    {
        category: "OSI and TCP-IP",
        items: [
            {
                q: "Explain OSI model",
                a: "OSI stands for Open Systems Interconnection. It is a 7 layer conceptual model used to understand networking functions.",
            },

            {
                q: "Name OSI layers",
                a: "Physical, Data Link, Network, Transport, Session, Presentation, Application.",
            },

            {
                q: "Which layer does a router work on",
                a: "Router works at Layer 3 which is the Network layer.",
            },

            {
                q: "Which layer does a switch work on",
                a: "Switch works at Layer 2 which is the Data Link layer.",
            },

            {
                q: "What is encapsulation",
                a: "Encapsulation is the process where each layer adds its header while sending data down the stack.",
            },

            {
                q: "What is decapsulation",
                a: "Decapsulation is removing headers at each layer while receiving data.",
            },

            {
                q: "Explain TCP-IP model",
                a: "TCP-IP model has 4 layers: Application, Transport, Internet, and Link.",
            },

            {
                q: "Map OSI to TCP-IP",
                a: "OSI 5,6,7 map to Application. OSI 4 maps to Transport. OSI 3 maps to Internet. OSI 1,2 map to Link.",
            },
        ],
    },

    {
        category: "IP Addressing and Subnetting",
        items: [
            {
                q: "What is an IP address",
                a: "IP address uniquely identifies a device in a network using Internet Protocol.",
            },

            {
                q: "What is IPv4",
                a: "IPv4 is 32 bit addressing format written as four octets. Example: 192.168.1.1.",
            },

            {
                q: "What is IPv6",
                a: "IPv6 is 128 bit addressing format designed to replace IPv4.",
            },

            {
                q: "What is CIDR",
                a: "CIDR stands for Classless Inter-Domain Routing. It uses slash notation like /24 to define subnet mask.",
            },

            {
                q: "What is subnet mask",
                a: "Subnet mask separates network portion and host portion of an IP address.",
            },

            {
                q: "What is private IP range",
                a: "10.0.0.0/8, 172.16.0.0 to 172.31.255.255, 192.168.0.0/16.",
            },

            {
                q: "What is NAT",
                a: "NAT stands for Network Address Translation. It translates private IP addresses to public IP addresses.",
            },

            {
                q: "What is DHCP",
                a: "DHCP stands for Dynamic Host Configuration Protocol. It automatically assigns IP addresses.",
            },

            {
                q: "Explain DORA process",
                a: "DORA means Discover, Offer, Request, Acknowledge. It is the DHCP handshake.",
            },

            {
                q: "What is default gateway",
                a: "Default gateway is the router that forwards traffic outside the local network.",
            },
        ],
    },

    {
        category: "Routing",
        items: [
            {
                q: "What is routing",
                a: "Routing is the process of forwarding packets between networks.",
            },

            {
                q: "What is routing table",
                a: "Routing table stores network paths and next hop information.",
            },

            {
                q: "Static vs dynamic routing",
                a: "Static routing is manually configured. Dynamic routing uses protocols like OSPF or BGP.",
            },

            {
                q: "What is ICMP",
                a: "ICMP stands for Internet Control Message Protocol. Used for error reporting and ping.",
            },

            {
                q: "What is TTL",
                a: "TTL stands for Time To Live. It limits packet lifetime in hops.",
            },

            {
                q: "What is traceroute",
                a: "Traceroute shows the path packets take across routers using TTL.",
            },
        ],
    },

    {
        category: "Transport Layer TCP vs UDP",
        items: [
            {
                q: "Difference between TCP and UDP",
                a: "TCP is reliable and connection oriented. UDP is faster and connectionless.",
            },

            {
                q: "What is three way handshake",
                a: "TCP connection setup process using SYN, SYN-ACK, ACK.",
            },

            {
                q: "What is SYN",
                a: "SYN is synchronize flag used to initiate TCP connection.",
            },

            {
                q: "What is ACK",
                a: "ACK stands for acknowledgement confirming receipt of data.",
            },

            {
                q: "What is flow control",
                a: "Flow control ensures sender does not overwhelm receiver.",
            },

            {
                q: "What is congestion control",
                a: "Congestion control prevents network overload by adjusting transmission rate.",
            },
        ],
    },

    {
        category: "Application Layer and Ports",
        items: [
            { q: "Port number of HTTP", a: "HTTP default port is 80." },

            { q: "Port number of HTTPS", a: "HTTPS default port is 443." },

            { q: "Port number of SSH", a: "SSH default port is 22." },

            { q: "Port number of FTP", a: "FTP default port is 21." },

            { q: "Port number of DNS", a: "DNS default port is 53." },

            {
                q: "What is DNS",
                a: "DNS stands for Domain Name System. It converts domain names into IP addresses.",
            },

            {
                q: "What is HTTP",
                a: "HTTP stands for HyperText Transfer Protocol. It is used to transfer web pages.",
            },

            { q: "What is HTTPS", a: "HTTPS is HTTP over TLS encryption." },

            {
                q: "POP3 vs IMAP",
                a: "POP3 downloads emails locally. IMAP syncs emails across devices.",
            },
        ],
    },

    {
        category: "Security Basics",
        items: [
            {
                q: "What is TLS",
                a: "TLS stands for Transport Layer Security. It encrypts communication over the network.",
            },

            {
                q: "Symmetric vs asymmetric encryption",
                a: "Symmetric uses one key for encryption and decryption. Asymmetric uses public and private key pair.",
            },

            {
                q: "What is hashing",
                a: "Hashing converts data into fixed length output. It is one way.",
            },

            {
                q: "What is firewall",
                a: "Firewall filters network traffic based on rules.",
            },

            {
                q: "What is VPN",
                a: "VPN stands for Virtual Private Network. It creates secure encrypted tunnel.",
            },

            {
                q: "What is MITM attack",
                a: "MITM means Man In The Middle attack where attacker intercepts communication.",
            },
        ],
    },

    {
        category: "Performance and Troubleshooting",
        items: [
            {
                q: "What is packet loss",
                a: "Packet loss means packets fail to reach the destination.",
            },

            {
                q: "What is MTU",
                a: "MTU stands for Maximum Transmission Unit. It defines maximum packet size.",
            },

            {
                q: "What is PMTUD",
                a: "PMTUD stands for Path MTU Discovery. It finds smallest MTU along path.",
            },

            {
                q: "What is QoS",
                a: "QoS stands for Quality of Service. It prioritizes certain traffic types.",
            },

            {
                q: "What is caching",
                a: "Caching stores data temporarily to reduce repeated network requests.",
            },

            {
                q: "What is keep alive",
                a: "Keep alive allows reuse of TCP connection for multiple requests.",
            },

            {
                q: "Why can I ping IP but not domain",
                a: "DNS resolution may be failing even though connectivity exists.",
            },

            {
                q: "What happens when you type a URL",
                a: "DNS lookup, TCP handshake, TLS handshake, HTTP request, server response.",
            },
        ],
    },
];
