// src/components/aboutComputerNetworks/index.jsx
import React from "react";
import { Styled } from "./styled";
import { FiWifi, FiLayers, FiSend } from "react-icons/fi";

const AboutComputerNetworks = () => {
    return (
        <Styled.Wrapper id="aboutComputerNetworks">
            <div className="top">
                <h2 className="title">Computer Networks</h2>
                <p className="sub">
                    Computer networks are the rules and wiring that let machines
                    talk. Your phone, laptop, servers, routers, and switches
                    keep exchanging packets so apps can load pages, stream
                    videos, sync files, and send messages.
                </p>

                <p className="sub">
                    The big idea is layers. We break the problem into parts like
                    addressing, routing, reliable delivery, and application
                    protocols. OSI and TCP-IP are just maps that help you know
                    where a concept belongs and what to debug first.
                </p>

                <p className="sub">
                    This page keeps it practical. You will revise IP and subnet
                    basics, TCP vs UDP, DNS and HTTP flow, plus the tools used
                    to troubleshoot fast like ping, traceroute, dig, and curl.
                </p>
            </div>

            <div className="grid">
                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiLayers />
                        </span>
                        <h3 className="h3">Layer mental model</h3>
                    </div>

                    <div className="mini">
                        <span className="pill">App</span>
                        <span className="dash">-</span>
                        <span className="pill">TCP or UDP</span>
                        <span className="dash">-</span>
                        <span className="pill">IP</span>
                        <span className="dash">-</span>
                        <span className="pill">MAC</span>
                        <span className="dash">-</span>
                        <span className="pill">Wire or Wi-Fi</span>
                    </div>

                    <p className="note">
                        Routers forward by IP. Switches forward by MAC. Apps
                        pick ports.
                    </p>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiSend />
                        </span>
                        <h3 className="h3">Web request in 1 line</h3>
                    </div>

                    <div className="mini">
                        <span className="pill">DNS</span>
                        <span className="dash">-</span>
                        <span className="pill">TCP</span>
                        <span className="dash">-</span>
                        <span className="pill">TLS</span>
                        <span className="dash">-</span>
                        <span className="pill">HTTP</span>
                    </div>

                    <p className="note">
                        Debug order: DNS, reachability, port, TLS, then HTTP.
                    </p>
                </div>

                <div className="card">
                    <div className="cardTop">
                        <span className="icon">
                            <FiWifi />
                        </span>
                        <h3 className="h3">What you should know</h3>
                    </div>

                    <ul className="list">
                        <li>Addressing: IPv4, CIDR, private ranges, NAT</li>
                        <li>
                            Transport: TCP handshake, UDP use cases, common
                            ports
                        </li>
                        <li>Core protocols: DNS, HTTP-HTTPS, DHCP, ICMP</li>
                        <li>Basics of security: TLS, firewall, VPN</li>
                    </ul>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default AboutComputerNetworks;
