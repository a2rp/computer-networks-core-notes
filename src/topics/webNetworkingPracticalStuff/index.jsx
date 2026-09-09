// src/topics/webNetworkingPracticalStuff/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiGlobe,
    FiLink,
    FiZap,
    FiShield,
    FiRepeat,
    FiServer,
} from "react-icons/fi";

const WebNetworkingPracticalStuff = () => {
    const [open, setOpen] = useState(true);

    const meta = useMemo(() => {
        return {
            id: "webNetworkingPracticalStuff",
            title: "Web Networking Practical Stuff",
            sub: "URL parts, request flow, and the infrastructure pieces that make the modern web work.",
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
                            <span className="badge">Web</span>
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
                    {/* URL breakdown */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiLink />
                            </span>
                            <h3 className="h3">URL breakdown</h3>
                        </div>

                        <p className="p">
                            A URL means "Uniform Resource Locator". It tells the
                            browser where a resource is and how to reach it.
                        </p>

                        <div className="urlBox">
                            <div className="urlLine">
                                <span className="mono">https</span>
                                <span className="muted">://</span>
                                <span className="mono">api.example.com</span>
                                <span className="mono">/users</span>
                                <span className="muted">?</span>
                                <span className="mono">page=2</span>
                                <span className="muted">&</span>
                                <span className="mono">sort=latest</span>
                            </div>

                            <div className="parts">
                                <div className="part">
                                    <div className="k">Scheme</div>
                                    <div className="v">
                                        <b>https</b> tells the protocol.
                                        <span className="small">
                                            HTTP is "Hypertext Transfer
                                            Protocol". HTTPS is HTTP + TLS.
                                        </span>
                                    </div>
                                </div>

                                <div className="part">
                                    <div className="k">Host</div>
                                    <div className="v">
                                        <b>api.example.com</b> is the domain
                                        name that will be resolved to an IP
                                        address.
                                        <span className="small">
                                            IP is "Internet Protocol".
                                        </span>
                                    </div>
                                </div>

                                <div className="part">
                                    <div className="k">Path</div>
                                    <div className="v">
                                        <b>/users</b> is the resource path on
                                        the server.
                                        <span className="small">
                                            Often maps to a route in a web
                                            server or API.
                                        </span>
                                    </div>
                                </div>

                                <div className="part">
                                    <div className="k">Query</div>
                                    <div className="v">
                                        <b>?page=2&sort=latest</b> is extra
                                        parameters.
                                        <span className="small">
                                            Used for filtering, pagination,
                                            sorting, search.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            A URL can also include a port like ":5173" and a
                            fragment like "#section".
                        </p>
                    </div>

                    {/* What happens when you type a URL */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiZap />
                            </span>
                            <h3 className="h3">
                                What happens when you type a URL
                            </h3>
                        </div>

                        <p className="p">
                            The browser does a small chain of steps. If any step
                            fails, the page does not load.
                        </p>

                        <div className="steps">
                            <div className="step">
                                <div className="num">1</div>
                                <div className="body">
                                    <div className="t">DNS resolve</div>
                                    <div className="d">
                                        DNS is "Domain Name System". It converts
                                        a domain name like "example.com" into an
                                        IP address like "93.184.216.34".
                                    </div>
                                    <div className="ex">
                                        Example: Browser asks a DNS resolver,
                                        gets an A record for IPv4 or AAAA record
                                        for IPv6.
                                    </div>
                                </div>
                            </div>

                            <div className="step">
                                <div className="num">2</div>
                                <div className="body">
                                    <div className="t">TCP connect</div>
                                    <div className="d">
                                        TCP is "Transmission Control Protocol".
                                        It creates a reliable connection using a
                                        3-way handshake.
                                    </div>
                                    <div className="ex">
                                        Example: Client connects to server IP on
                                        port 443 for HTTPS.
                                    </div>
                                </div>
                            </div>

                            <div className="step">
                                <div className="num">3</div>
                                <div className="body">
                                    <div className="t">TLS handshake</div>
                                    <div className="d">
                                        TLS is "Transport Layer Security". It
                                        encrypts data so nobody can read it in
                                        the middle. TLS is what makes HTTPS
                                        secure.
                                    </div>
                                    <div className="ex">
                                        Example: Browser verifies certificate
                                        and agrees on encryption keys.
                                    </div>
                                </div>
                            </div>

                            <div className="step">
                                <div className="num">4</div>
                                <div className="body">
                                    <div className="t">
                                        HTTP request and response
                                    </div>
                                    <div className="d">
                                        HTTP is "Hypertext Transfer Protocol".
                                        Browser sends a request like GET or
                                        POST. Server responds with status code
                                        and data.
                                    </div>
                                    <div className="ex">
                                        Example: GET "/users?page=2" returns
                                        JSON or HTML.
                                    </div>
                                </div>
                            </div>

                            <div className="step">
                                <div className="num">5</div>
                                <div className="body">
                                    <div className="t">Render</div>
                                    <div className="d">
                                        Browser parses HTML, loads CSS, runs
                                        JavaScript, then paints the page.
                                    </div>
                                    <div className="ex">
                                        Example: More requests happen for
                                        images, fonts, API calls, and scripts.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Debug order is usually DNS, reachability, port, TLS,
                            then HTTP.
                        </p>
                    </div>

                    {/* Cookies + sessions + CORS */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiShield />
                            </span>
                            <h3 className="h3">Cookies, sessions, and CORS</h3>
                        </div>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Cookie</div>
                                <div className="v">
                                    Small data stored by the browser and sent
                                    with requests to the same site.
                                    <span className="small">
                                        Common use: session id, preferences,
                                        auth tokens.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Session</div>
                                <div className="v">
                                    A server-side memory of a logged-in user.
                                    Browser usually stores only a session id
                                    cookie.
                                    <span className="small">
                                        "Session id" points to user data on
                                        server.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">CORS</div>
                                <div className="v">
                                    CORS is "Cross-Origin Resource Sharing". It
                                    is a browser security rule that controls
                                    whether a webpage can call an API from a
                                    different origin.
                                    <span className="small">
                                        Origin = scheme + host + port. Example:
                                        "https://a.com:443".
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            CORS is enforced by browsers, not by servers. Server
                            only sends headers that browser checks.
                        </p>
                    </div>

                    {/* CDN */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiRepeat />
                            </span>
                            <h3 className="h3">CDN basics</h3>
                        </div>

                        <p className="p">
                            CDN is "Content Delivery Network". It is a network
                            of servers placed in many locations to serve content
                            faster. Instead of every user hitting one server far
                            away, users get content from a nearby edge server.
                        </p>

                        <ul className="list">
                            <li>
                                Faster load because distance and latency reduce
                            </li>
                            <li>Caching of images, videos, JavaScript, CSS</li>
                            <li>Helps absorb traffic spikes</li>
                        </ul>

                        <p className="note">
                            Example: Cloudflare and other CDNs store a cached
                            copy of static files near users.
                        </p>
                    </div>

                    {/* Proxy vs reverse proxy */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiServer />
                            </span>
                            <h3 className="h3">Proxy vs reverse proxy</h3>
                        </div>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Proxy</div>
                                <div className="v">
                                    A client-side middleman. Client sends
                                    requests to proxy, proxy sends to internet.
                                    <span className="small">
                                        Used for privacy, filtering, access
                                        control.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Reverse proxy</div>
                                <div className="v">
                                    A server-side middleman. Users hit reverse
                                    proxy, it forwards to your backend servers.
                                    <span className="small">
                                        Used for load balancing, SSL
                                        termination, caching, security.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Simple memory: proxy protects clients, reverse proxy
                            protects servers.
                        </p>
                    </div>

                    {/* Load balancer */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiServer />
                            </span>
                            <h3 className="h3">Load balancer basics</h3>
                        </div>

                        <p className="p">
                            A load balancer distributes traffic across multiple
                            servers so one server does not get overloaded. This
                            improves performance and availability.
                        </p>

                        <ul className="list">
                            <li>
                                Spreads requests across servers using strategies
                                like round robin
                            </li>
                            <li>
                                Can do health checks and remove bad servers
                                automatically
                            </li>
                            <li>
                                Helps scale horizontally by adding more servers
                            </li>
                        </ul>

                        <p className="note">
                            In many setups, the reverse proxy and load balancer
                            are the same component.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default WebNetworkingPracticalStuff;
