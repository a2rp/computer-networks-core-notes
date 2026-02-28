// src/topics/transportLayerTcpUdp/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShuffle,
    FiSend,
    FiLink,
    FiActivity,
    FiBox,
} from "react-icons/fi";

const TransportLayerTcpUdp = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "transportLayerTcpUdp",
            title: "Transport Layer - TCP vs UDP",
            sub: "Ports, sockets, delivery guarantees, and the practical difference between TCP and UDP.",
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
                        <FiSend />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Core</span>
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
                <div className="grid">
                    {/* What is Transport layer */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiShuffle />
                            </span>
                            <h3 className="h3">What is the Transport Layer</h3>
                        </div>

                        <p className="p">
                            The Transport Layer (Layer 4 in OSI) delivers data
                            from one application to another application. It sits
                            above IP (Internet Protocol) and adds the idea of
                            ports, reliability, ordering, and flow control.
                        </p>

                        <div className="mini">
                            <span className="pill">App data</span>
                            <span className="dash">-</span>
                            <span className="pill">TCP or UDP</span>
                            <span className="dash">-</span>
                            <span className="pill">IP</span>
                            <span className="dash">-</span>
                            <span className="pill">Network</span>
                        </div>

                        <p className="note">
                            IP (Internet Protocol) moves packets host to host.
                            TCP (Transmission Control Protocol) and UDP (User
                            Datagram Protocol) move data app to app using ports.
                        </p>
                    </div>

                    {/* Ports and sockets */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiBox />
                            </span>
                            <h3 className="h3">Port numbers and sockets</h3>
                        </div>

                        <p className="p">
                            A port is a logical number that identifies which
                            application or service should receive the data on a
                            machine. One IP address can run many services, ports
                            separate them.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Port</div>
                                <div className="v">
                                    A number in range 0 to 65535.
                                    <span className="small">
                                        Example: HTTPS uses port 443
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Socket</div>
                                <div className="v">
                                    An endpoint of communication. Usually
                                    written as IP:Port.
                                    <span className="small">
                                        Example: 192.168.1.10:5173
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Connection</div>
                                <div className="v">
                                    For TCP, a connection is identified by a
                                    4-tuple.
                                    <span className="small">
                                        Source IP, Source Port, Destination IP,
                                        Destination Port
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            One server can handle thousands of clients because
                            each client connection has a different 4-tuple.
                        </p>
                    </div>

                    {/* TCP vs UDP quick compare */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiLink />
                            </span>
                            <h3 className="h3">TCP vs UDP (quick compare)</h3>
                        </div>

                        <div className="compare">
                            <div className="row head">
                                <div className="c1">Point</div>
                                <div className="c2">TCP</div>
                                <div className="c3">UDP</div>
                            </div>

                            <div className="row">
                                <div className="c1">Full form</div>
                                <div className="c2">
                                    Transmission Control Protocol
                                </div>
                                <div className="c3">User Datagram Protocol</div>
                            </div>

                            <div className="row">
                                <div className="c1">Connection</div>
                                <div className="c2">Connection-oriented</div>
                                <div className="c3">Connectionless</div>
                            </div>

                            <div className="row">
                                <div className="c1">Ordering</div>
                                <div className="c2">
                                    Keeps order (sequence numbers)
                                </div>
                                <div className="c3">No ordering guarantee</div>
                            </div>

                            <div className="row">
                                <div className="c1">Reliability</div>
                                <div className="c2">
                                    Reliable (ACK + retransmit)
                                </div>
                                <div className="c3">Best effort</div>
                            </div>

                            <div className="row">
                                <div className="c1">Speed</div>
                                <div className="c2">More overhead</div>
                                <div className="c3">Less overhead</div>
                            </div>
                        </div>

                        <p className="note">
                            Rule: use TCP when correctness matters, use UDP when
                            speed and low delay matter.
                        </p>
                    </div>

                    {/* TCP features */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiActivity />
                            </span>
                            <h3 className="h3">TCP features (explained)</h3>
                        </div>

                        <div className="section">
                            <h4 className="h4">1) 3-way handshake</h4>
                            <p className="p">
                                TCP starts with a handshake to create a
                                connection and agree on initial sequence
                                numbers.
                            </p>

                            <div className="mini">
                                <span className="pill">SYN</span>
                                <span className="dash">-</span>
                                <span className="pill">SYN-ACK</span>
                                <span className="dash">-</span>
                                <span className="pill">ACK</span>
                            </div>

                            <ul className="list">
                                <li>
                                    <b>SYN</b> - Synchronize. Client says "I
                                    want to start a connection".
                                </li>
                                <li>
                                    <b>ACK</b> - Acknowledgment. Receiver says
                                    "I received your message".
                                </li>
                                <li>
                                    <b>SYN-ACK</b> - Server replies "I agree,
                                    and I also acknowledge your SYN".
                                </li>
                            </ul>

                            <p className="note">
                                This handshake helps TCP start reliably and
                                prevents confusion between old and new packets.
                            </p>
                        </div>

                        <div className="section">
                            <h4 className="h4">2) Sequence number and ACK</h4>
                            <p className="p">
                                TCP breaks data into segments. Each segment has
                                a <b>sequence number</b> that helps the receiver
                                put data back in correct order. Receiver sends{" "}
                                <b>ACK</b> with the next expected sequence
                                number.
                            </p>

                            <div className="exampleBox">
                                <div className="exRow">
                                    <span className="mono">Seq=1000</span>
                                    <span className="txt">Segment sent</span>
                                </div>
                                <div className="exRow">
                                    <span className="mono">ACK=1200</span>
                                    <span className="txt">
                                        Receiver expects next byte from 1200
                                    </span>
                                </div>
                            </div>

                            <p className="note">
                                If a segment is missing, ACK does not move
                                forward and sender can retransmit.
                            </p>
                        </div>

                        <div className="section">
                            <h4 className="h4">3) Flow control (window)</h4>
                            <p className="p">
                                Flow control prevents a fast sender from
                                overwhelming a slow receiver. Receiver tells the
                                sender how much buffer space it has using a{" "}
                                <b>window</b>.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Window</b> - how much data can be in
                                    flight without waiting for ACK.
                                </li>
                                <li>
                                    If receiver is busy, it advertises a smaller
                                    window.
                                </li>
                                <li>
                                    This protects the receiver from memory
                                    overload.
                                </li>
                            </ul>

                            <p className="note">
                                Think: window is receiver-side capacity control.
                            </p>
                        </div>

                        <div className="section">
                            <h4 className="h4">
                                4) Congestion control (high level)
                            </h4>
                            <p className="p">
                                Congestion control protects the network, not
                                just the receiver. Congestion means routers and
                                links are overloaded, causing packet loss and
                                delays.
                            </p>

                            <ul className="list">
                                <li>
                                    TCP adjusts its sending rate depending on
                                    loss and delay signals.
                                </li>
                                <li>
                                    It increases speed when network is fine, and
                                    decreases when congestion is detected.
                                </li>
                                <li>
                                    <b>cwnd</b> - congestion window, a limit
                                    decided by TCP based on network conditions.
                                </li>
                            </ul>

                            <p className="note">
                                Think: window is receiver capacity, cwnd is
                                network capacity.
                            </p>
                        </div>

                        <div className="section">
                            <h4 className="h4">5) Retransmission</h4>
                            <p className="p">
                                Retransmission means sending data again when it
                                is lost. TCP detects loss using timeouts or
                                repeated ACK patterns.
                            </p>

                            <ul className="list">
                                <li>
                                    If ACK does not arrive in time, sender
                                    retransmits (timeout).
                                </li>
                                <li>
                                    If receiver keeps ACKing the same number,
                                    sender suspects a missing segment (duplicate
                                    ACK).
                                </li>
                                <li>This is why TCP is reliable.</li>
                            </ul>

                            <p className="note">
                                Reliability comes from tracking sequence numbers
                                and resending missing parts.
                            </p>
                        </div>
                    </div>

                    {/* UDP */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiSend />
                            </span>
                            <h3 className="h3">UDP features and use cases</h3>
                        </div>

                        <p className="p">
                            UDP is simple and fast. It sends datagrams without
                            creating a connection. There is no handshake, no
                            ordering guarantee, and no built-in retransmission.
                        </p>

                        <ul className="list">
                            <li>
                                Low overhead - minimal header, fast processing
                            </li>
                            <li>
                                Best for real-time where late data is useless
                            </li>
                            <li>Apps can implement reliability if needed</li>
                        </ul>

                        <div className="chips">
                            <span className="chip">video streaming</span>
                            <span className="chip">voice calls</span>
                            <span className="chip">online games</span>
                            <span className="chip">DNS queries</span>
                            <span className="chip">DHCP</span>
                        </div>

                        <p className="note">
                            Example: In a call, it is better to drop an old
                            packet than to wait and create delay.
                        </p>
                    </div>

                    {/* Ports must know */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiBox />
                            </span>
                            <h3 className="h3">
                                Common port numbers (must know)
                            </h3>
                        </div>

                        <p className="p">
                            Many services have standard ports. You should
                            remember the common ones for interviews and
                            debugging.
                        </p>

                        <div className="ports">
                            <div className="pRow head">
                                <div className="a">Port</div>
                                <div className="b">Protocol</div>
                                <div className="c">Use</div>
                            </div>

                            <div className="pRow">
                                <div className="a">20, 21</div>
                                <div className="b">FTP</div>
                                <div className="c">File Transfer Protocol</div>
                            </div>

                            <div className="pRow">
                                <div className="a">22</div>
                                <div className="b">SSH</div>
                                <div className="c">
                                    Secure Shell (remote login)
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">23</div>
                                <div className="b">Telnet</div>
                                <div className="c">
                                    Unencrypted remote login
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">25</div>
                                <div className="b">SMTP</div>
                                <div className="c">
                                    Simple Mail Transfer Protocol
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">53</div>
                                <div className="b">DNS</div>
                                <div className="c">Domain Name System</div>
                            </div>

                            <div className="pRow">
                                <div className="a">67, 68</div>
                                <div className="b">DHCP</div>
                                <div className="c">
                                    Dynamic Host Configuration Protocol
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">80</div>
                                <div className="b">HTTP</div>
                                <div className="c">
                                    Hypertext Transfer Protocol
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">110</div>
                                <div className="b">POP3</div>
                                <div className="c">Post Office Protocol v3</div>
                            </div>

                            <div className="pRow">
                                <div className="a">143</div>
                                <div className="b">IMAP</div>
                                <div className="c">
                                    Internet Message Access Protocol
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">443</div>
                                <div className="b">HTTPS</div>
                                <div className="c">
                                    HTTP Secure (HTTP over TLS)
                                </div>
                            </div>

                            <div className="pRow">
                                <div className="a">3306</div>
                                <div className="b">MySQL</div>
                                <div className="c">Database</div>
                            </div>

                            <div className="pRow">
                                <div className="a">5432</div>
                                <div className="b">PostgreSQL</div>
                                <div className="c">Database</div>
                            </div>

                            <div className="pRow">
                                <div className="a">6379</div>
                                <div className="b">Redis</div>
                                <div className="c">In-memory data store</div>
                            </div>
                        </div>

                        <p className="note">
                            TCP is common for HTTP and HTTPS. DNS mostly uses
                            UDP, but it can use TCP for large responses.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TransportLayerTcpUdp;
