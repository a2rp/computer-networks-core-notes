// src/topics/performanceReliability/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiTrendingUp,
    FiAlertTriangle,
    FiRefreshCw,
    FiMaximize2,
    FiSliders,
    FiClock,
    FiZap,
} from "react-icons/fi";

const PerformanceReliability = () => {
    // by default collapsed
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "performanceReliability",
            title: "Performance and Reliability Concepts",
            sub: "Speed is not just bandwidth. Reliability is not just retries. Learn the common causes of slow or unstable networking.",
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
                        <FiTrendingUp />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Practical</span>
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
                    {/* Packet loss */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiAlertTriangle />
                            </span>
                            <h3 className="h3">Packet loss</h3>
                        </div>

                        <p className="p">
                            <b>Packet loss</b> means some packets never reach
                            the destination. It usually happens due to Wi-Fi
                            interference, congestion, weak signal, overloaded
                            routers, or unstable ISP links.
                        </p>

                        <p className="p">
                            Why it hurts: TCP (Transmission Control Protocol)
                            assumes loss means congestion and slows down. Even a
                            small loss can make the internet feel slow.
                        </p>

                        <div className="examples">
                            <div className="exRow">
                                <div className="k">Symptoms</div>
                                <div className="v">
                                    buffering, call drops, lag spikes, pages
                                    stuck
                                </div>
                            </div>
                            <div className="exRow">
                                <div className="k">Quick check</div>
                                <div className="v">
                                    use <span className="mono">ping</span> and
                                    watch for "Request timed out"
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Low bandwidth can still work for browsing. Packet
                            loss makes everything feel broken.
                        </p>
                    </div>

                    {/* Retries, timeouts */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiRefreshCw />
                            </span>
                            <h3 className="h3">Retries and timeouts</h3>
                        </div>

                        <p className="p">
                            A <b>retry</b> happens when a sender sends the same
                            data again because it did not get confirmation. In
                            TCP, confirmations are called <b>ACK</b>
                            (Acknowledgement).
                        </p>

                        <p className="p">
                            A <b>timeout</b> is the maximum waiting time before
                            retrying or failing. If the network is slow or
                            packets are lost, timeouts trigger retries, which
                            adds more delay.
                        </p>

                        <div className="mini">
                            <span className="pill">Send</span>
                            <span className="dash">-</span>
                            <span className="pill">Wait for ACK</span>
                            <span className="dash">-</span>
                            <span className="pill">Timeout</span>
                            <span className="dash">-</span>
                            <span className="pill">Retry</span>
                        </div>

                        <p className="note">
                            Too aggressive retries can increase congestion. Too
                            slow timeouts feel unresponsive.
                        </p>
                    </div>

                    {/* MTU + PMTUD */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiMaximize2 />
                            </span>
                            <h3 className="h3">MTU issues and PMTUD</h3>
                        </div>

                        <p className="p">
                            <b>MTU</b> (Maximum Transmission Unit) is the
                            largest packet size that can be sent on a link
                            without fragmentation. Common Ethernet MTU is 1500
                            bytes.
                        </p>

                        <p className="p">
                            If a packet is larger than MTU, it may be
                            <b>fragmented</b> (split) or dropped. Some networks
                            block fragmentation, which causes weird issues like
                            some websites loading and others failing.
                        </p>

                        <p className="p">
                            <b>PMTUD</b> (Path MTU Discovery) is a method where
                            systems discover the smallest MTU along the path and
                            adjust packet size automatically. It often depends
                            on ICMP (Internet Control Message Protocol)
                            messages.
                        </p>

                        <div className="examples">
                            <div className="exRow">
                                <div className="k">Symptoms</div>
                                <div className="v">
                                    VPN works partially, large downloads fail,
                                    specific sites hang
                                </div>
                            </div>
                            <div className="exRow">
                                <div className="k">Mental model</div>
                                <div className="v">
                                    big packet hits a narrow tunnel and gets
                                    stuck
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            MTU bugs feel like magic until you know MTU exists.
                        </p>
                    </div>

                    {/* QoS */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiSliders />
                            </span>
                            <h3 className="h3">QoS concept</h3>
                        </div>

                        <p className="p">
                            <b>QoS</b> means Quality of Service. It is a set of
                            rules that prioritize certain traffic over others
                            when the network is busy.
                        </p>

                        <p className="p">
                            Example: voice calls and video meetings need low
                            latency and low jitter. Downloads can tolerate
                            delay. QoS can keep calls smooth by giving them
                            priority.
                        </p>

                        <div className="chips">
                            <span className="chip">voice</span>
                            <span className="chip">video call</span>
                            <span className="chip">gaming</span>
                            <span className="chip">downloads</span>
                            <span className="chip">backups</span>
                        </div>

                        <p className="note">
                            QoS does not create bandwidth. It manages who gets
                            it first.
                        </p>
                    </div>

                    {/* Caching */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiZap />
                            </span>
                            <h3 className="h3">Caching (DNS and HTTP)</h3>
                        </div>

                        <p className="p">
                            <b>Caching</b> means storing results so next time
                            the same request is faster. Caches exist everywhere
                            in networking and the web.
                        </p>

                        <div className="twoCol">
                            <div className="box">
                                <div className="boxTitle">DNS caching</div>
                                <p className="p">
                                    <b>DNS</b> is Domain Name System. It
                                    translates domain names like "example.com"
                                    into IP addresses. DNS results are cached
                                    for a time called <b>TTL</b>
                                    (Time To Live).
                                </p>
                                <ul className="list">
                                    <li>
                                        Good: reduces repeated DNS lookups and
                                        speeds up page loads
                                    </li>
                                    <li>
                                        Bad: old cache can point to old IP
                                        during changes
                                    </li>
                                </ul>
                                <p className="note">
                                    Example: you changed server IP but some
                                    users still hit the old one due to TTL.
                                </p>
                            </div>

                            <div className="box">
                                <div className="boxTitle">HTTP caching</div>
                                <p className="p">
                                    <b>HTTP</b> is HyperText Transfer Protocol.
                                    Browsers and CDNs cache files like images,
                                    CSS, and JS. Cache rules are controlled by
                                    headers like Cache-Control and ETag.
                                </p>
                                <ul className="list">
                                    <li>
                                        Good: faster loads, less bandwidth usage
                                    </li>
                                    <li>
                                        Bad: stale cache can show old UI unless
                                        cache is managed
                                    </li>
                                </ul>
                                <p className="note">
                                    Example: deploy changed JS but user still
                                    sees old version due to caching.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Keep-alive */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiClock />
                            </span>
                            <h3 className="h3">Connection keep-alive</h3>
                        </div>

                        <p className="p">
                            <b>Keep-alive</b> means reusing an existing
                            connection instead of creating a new one for every
                            request. This saves time because setting up TCP and
                            TLS connections costs extra round trips.
                        </p>

                        <p className="p">
                            In HTTP, keep-alive allows multiple requests to use
                            the same TCP connection. HTTP-2 goes further by
                            multiplexing many requests in one connection.
                        </p>

                        <div className="examples">
                            <div className="exRow">
                                <div className="k">Benefit</div>
                                <div className="v">
                                    faster page loads, less handshake overhead
                                </div>
                            </div>
                            <div className="exRow">
                                <div className="k">Tradeoff</div>
                                <div className="v">
                                    too many open connections can waste server
                                    resources
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Keep-alive makes repeated requests feel instant
                            after the first load.
                        </p>
                    </div>

                    {/* Quick summary */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiTrendingUp />
                            </span>
                            <h3 className="h3">Quick debug checklist</h3>
                        </div>

                        <ul className="list">
                            <li>Check packet loss first using ping</li>
                            <li>
                                Check latency stability, jitter shows
                                instability
                            </li>
                            <li>
                                If only some sites fail, suspect MTU or DNS
                                cache
                            </li>
                            <li>
                                If calls lag while downloads run, QoS can help
                            </li>
                            <li>
                                If UI updates do not show, suspect HTTP caching
                            </li>
                        </ul>

                        <p className="note">
                            Most real bugs are not advanced. They are basic
                            concepts showing up in messy ways.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PerformanceReliability;
