// src/topics/applicationLayerProtocols/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiLock,
    FiServer,
    FiMail,
    FiUploadCloud,
    FiTerminal,
    FiClock,
    FiRefreshCcw,
    FiLink,
} from "react-icons/fi";

const ApplicationLayerProtocols = () => {
    // default collapsed
    const [open, setOpen] = useState(true);

    const meta = useMemo(() => {
        return {
            id: "applicationLayerProtocols",
            title: "Application Layer Protocols",
            sub: "Must-know protocols used by browsers, apps, and servers. Focus on what they do and where they fit.",
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
                        <FiGlobe />
                    </span>
                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Must know</span>
                        </div>
                        <p className="sub">{meta.sub}</p>
                    </div>
                </div>

                <span className="chev">
                    <FiChevronDown />
                </span>
            </button>

            <div
                id={`${meta.id}-content`}
                className={`content ${open ? "show" : ""}`}
            >
                <div className="inner">
                    {/* HTTP vs HTTPS */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiLock />
                            </span>
                            <h3 className="h3">
                                HTTP vs HTTPS with TLS overview
                            </h3>
                        </div>

                        <p className="p">
                            <b>HTTP</b> means "Hypertext Transfer Protocol". It
                            is the request-response protocol used by browsers
                            and APIs. It sends data as plain text by default.
                        </p>

                        <p className="p">
                            <b>HTTPS</b> means "Hypertext Transfer Protocol
                            Secure". It is HTTP running over <b>TLS</b>, which
                            means "Transport Layer Security". TLS encrypts data
                            in transit and also helps verify the server identity
                            using certificates.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">HTTP</div>
                                <div className="v">
                                    No encryption. Easier to sniff on public
                                    Wi-Fi. Mostly used only for test or
                                    internal.
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">HTTPS</div>
                                <div className="v">
                                    Encrypted with TLS. Protects login, cookies,
                                    and private data.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Quick TLS idea: browser and server do a handshake,
                            agree on keys, then encrypt all traffic.
                        </p>
                    </div>

                    {/* DNS */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiServer />
                            </span>
                            <h3 className="h3">DNS basics and records</h3>
                        </div>

                        <p className="p">
                            <b>DNS</b> means "Domain Name System". It converts
                            domain names like "example.com" into IP addresses so
                            computers can connect.
                        </p>

                        <ul className="list">
                            <li>
                                <b>A</b> record - "Address" record for IPv4
                                <span className="small">
                                    Example: example.com - 93.184.216.34
                                </span>
                            </li>
                            <li>
                                <b>AAAA</b> record - IPv6 address record
                                <span className="small">
                                    Example: example.com -
                                    2606:2800:220:1:248:1893:25c8:1946
                                </span>
                            </li>
                            <li>
                                <b>CNAME</b> record - "Canonical Name" alias
                                <span className="small">
                                    Example: www.example.com points to
                                    example.com
                                </span>
                            </li>
                            <li>
                                <b>MX</b> record - "Mail Exchange" for email
                                routing
                                <span className="small">
                                    Example: mail for example.com is handled by
                                    mail.example.com
                                </span>
                            </li>
                            <li>
                                <b>NS</b> record - "Name Server" that hosts DNS
                                records
                                <span className="small">
                                    Example: ns1.provider.com and
                                    ns2.provider.com
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            DNS caching is common. That is why changes can take
                            time to fully show everywhere.
                        </p>
                    </div>

                    {/* Email */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMail />
                            </span>
                            <h3 className="h3">
                                Email basics: SMTP, IMAP, POP3
                            </h3>
                        </div>

                        <p className="p">
                            Email has two main parts - sending and receiving.
                            Sending is usually SMTP. Receiving is IMAP or POP3.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">SMTP</div>
                                <div className="v">
                                    "Simple Mail Transfer Protocol" - used to
                                    send email from client to server and between
                                    mail servers.
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">IMAP</div>
                                <div className="v">
                                    "Internet Message Access Protocol" - keeps
                                    mail on server and syncs across devices.
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">POP3</div>
                                <div className="v">
                                    "Post Office Protocol version 3" - downloads
                                    mail to device, often less sync-friendly.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Modern apps mostly use IMAP for receiving because it
                            keeps mailbox consistent across phone and laptop.
                        </p>
                    </div>

                    {/* File transfer */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiUploadCloud />
                            </span>
                            <h3 className="h3">FTP vs SFTP vs SCP</h3>
                        </div>

                        <p className="p">
                            These are used to transfer files between machines.
                            Main difference is security and how they operate.
                        </p>

                        <ul className="list">
                            <li>
                                <b>FTP</b> - "File Transfer Protocol"
                                <span className="small">
                                    Old and not secure by default. Username and
                                    password can be exposed.
                                </span>
                            </li>
                            <li>
                                <b>SFTP</b> - "SSH File Transfer Protocol"
                                <span className="small">
                                    Runs over SSH. Encrypted. Safe option for
                                    file transfer.
                                </span>
                            </li>
                            <li>
                                <b>SCP</b> - "Secure Copy Protocol"
                                <span className="small">
                                    Simple secure copy over SSH. Best for quick
                                    file copy, not a full file manager.
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            Memory: SFTP and SCP use SSH so they are encrypted.
                        </p>
                    </div>

                    {/* SSH */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiTerminal />
                            </span>
                            <h3 className="h3">SSH basics</h3>
                        </div>

                        <p className="p">
                            <b>SSH</b> means "Secure Shell". It provides a
                            secure way to remotely login and run commands on a
                            server. It also supports tunneling and secure file
                            transfer.
                        </p>

                        <div className="mini">
                            <span className="pill">ssh user@server</span>
                            <span className="dash">-</span>
                            <span className="pill">
                                Encrypted remote terminal
                            </span>
                        </div>

                        <p className="note">
                            SSH commonly uses port 22. Authentication can be
                            password or key-based.
                        </p>
                    </div>

                    {/* DHCP + NTP */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiRefreshCcw />
                            </span>
                            <h3 className="h3">DHCP and NTP</h3>
                        </div>

                        <p className="p">
                            <b>DHCP</b> means "Dynamic Host Configuration
                            Protocol". It automatically assigns IP address,
                            subnet mask, gateway, and DNS server details to
                            devices.
                        </p>

                        <div className="mini">
                            <span className="pill">Discover</span>
                            <span className="dash">-</span>
                            <span className="pill">Offer</span>
                            <span className="dash">-</span>
                            <span className="pill">Request</span>
                            <span className="dash">-</span>
                            <span className="pill">Acknowledge</span>
                        </div>

                        <p className="p">
                            <b>NTP</b> means "Network Time Protocol". It keeps
                            system clocks correct by syncing time from time
                            servers. Correct time matters for logs, security,
                            and certificates.
                        </p>

                        <p className="note">
                            Broken time can break HTTPS because certificates
                            depend on correct date and time.
                        </p>
                    </div>

                    {/* WebSockets */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiLink />
                            </span>
                            <h3 className="h3">WebSockets concept</h3>
                        </div>

                        <p className="p">
                            <b>WebSocket</b> is a protocol that creates a
                            long-lived connection between browser and server. It
                            allows two-way communication, so server can push
                            updates instantly.
                        </p>

                        <p className="p">
                            Use case: chat apps, live notifications, real-time
                            dashboards, multiplayer games. It avoids repeated
                            polling requests.
                        </p>

                        <p className="note">
                            WebSocket usually starts as an HTTP request, then
                            upgrades the connection.
                        </p>
                    </div>

                    {/* REST vs gRPC */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGlobe />
                            </span>
                            <h3 className="h3">REST vs gRPC</h3>
                        </div>

                        <p className="p">
                            <b>REST</b> means "Representational State Transfer".
                            It is an API style that uses HTTP methods like GET,
                            POST, PUT, DELETE, usually with JSON payloads.
                        </p>

                        <p className="p">
                            <b>gRPC</b> means "Google Remote Procedure Call". It
                            is a high-performance RPC framework. It uses
                            Protocol Buffers and often runs over HTTP/2.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">REST</div>
                                <div className="v">
                                    Human-readable, easy for web, common for
                                    public APIs.
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">gRPC</div>
                                <div className="v">
                                    Faster and strongly typed, common in
                                    microservices and internal systems.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Very high level rule: REST is simpler to start, gRPC
                            is stronger for service-to-service.
                        </p>
                    </div>

                    <div className="footerTip">
                        <div className="tipTitle">Quick debug mindset</div>
                        <div className="tipText">
                            If a website fails: check DNS first, then ping, then
                            ports, then TLS, then HTTP status codes.
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ApplicationLayerProtocols;
