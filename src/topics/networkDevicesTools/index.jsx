// src/topics/networkDevicesTools/index.jsx
import React, { useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTool,
    FiCpu,
    FiGitBranch,
    FiWifi,
    FiGlobe,
    FiTerminal,
    FiEye,
    FiMapPin,
} from "react-icons/fi";

const NetworkDevicesTools = () => {
    const [open, setOpen] = useState(false);

    return (
        <Styled.Wrapper id="networkDevicesTools">
            <button
                type="button"
                className={`head ${open ? "open" : ""}`}
                onClick={() => setOpen((s) => !s)}
                aria-expanded={open}
                aria-controls="networkDevicesTools-content"
            >
                <div className="left">
                    <span className="icon">
                        <FiTool />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">Network Devices and Tools</h2>
                            <span className="badge">Must for dev</span>
                        </div>
                        <p className="sub">
                            Devices that move packets and the command line tools
                            used to debug networking fast.
                        </p>
                    </div>
                </div>

                <span className="chev">
                    <FiChevronDown />
                </span>
            </button>

            <div
                id="networkDevicesTools-content"
                className={`content ${open ? "show" : ""}`}
            >
                <div className="grid">
                    {/* Hub vs Switch vs Router */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGitBranch />
                            </span>
                            <h3 className="h3">Hub vs Switch vs Router</h3>
                        </div>

                        <p className="p">
                            These devices look similar, but they work at
                            different layers and make very different decisions.
                        </p>

                        <div className="compare">
                            <div className="row head">
                                <div>Device</div>
                                <div>Layer</div>
                                <div>Decision based on</div>
                                <div>Beginner example</div>
                            </div>

                            <div className="row">
                                <div className="strong">Hub</div>
                                <div>Physical layer (Layer 1)</div>
                                <div>No decision - broadcasts everything</div>
                                <div>
                                    Like a loud speaker - everyone hears the
                                    same data
                                </div>
                            </div>

                            <div className="row">
                                <div className="strong">Switch</div>
                                <div>Data Link layer (Layer 2)</div>
                                <div>
                                    MAC address (Media Access Control address)
                                </div>
                                <div>
                                    Sends frames only to the correct port inside
                                    a LAN
                                </div>
                            </div>

                            <div className="row">
                                <div className="strong">Router</div>
                                <div>Network layer (Layer 3)</div>
                                <div>
                                    IP address (Internet Protocol address)
                                </div>
                                <div>
                                    Connects different networks and forwards
                                    packets
                                </div>
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                <b>MAC</b> - Media Access Control - hardware
                                address used inside a local network
                            </li>
                            <li>
                                <b>IP</b> - Internet Protocol - logical address
                                used across networks
                            </li>
                            <li>
                                Switch learns a <b>MAC table</b> to know which
                                device is on which port
                            </li>
                            <li>
                                Router uses a <b>routing table</b> to choose the
                                next hop toward destination IP
                            </li>
                        </ul>

                        <p className="note">
                            Quick memory: switch is inside a network, router
                            connects networks.
                        </p>
                    </div>

                    {/* Modem */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGlobe />
                            </span>
                            <h3 className="h3">Modem meaning</h3>
                        </div>

                        <p className="p">
                            <b>Modem</b> means <b>MO</b>dulator <b>DEM</b>
                            odulator. It converts signals so your home network
                            can talk to your Internet Service Provider.
                        </p>

                        <ul className="list">
                            <li>
                                <b>ISP</b> - Internet Service Provider - the
                                company that gives you internet
                            </li>
                            <li>
                                In many homes, the modem is built into the
                                router device you get from the ISP
                            </li>
                            <li>
                                Fiber setups often use an <b>ONT</b> - Optical
                                Network Terminal - similar role for fiber
                            </li>
                        </ul>

                        <p className="note">
                            Router manages your home network. Modem connects
                            your network to the ISP line.
                        </p>
                    </div>

                    {/* NAT */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiWifi />
                            </span>
                            <h3 className="h3">NAT device role</h3>
                        </div>

                        <p className="p">
                            <b>NAT</b> means <b>Network Address Translation</b>.
                            It lets many devices in your private network share
                            one public IP address on the internet.
                        </p>

                        <div className="mini">
                            <span className="pill">192.168.0.10</span>
                            <span className="dash">-</span>
                            <span className="pill">NAT router</span>
                            <span className="dash">-</span>
                            <span className="pill">Public IP</span>
                        </div>

                        <ul className="list">
                            <li>
                                <b>Private IP</b> - used inside home or office
                                network, not directly reachable from internet
                            </li>
                            <li>
                                <b>Public IP</b> - visible on the internet, used
                                to reach your network from outside
                            </li>
                            <li>
                                NAT keeps a translation table mapping internal
                                connections to the public IP and ports
                            </li>
                        </ul>

                        <p className="note">
                            NAT is one reason most home devices are not directly
                            exposed to the internet.
                        </p>
                    </div>

                    {/* Tools - reachability */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMapPin />
                            </span>
                            <h3 className="h3">Reachability and path tools</h3>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                ping <span className="muted">ICMP</span>
                            </div>
                            <div className="toolDesc">
                                Checks if a host is reachable and measures round
                                trip time.
                            </div>
                            <div className="toolFull">
                                <b>ICMP</b> - Internet Control Message Protocol
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                traceroute{" "}
                                <span className="muted">or tracert</span>
                            </div>
                            <div className="toolDesc">
                                Shows the route packets take by listing hops
                                (routers) between you and a destination.
                            </div>
                            <div className="toolFull">
                                Uses TTL (Time To Live) changes to reveal each
                                hop.
                            </div>
                        </div>

                        <p className="note">
                            First check ping, then check traceroute to see where
                            it is failing.
                        </p>
                    </div>

                    {/* Tools - DNS */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiEye />
                            </span>
                            <h3 className="h3">DNS lookup tools</h3>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                nslookup <span className="muted">DNS</span>
                            </div>
                            <div className="toolDesc">
                                Basic tool to query domain name records and see
                                IP addresses.
                            </div>
                            <div className="toolFull">
                                <b>DNS</b> - Domain Name System - converts names
                                to IP addresses
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                dig <span className="muted">DNS</span>
                            </div>
                            <div className="toolDesc">
                                Advanced DNS lookup tool. Shows detailed answers
                                and timings.
                            </div>
                            <div className="toolFull">
                                dig is very useful for debugging CNAME, A, AAAA,
                                MX records.
                            </div>
                        </div>

                        <p className="note">
                            Many "site not opening" issues are DNS problems, not
                            server issues.
                        </p>
                    </div>

                    {/* Tools - local info */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiCpu />
                            </span>
                            <h3 className="h3">Local network info tools</h3>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                ipconfig <span className="muted">Windows</span>
                            </div>
                            <div className="toolDesc">
                                Shows your IP address, gateway, DNS servers, and
                                adapter details.
                            </div>
                            <div className="toolFull">
                                Linux and macOS use ifconfig or ip addr.
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                ifconfig{" "}
                                <span className="muted">Linux or macOS</span>
                            </div>
                            <div className="toolDesc">
                                Shows network interfaces and their IP
                                configuration.
                            </div>
                            <div className="toolFull">
                                Modern Linux often prefers ip addr and ip route.
                            </div>
                        </div>

                        <p className="note">
                            If you do not know your gateway or DNS, start with
                            ipconfig or ip addr.
                        </p>
                    </div>

                    {/* Tools - connections */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiTerminal />
                            </span>
                            <h3 className="h3">Connection and port tools</h3>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                netstat{" "}
                                <span className="muted">
                                    network statistics
                                </span>
                            </div>
                            <div className="toolDesc">
                                Shows active connections, listening ports, and
                                routing table info.
                            </div>
                            <div className="toolFull">
                                Often used to check if a port is open on your
                                machine.
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                ss{" "}
                                <span className="muted">socket statistics</span>
                            </div>
                            <div className="toolDesc">
                                Faster modern alternative to netstat on Linux.
                            </div>
                            <div className="toolFull">
                                <b>Socket</b> means IP plus port endpoint used
                                by apps.
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                telnet <span className="muted">port test</span>
                            </div>
                            <div className="toolDesc">
                                Can test if a TCP port is reachable, but telnet
                                is not secure for real login use.
                            </div>
                            <div className="toolFull">
                                Example: telnet example.com 80 checks if port 80
                                is reachable.
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                nc <span className="muted">netcat</span>
                            </div>
                            <div className="toolDesc">
                                Powerful tool to test TCP or UDP ports, send
                                data, and listen on ports.
                            </div>
                            <div className="toolFull">
                                <b>nc</b> is short for netcat. Common for quick
                                port checks.
                            </div>
                        </div>

                        <div className="tool">
                            <div className="toolName">
                                curl <span className="muted">client URL</span>
                            </div>
                            <div className="toolDesc">
                                Makes HTTP requests from terminal to test APIs,
                                headers, redirects, and TLS.
                            </div>
                            <div className="toolFull">
                                curl is the fastest way to confirm if your API
                                is responding.
                            </div>
                        </div>

                        <p className="note">
                            For dev debugging: check if server is listening,
                            then check if client can reach the port.
                        </p>
                    </div>

                    {/* Wireshark */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiEye />
                            </span>
                            <h3 className="h3">Wireshark packet sniffing</h3>
                        </div>

                        <p className="p">
                            <b>Wireshark</b> is a packet analyzer. It captures
                            network traffic and shows packet details like IP,
                            TCP, DNS, and HTTP fields.
                        </p>

                        <ul className="list">
                            <li>
                                Useful for seeing if DNS queries are happening
                                and what response you get
                            </li>
                            <li>
                                Useful for checking TCP handshake and
                                retransmissions
                            </li>
                            <li>
                                Helps confirm what is actually sent on the wire
                            </li>
                        </ul>

                        <p className="note">
                            Packet sniffing means capturing packets. It is used
                            for debugging, not hacking.
                        </p>
                    </div>

                    {/* Reading IP + route */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMapPin />
                            </span>
                            <h3 className="h3">
                                Reading an IP and route quickly
                            </h3>
                        </div>

                        <p className="p">
                            When you see an IP like 192.168.1.25-24, the "-24"
                            is CIDR. It means the first 24 bits are the network
                            part and the rest is host part.
                        </p>

                        <div className="quick">
                            <div className="qRow">
                                <div className="qK">CIDR</div>
                                <div className="qV">
                                    Classless Inter-Domain Routing - notation
                                    like 10.0.0.5-16
                                </div>
                            </div>
                            <div className="qRow">
                                <div className="qK">Gateway</div>
                                <div className="qV">
                                    The router address used to reach outside
                                    your local network
                                </div>
                            </div>
                            <div className="qRow">
                                <div className="qK">Route</div>
                                <div className="qV">
                                    Rule that says where to send packets for a
                                    destination network
                                </div>
                            </div>
                            <div className="qRow">
                                <div className="qK">Next hop</div>
                                <div className="qV">
                                    The next router IP that will forward your
                                    packet
                                </div>
                            </div>
                        </div>

                        <ul className="list">
                            <li>
                                Fast check on Linux: <b>ip addr</b> for IP,{" "}
                                <b>ip route</b> for route
                            </li>
                            <li>
                                Fast check on Windows: <b>ipconfig</b> for IP,{" "}
                                <b>route print</b> for routes
                            </li>
                            <li>
                                If gateway is wrong, internet will not work even
                                if Wi-Fi is connected
                            </li>
                        </ul>

                        <p className="note">
                            Debug habit: confirm your IP, confirm gateway,
                            confirm DNS, then test a public IP, then test a
                            domain.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default NetworkDevicesTools;
