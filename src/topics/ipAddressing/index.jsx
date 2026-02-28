// src/topics/ipAddressing/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiHash,
    FiGrid,
    FiHome,
    FiRepeat,
    FiShuffle,
    FiGlobe,
} from "react-icons/fi";

const IpAddressing = () => {
    const [open, setOpen] = useState(false);

    const meta = useMemo(() => {
        return {
            id: "ipAddressing",
            title: "IP Addressing (IPv4 and IPv6)",
            sub: "IP is how devices are identified across networks. Learn CIDR, subnet basics, private ranges, NAT, DHCP, and IPv6.",
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
                    {/* IPv4 format + CIDR */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiHash />
                            </span>
                            <h3 className="h3">IPv4 format and CIDR</h3>
                        </div>

                        <p className="p">
                            IPv4 is a 32-bit address written as four numbers
                            separated by dots. Each part is 0 to 255.
                        </p>

                        <div className="example">
                            <div className="line">
                                <span className="mono">192.168.1.25</span>
                                <span className="muted">
                                    example IPv4 address
                                </span>
                            </div>
                            <div className="line">
                                <span className="mono">192.168.1.0/24</span>
                                <span className="muted">
                                    CIDR - first 24 bits are network
                                </span>
                            </div>
                        </div>

                        <p className="p">
                            CIDR tells how many bits belong to the network part.
                            The remaining bits are for hosts inside that
                            network.
                        </p>

                        <p className="note">
                            Quick memory: /24 often means 255.255.255.0
                        </p>
                    </div>

                    {/* Subnetting essentials */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGrid />
                            </span>
                            <h3 className="h3">Subnetting essentials</h3>
                        </div>

                        <p className="p">
                            Subnetting splits a bigger network into smaller
                            networks. It helps manage IPs, routing, and
                            isolation.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Network ID</b>
                                <span className="small">
                                    identifies the network. It is the first
                                    address of the subnet.
                                </span>
                            </li>
                            <li>
                                <b>Broadcast</b>
                                <span className="small">
                                    last address of the subnet. Used to reach
                                    all hosts on that subnet.
                                </span>
                            </li>
                            <li>
                                <b>Usable range</b>
                                <span className="small">
                                    IPs between network id and broadcast. Used
                                    by devices.
                                </span>
                            </li>
                        </ul>

                        <div className="example">
                            <div className="line">
                                <span className="mono">192.168.1.0/24</span>
                            </div>
                            <div className="line">
                                <span className="muted">
                                    Network id: 192.168.1.0
                                </span>
                            </div>
                            <div className="line">
                                <span className="muted">
                                    Broadcast: 192.168.1.255
                                </span>
                            </div>
                            <div className="line">
                                <span className="muted">
                                    Usable: 192.168.1.1 to 192.168.1.254
                                </span>
                            </div>
                        </div>

                        <p className="note">
                            Many networks block broadcast usage directly by
                            clients, but the concept is important.
                        </p>
                    </div>

                    {/* Subnet mask meaning */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiShuffle />
                            </span>
                            <h3 className="h3">Subnet mask meaning</h3>
                        </div>

                        <p className="p">
                            A subnet mask tells which part is network and which
                            part is host. In a mask, network bits are 1 and host
                            bits are 0.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">CIDR</div>
                                <div className="v">
                                    <span className="mono">/24</span>
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">Mask</div>
                                <div className="v">
                                    <span className="mono">255.255.255.0</span>
                                </div>
                            </div>
                            <div className="kv">
                                <div className="k">Meaning</div>
                                <div className="v">
                                    first 24 bits are network, last 8 bits are
                                    hosts
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            In troubleshooting, wrong subnet mask is a very
                            common reason for "no internet".
                        </p>
                    </div>

                    {/* Private ranges */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiHome />
                            </span>
                            <h3 className="h3">Private IPv4 ranges</h3>
                        </div>

                        <p className="p">
                            Private IPs are used inside homes and companies.
                            They are not routed on the public internet.
                        </p>

                        <div className="ranges">
                            <div className="range">
                                <div className="rTitle">10.0.0.0/8</div>
                                <div className="rSub">
                                    10.x.x.x - very large private space
                                </div>
                            </div>

                            <div className="range">
                                <div className="rTitle">172.16.0.0/12</div>
                                <div className="rSub">
                                    172.16.x.x to 172.31.x.x
                                </div>
                            </div>

                            <div className="range">
                                <div className="rTitle">192.168.0.0/16</div>
                                <div className="rSub">
                                    192.168.x.x - common home routers
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Your router usually gives private IPs to devices
                            using DHCP.
                        </p>
                    </div>

                    {/* NAT */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiRepeat />
                            </span>
                            <h3 className="h3">NAT (SNAT and DNAT idea)</h3>
                        </div>

                        <p className="p">
                            NAT is Network Address Translation. It lets private
                            IP devices access the internet using a public IP on
                            the router.
                        </p>

                        <ul className="list">
                            <li>
                                <b>SNAT</b>
                                <span className="small">
                                    Source NAT - outgoing traffic source IP
                                    changes from private to public.
                                </span>
                            </li>
                            <li>
                                <b>DNAT</b>
                                <span className="small">
                                    Destination NAT - incoming traffic
                                    destination changes to an internal device.
                                </span>
                            </li>
                        </ul>

                        <div className="example">
                            <div className="line">
                                <span className="mono">192.168.1.10</span>
                                <span className="dash">-</span>
                                <span className="muted">
                                    laptop inside home
                                </span>
                            </div>
                            <div className="line">
                                <span className="mono">Public IP</span>
                                <span className="dash">-</span>
                                <span className="muted">
                                    router uses this on the internet
                                </span>
                            </div>
                        </div>

                        <p className="note">
                            Port forwarding is DNAT in a common home setup.
                        </p>
                    </div>

                    {/* DHCP */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiShuffle />
                            </span>
                            <h3 className="h3">DHCP (DORA flow)</h3>
                        </div>

                        <p className="p">
                            DHCP automatically gives your device an IP address,
                            subnet mask, gateway, and DNS settings.
                        </p>

                        <div className="dora">
                            <div className="step">
                                <div className="sTag">D</div>
                                <div className="sText">
                                    <b>Discover</b>
                                    <span className="small">
                                        device asks "is there a DHCP server"
                                    </span>
                                </div>
                            </div>

                            <div className="step">
                                <div className="sTag">O</div>
                                <div className="sText">
                                    <b>Offer</b>
                                    <span className="small">
                                        server offers an IP and config
                                    </span>
                                </div>
                            </div>

                            <div className="step">
                                <div className="sTag">R</div>
                                <div className="sText">
                                    <b>Request</b>
                                    <span className="small">
                                        device requests that offered IP
                                    </span>
                                </div>
                            </div>

                            <div className="step">
                                <div className="sTag">A</div>
                                <div className="sText">
                                    <b>Ack</b>
                                    <span className="small">
                                        server confirms and lease starts
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            If DHCP fails, you often see "no IP" or
                            "self-assigned IP" issues.
                        </p>
                    </div>

                    {/* IPv6 basics */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGlobe />
                            </span>
                            <h3 className="h3">IPv6 basics</h3>
                        </div>

                        <p className="p">
                            IPv6 is a 128-bit address written in hex groups
                            separated by colons. It exists because IPv4
                            addresses are limited and the internet needs more
                            unique addresses.
                        </p>

                        <div className="ipv6Grid">
                            <div className="box">
                                <div className="bTitle">Format</div>
                                <div className="bText">
                                    <span className="mono">
                                        2001:0db8:85a3:0000:0000:8a2e:0370:7334
                                    </span>
                                </div>
                            </div>

                            <div className="box">
                                <div className="bTitle">Shorthand rules</div>
                                <div className="bText">
                                    - Leading zeros can be removed in a group
                                    <br />- One longest run of consecutive zeros
                                    can be replaced with "::"
                                </div>
                            </div>

                            <div className="box">
                                <div className="bTitle">Common types</div>
                                <div className="bText">
                                    <b>Global</b> - public internet reachable
                                    <br />
                                    <b>Link-local</b> - starts with{" "}
                                    <span className="mono">fe80::</span>, used
                                    inside local link
                                    <br />
                                    <b>Multicast</b> - starts with{" "}
                                    <span className="mono">ff00::</span>
                                </div>
                            </div>

                            <div className="box">
                                <div className="bTitle">Why IPv6 exists</div>
                                <div className="bText">
                                    More address space, better end-to-end
                                    connectivity, simpler address assignment
                                    ideas, less NAT dependency.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            You will often see both IPv4 and IPv6 on modern
                            systems. That is dual stack.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default IpAddressing;
