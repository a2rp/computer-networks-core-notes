// src/topics/networkBasicsModels/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiWifi,
    FiMap,
    FiGitMerge,
    FiActivity,
    FiLayers,
    FiPackage,
} from "react-icons/fi";

const NetworkBasicsModels = () => {
    // by default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "networkBasicsModels",
            title: "Network Basics and Models",
            sub: "Core terms, OSI and TCP-IP layers, and how data gets wrapped and unwrapped.",
        };
    }, []);

    return (
        <Styled.Wrapper id={meta.id}>
            <button
                type="button"
                className={`head ${open ? "open" : ""}`}
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls={`${meta.id}-content`}
            >
                <div className="left">
                    <span className="icon">
                        <FiWifi />
                    </span>
                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Foundations</span>
                        </div>
                        <p className="sub">{meta.sub}</p>
                    </div>
                </div>

                <span className="chev" aria-hidden="true">
                    <FiChevronDown />
                </span>
            </button>

            <div
                id={`${meta.id}-content`}
                className={`content ${open ? "show" : ""}`}
            >
                <div className="inner">
                    <div className="grid">
                        {/* What is a network */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiMap />
                                </span>
                                <h3 className="h3">What is a network</h3>
                            </div>

                            <p className="p">
                                A computer network is a group of devices
                                connected so they can communicate and share
                                data. Devices can be phones, laptops, servers,
                                printers, smart TVs, routers, and switches.
                            </p>

                            <p className="p">
                                Data is sent in small pieces called packets.
                                Packets travel across cables or Wi-Fi and pass
                                through devices like switches and routers until
                                they reach the destination.
                            </p>

                            <div className="mini">
                                <span className="pill">Device</span>
                                <span className="dash">-</span>
                                <span className="pill">Switch</span>
                                <span className="dash">-</span>
                                <span className="pill">Router</span>
                                <span className="dash">-</span>
                                <span className="pill">Internet</span>
                            </div>

                            <p className="note">
                                Switch usually connects devices inside a LAN.
                                Router connects different networks.
                            </p>
                        </div>

                        {/* Types */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">
                                    Network types and full forms
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">LAN</div>
                                    <div className="v">
                                        Local Area Network
                                        <span className="small">
                                            Example: home Wi-Fi, office network,
                                            college lab
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">MAN</div>
                                    <div className="v">
                                        Metropolitan Area Network
                                        <span className="small">
                                            Example: city-level network, large
                                            campus across a city
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">WAN</div>
                                    <div className="v">
                                        Wide Area Network
                                        <span className="small">
                                            Example: internet, bank branches
                                            connected across states
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">PAN</div>
                                    <div className="v">
                                        Personal Area Network
                                        <span className="small">
                                            Example: Bluetooth earphones,
                                            smartwatch, phone hotspot
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Easy memory: PAN is around one person, LAN is
                                one place, WAN is huge.
                            </p>
                        </div>

                        {/* Topologies */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiWifi />
                                </span>
                                <h3 className="h3">Topologies</h3>
                            </div>

                            <p className="p">
                                Topology means the shape of connections in a
                                network. It is about how devices are linked, not
                                the physical location.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Star</b> - all devices connect to one
                                    central device (switch or router)
                                    <span className="small">
                                        Example: most office and home networks
                                    </span>
                                </li>
                                <li>
                                    <b>Mesh</b> - devices have many connections
                                    with each other
                                    <span className="small">
                                        Example: some wireless mesh Wi-Fi
                                        systems
                                    </span>
                                </li>
                                <li>
                                    <b>Bus</b> - one main cable shared by many
                                    devices
                                    <span className="small">
                                        Example: older Ethernet setups, not
                                        common now
                                    </span>
                                </li>
                                <li>
                                    <b>Ring</b> - each device connects to two
                                    neighbors, forming a loop
                                    <span className="small">
                                        Example: older ring networks, some
                                        industrial systems
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                In real networks, star and partial mesh are most
                                common.
                            </p>
                        </div>

                        {/* Metrics */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiActivity />
                                </span>
                                <h3 className="h3">
                                    Bandwidth vs throughput vs latency vs jitter
                                </h3>
                            </div>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Bandwidth</div>
                                    <div className="v">
                                        Maximum capacity of a network link.
                                        <span className="small">
                                            Example: a 100 Mbps plan is
                                            bandwidth capacity
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Throughput</div>
                                    <div className="v">
                                        Actual useful speed you get in real
                                        life.
                                        <span className="small">
                                            Example: you might get 60 Mbps on a
                                            100 Mbps plan
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Latency</div>
                                    <div className="v">
                                        Time delay for data to travel from
                                        source to destination.
                                        <span className="small">
                                            Example: ping shows 20 ms latency
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Jitter</div>
                                    <div className="v">
                                        Variation in latency over time.
                                        <span className="small">
                                            Example: voice call breaks when
                                            delay keeps changing
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Video calls and gaming need low latency and low
                                jitter, not only bandwidth.
                            </p>
                        </div>

                        {/* OSI */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">
                                    OSI model (Open Systems Interconnection)
                                </h3>
                            </div>

                            <p className="p">
                                OSI stands for Open Systems Interconnection. It
                                is a 7-layer model used to understand how
                                networking works. It is mainly a learning and
                                troubleshooting model.
                            </p>

                            <p className="p">
                                Each layer has a specific job. When you send
                                data, it moves from layer 7 down to layer 1. At
                                the receiver, it moves from layer 1 up to layer
                                7.
                            </p>

                            <div className="osi">
                                <div className="osiRow head">
                                    <div className="c1">Layer</div>
                                    <div className="c2">Meaning</div>
                                    <div className="c3">Examples</div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">7 - Application</div>
                                    <div className="c2">
                                        User-level network services
                                    </div>
                                    <div className="c3">HTTP, DNS, SMTP</div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">6 - Presentation</div>
                                    <div className="c2">
                                        Format, encryption, compression
                                    </div>
                                    <div className="c3">TLS, JSON, UTF-8</div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">5 - Session</div>
                                    <div className="c2">
                                        Session control and continuity
                                    </div>
                                    <div className="c3">
                                        Session concepts, RPC
                                    </div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">4 - Transport</div>
                                    <div className="c2">
                                        Reliable delivery, ports
                                    </div>
                                    <div className="c3">TCP, UDP</div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">3 - Network</div>
                                    <div className="c2">
                                        IP addressing and routing
                                    </div>
                                    <div className="c3">IPv4, IPv6, ICMP</div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">2 - Data Link</div>
                                    <div className="c2">
                                        Local delivery using MAC
                                    </div>
                                    <div className="c3">
                                        Ethernet, ARP, VLAN
                                    </div>
                                </div>

                                <div className="osiRow">
                                    <div className="c1">1 - Physical</div>
                                    <div className="c2">
                                        Bits on wire or air
                                    </div>
                                    <div className="c3">
                                        Cable, fiber, Wi-Fi signal
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Full forms: HTTP is Hypertext Transfer Protocol,
                                DNS is Domain Name System, SMTP is Simple Mail
                                Transfer Protocol, TLS is Transport Layer
                                Security, TCP is Transmission Control Protocol,
                                UDP is User Datagram Protocol, IP is Internet
                                Protocol, ICMP is Internet Control Message
                                Protocol, ARP is Address Resolution Protocol,
                                VLAN is Virtual Local Area Network.
                            </p>
                        </div>

                        {/* TCP-IP mapping */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">
                                    TCP-IP model (Transmission Control Protocol
                                    - Internet Protocol)
                                </h3>
                            </div>

                            <p className="p">
                                TCP-IP stands for Transmission Control Protocol
                                and Internet Protocol. It is the model used by
                                the internet in real systems. Most diagrams show
                                4 layers.
                            </p>

                            <div className="map">
                                <div className="mapRow head">
                                    <div className="a">TCP-IP layer</div>
                                    <div className="b">OSI mapping</div>
                                </div>

                                <div className="mapRow">
                                    <div className="a">Application</div>
                                    <div className="b">OSI 5, 6, 7</div>
                                </div>

                                <div className="mapRow">
                                    <div className="a">Transport</div>
                                    <div className="b">OSI 4</div>
                                </div>

                                <div className="mapRow">
                                    <div className="a">Internet</div>
                                    <div className="b">OSI 3</div>
                                </div>

                                <div className="mapRow">
                                    <div className="a">Link</div>
                                    <div className="b">OSI 1, 2</div>
                                </div>
                            </div>

                            <p className="note">
                                Some books show 5 layers by splitting Link into
                                Data Link and Physical.
                            </p>
                        </div>

                        {/* Encapsulation */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiPackage />
                                </span>
                                <h3 className="h3">
                                    Encapsulation and decapsulation
                                </h3>
                            </div>

                            <p className="p">
                                Encapsulation means each layer adds its own
                                header while sending data down the stack.
                                Decapsulation means headers are removed while
                                data moves up the stack at the receiver.
                            </p>

                            <div className="stack">
                                <div className="layer">
                                    <div className="tag">Application</div>
                                    <div className="desc">Data</div>
                                </div>
                                <div className="layer">
                                    <div className="tag">Transport</div>
                                    <div className="desc">
                                        TCP or UDP header + data
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="tag">Network</div>
                                    <div className="desc">
                                        IP header + segment
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="tag">Data Link</div>
                                    <div className="desc">
                                        MAC header + packet + trailer
                                    </div>
                                </div>
                                <div className="layer">
                                    <div className="tag">Physical</div>
                                    <div className="desc">
                                        Bits on wire or air
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Common naming: data becomes segment, then
                                packet, then frame, then bits.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NetworkBasicsModels;
