// src/topics/securityBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiShield,
    FiLock,
    FiKey,
    FiHash,
    FiUserCheck,
    FiServer,
    FiGlobe,
    FiAlertTriangle,
} from "react-icons/fi";

const SecurityBasics = () => {
    // By default collapsed
    const [open, setOpen] = useState(true);

    const meta = useMemo(() => {
        return {
            id: "securityBasics",
            title: "Security Basics",
            sub: "Core security concepts used in networking, web apps, and real systems.",
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
                        <FiShield />
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
                    {/* CIA Triad */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiAlertTriangle />
                            </span>
                            <h3 className="h3">CIA triad</h3>
                        </div>

                        <p className="p">
                            CIA means Confidentiality, Integrity, and
                            Availability. It is a simple way to remember what
                            "security" is trying to protect.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Confidentiality</b> - only authorized people
                                can read data
                                <span className="small">
                                    Example: HTTPS encryption, access control
                                </span>
                            </li>
                            <li>
                                <b>Integrity</b> - data should not be changed
                                silently
                                <span className="small">
                                    Example: hashes, digital signatures,
                                    checksums
                                </span>
                            </li>
                            <li>
                                <b>Availability</b> - systems should stay usable
                                <span className="small">
                                    Example: DDoS protection, redundancy, rate
                                    limiting
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            Most real incidents hit one or more CIA points.
                        </p>
                    </div>

                    {/* TLS / SSL */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiLock />
                            </span>
                            <h3 className="h3">TLS and SSL</h3>
                        </div>

                        <p className="p">
                            TLS means Transport Layer Security. SSL means Secure
                            Sockets Layer. SSL is the older protocol family.
                            Today, people say "SSL" in casual talk, but modern
                            security uses TLS.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Goal</b> - secure data in transit between
                                client and server
                                <span className="small">
                                    Example: browser to website over HTTPS
                                </span>
                            </li>
                            <li>
                                <b>Provides</b> - encryption, integrity, and
                                server identity
                                <span className="small">
                                    Identity comes from certificates (CA signed)
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            HTTPS is basically HTTP running inside a TLS tunnel.
                        </p>
                    </div>

                    {/* Symmetric vs Asymmetric */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiKey />
                            </span>
                            <h3 className="h3">
                                Symmetric vs asymmetric encryption
                            </h3>
                        </div>

                        <p className="p">
                            Encryption means turning readable data into
                            unreadable data using keys. The difference is how
                            keys are used.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Symmetric</div>
                                <div className="v">
                                    Same key is used to encrypt and decrypt.
                                    <span className="small">
                                        Fast. Used for bulk data after a secure
                                        connection is established.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Asymmetric</div>
                                <div className="v">
                                    Two keys - public key and private key.
                                    Public encrypts or verifies, private
                                    decrypts or signs.
                                    <span className="small">
                                        Slower. Used for key exchange and
                                        identity.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            In TLS, asymmetric crypto helps start trust,
                            symmetric crypto handles the ongoing data.
                        </p>
                    </div>

                    {/* Hashing vs Encryption */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiHash />
                            </span>
                            <h3 className="h3">Hashing vs encryption</h3>
                        </div>

                        <p className="p">
                            Hashing and encryption are not the same. A hash is
                            like a fingerprint of data. Encryption is reversible
                            with the correct key.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Hashing</b> - one-way transformation
                                <span className="small">
                                    Example: password hashing, file integrity
                                    check
                                </span>
                            </li>
                            <li>
                                <b>Encryption</b> - reversible with a key
                                <span className="small">
                                    Example: HTTPS traffic encryption, encrypted
                                    storage
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            Passwords should be hashed, not encrypted, because
                            you should not be able to recover them.
                        </p>
                    </div>

                    {/* AuthN vs AuthZ */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiUserCheck />
                            </span>
                            <h3 className="h3">
                                Authentication vs authorization
                            </h3>
                        </div>

                        <p className="p">
                            Authentication answers "Who are you" and
                            authorization answers "What can you do". Many
                            systems fail because they do authentication but
                            forget strict authorization.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">Authentication</div>
                                <div className="v">
                                    Proves identity using password, OTP, token,
                                    biometrics.
                                    <span className="small">
                                        Example: login with email and password
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Authorization</div>
                                <div className="v">
                                    Checks permissions after identity is known.
                                    <span className="small">
                                        Example: only admin can delete users
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Easy memory: AuthN is "name", AuthZ is "zone"
                            access.
                        </p>
                    </div>

                    {/* Firewall */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiServer />
                            </span>
                            <h3 className="h3">
                                Firewall basics and stateful concept
                            </h3>
                        </div>

                        <p className="p">
                            A firewall is a security system that allows or
                            blocks network traffic based on rules. Rules can be
                            based on IP, port, protocol, and direction.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Stateless firewall</b> - checks each packet
                                independently
                                <span className="small">
                                    Simple rules, less context
                                </span>
                            </li>
                            <li>
                                <b>Stateful firewall</b> - tracks connection
                                state
                                <span className="small">
                                    Knows if a packet belongs to an existing
                                    allowed connection
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            Stateful firewalls are common because they reduce
                            random inbound traffic and allow valid replies.
                        </p>
                    </div>

                    {/* VPN */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiGlobe />
                            </span>
                            <h3 className="h3">VPN basics</h3>
                        </div>

                        <p className="p">
                            VPN means Virtual Private Network. It creates an
                            encrypted tunnel between your device and a VPN
                            server. Your traffic travels inside this tunnel.
                        </p>

                        <ul className="list">
                            <li>
                                <b>Use</b> - secure connection on public Wi-Fi
                                <span className="small">
                                    Example: coffee shop Wi-Fi
                                </span>
                            </li>
                            <li>
                                <b>Use</b> - access private office network
                                remotely
                                <span className="small">
                                    Example: connect to company intranet from
                                    home
                                </span>
                            </li>
                        </ul>

                        <p className="note">
                            VPN improves privacy on the local network, but trust
                            shifts to the VPN provider.
                        </p>
                    </div>

                    {/* Attacks */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiAlertTriangle />
                            </span>
                            <h3 className="h3">Common attacks</h3>
                        </div>

                        <p className="p">
                            You do not need deep details here. Just know names,
                            full forms, and what they mean in one line.
                        </p>

                        <div className="attacks">
                            <div className="attack">
                                <div className="aTop">
                                    <div className="aTitle">MITM</div>
                                    <div className="aFull">
                                        Man In The Middle
                                    </div>
                                </div>
                                <div className="aLine">
                                    Attacker secretly sits between two parties
                                    and can read or alter traffic.
                                </div>
                            </div>

                            <div className="attack">
                                <div className="aTop">
                                    <div className="aTitle">DNS spoofing</div>
                                    <div className="aFull">
                                        DNS - Domain Name System
                                    </div>
                                </div>
                                <div className="aLine">
                                    Fake DNS answers redirect you to a wrong or
                                    malicious IP address.
                                </div>
                            </div>

                            <div className="attack">
                                <div className="aTop">
                                    <div className="aTitle">ARP spoofing</div>
                                    <div className="aFull">
                                        ARP - Address Resolution Protocol
                                    </div>
                                </div>
                                <div className="aLine">
                                    Attacker links their MAC address to someone
                                    else’s IP on a LAN to intercept traffic.
                                </div>
                            </div>

                            <div className="attack">
                                <div className="aTop">
                                    <div className="aTitle">DDoS</div>
                                    <div className="aFull">
                                        Distributed Denial of Service
                                    </div>
                                </div>
                                <div className="aLine">
                                    Many machines flood a target to make it slow
                                    or unavailable.
                                </div>
                            </div>

                            <div className="attack">
                                <div className="aTop">
                                    <div className="aTitle">Phishing</div>
                                    <div className="aFull">
                                        Social engineering attack
                                    </div>
                                </div>
                                <div className="aLine">
                                    Fake messages trick users into sharing
                                    passwords, OTPs, or clicking bad links.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Basic defense idea: use HTTPS, verify domains, keep
                            MFA, and do not trust random links.
                        </p>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default SecurityBasics;
