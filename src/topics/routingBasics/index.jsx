// src/topics/routingBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShuffle,
    FiHardDrive,
    FiMap,
    FiCornerUpRight,
    FiActivity,
    FiClock,
} from "react-icons/fi";

const RoutingBasics = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "routingBasics",
            title: "Routing Basics",
            sub: "Routers move packets between networks. Learn gateway, routing table, ICMP, and TTL hops.",
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
                        <FiShuffle />
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
                    {/* Router vs switch vs gateway */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiHardDrive />
                            </span>
                            <h3 className="h3">Router vs switch vs gateway</h3>
                        </div>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Switch</div>
                                <div className="v">
                                    Works inside a LAN. Forwards by MAC address.
                                    <span className="small">
                                        Example: office switch connects many PCs
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Router</div>
                                <div className="v">
                                    Connects different networks. Forwards by IP
                                    and routing table.
                                    <span className="small">
                                        Example: home router connects LAN to
                                        Internet
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Gateway</div>
                                <div className="v">
                                    The exit point from your network to another
                                    network. In homes, the router is usually the
                                    gateway.
                                    <span className="small">
                                        Example: default gateway is 192.168.1.1
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Quick memory: switch is inside, router connects
                            outside, gateway is the exit address your device
                            uses.
                        </p>
                    </div>

                    {/* Routing table idea */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMap />
                            </span>
                            <h3 className="h3">Routing table idea</h3>
                        </div>

                        <p className="p">
                            A routing table is like a map that tells the router
                            where to send a packet next. The router looks at the
                            destination IP, finds the best matching route, then
                            forwards the packet to the next hop.
                        </p>

                        <div className="rt">
                            <div className="rtRow head">
                                <div className="c1">Destination</div>
                                <div className="c2">Next hop</div>
                                <div className="c3">Interface</div>
                            </div>
                            <div className="rtRow">
                                <div className="c1">192.168.1.0/24</div>
                                <div className="c2">Direct</div>
                                <div className="c3">LAN</div>
                            </div>
                            <div className="rtRow">
                                <div className="c1">10.0.0.0/8</div>
                                <div className="c2">10.1.1.1</div>
                                <div className="c3">WAN</div>
                            </div>
                            <div className="rtRow">
                                <div className="c1">0.0.0.0/0</div>
                                <div className="c2">ISP gateway</div>
                                <div className="c3">WAN</div>
                            </div>
                        </div>

                        <p className="note">
                            The default route 0.0.0.0/0 means "everything else
                            goes this way".
                        </p>
                    </div>

                    {/* Default gateway */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiCornerUpRight />
                            </span>
                            <h3 className="h3">Default gateway</h3>
                        </div>

                        <p className="p">
                            Default gateway is the IP address your device uses
                            when the destination is outside your local network.
                            If you are sending to a different subnet or the
                            internet, your computer sends the packet to the
                            gateway first.
                        </p>

                        <div className="mini">
                            <span className="pill">Laptop</span>
                            <span className="dash">-</span>
                            <span className="pill">Default gateway</span>
                            <span className="dash">-</span>
                            <span className="pill">ISP</span>
                            <span className="dash">-</span>
                            <span className="pill">Server</span>
                        </div>

                        <p className="note">
                            If your internet is not working, check if you can
                            ping the default gateway first.
                        </p>
                    </div>

                    {/* Static vs dynamic routing */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiShuffle />
                            </span>
                            <h3 className="h3">Static vs dynamic routing</h3>
                        </div>

                        <ul className="list">
                            <li>
                                <b>Static routing</b>
                                <span className="small">
                                    Routes are manually configured. Simple,
                                    predictable, but not flexible.
                                </span>
                            </li>
                            <li>
                                <b>Dynamic routing</b>
                                <span className="small">
                                    Routers learn routes automatically using
                                    routing protocols. Handles changes better.
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            Static is common in small networks. Dynamic is used
                            when you have many routers or changing paths.
                        </p>
                    </div>

                    {/* Routing protocols high level */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMap />
                            </span>
                            <h3 className="h3">
                                Routing protocols (high level use)
                            </h3>
                        </div>

                        <div className="proto">
                            <div className="protoRow head">
                                <div className="c1">Protocol</div>
                                <div className="c2">Used for</div>
                                <div className="c3">Simple idea</div>
                            </div>

                            <div className="protoRow">
                                <div className="c1">RIP</div>
                                <div className="c2">Small networks</div>
                                <div className="c3">
                                    Uses hop count as metric. Easy but limited.
                                </div>
                            </div>

                            <div className="protoRow">
                                <div className="c1">OSPF</div>
                                <div className="c2">
                                    Enterprise internal routing
                                </div>
                                <div className="c3">
                                    Chooses best path using cost. Fast
                                    convergence.
                                </div>
                            </div>

                            <div className="protoRow">
                                <div className="c1">BGP</div>
                                <div className="c2">Internet wide routing</div>
                                <div className="c3">
                                    Connects ISPs and big networks. Policy based
                                    routing.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Easy memory: RIP small, OSPF enterprise, BGP
                            internet.
                        </p>
                    </div>

                    {/* ICMP */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiActivity />
                            </span>
                            <h3 className="h3">
                                ICMP basics (ping and traceroute)
                            </h3>
                        </div>

                        <p className="p">
                            ICMP is used for network diagnostics and error
                            reporting. It is not TCP or UDP. Ping uses ICMP Echo
                            Request and Echo Reply to test reachability.
                        </p>

                        <ul className="list">
                            <li>
                                <b>ping</b>
                                <span className="small">
                                    Checks if a host is reachable and shows
                                    latency.
                                </span>
                            </li>
                            <li>
                                <b>traceroute</b>
                                <span className="small">
                                    Shows the path packets take across hops
                                    using TTL behavior.
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            If ping to gateway fails, it is likely local network
                            issue, not DNS.
                        </p>
                    </div>

                    {/* TTL and hops */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiClock />
                            </span>
                            <h3 className="h3">TTL and hop concept</h3>
                        </div>

                        <p className="p">
                            TTL means Time To Live. It is a number inside the IP
                            header. Every router that forwards a packet
                            decreases TTL by 1. If TTL reaches 0, the packet is
                            dropped.
                        </p>

                        <div className="mini">
                            <span className="pill">Start TTL 64</span>
                            <span className="dash">-</span>
                            <span className="pill">Hop 1 TTL 63</span>
                            <span className="dash">-</span>
                            <span className="pill">Hop 2 TTL 62</span>
                            <span className="dash">-</span>
                            <span className="pill">and so on</span>
                        </div>

                        <p className="note">
                            TTL prevents infinite loops. Traceroute uses this
                            behavior to reveal hop-by-hop path.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default RoutingBasics;
