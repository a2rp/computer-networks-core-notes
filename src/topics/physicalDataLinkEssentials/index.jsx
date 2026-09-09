// src/topics/physicalDataLinkEssentials/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiRadio,
    FiCpu,
    FiZap,
    FiHardDrive,
    FiGitMerge,
    FiLayers,
    FiAlertTriangle,
} from "react-icons/fi";

const PhysicalDataLinkEssentials = () => {
    // By default collapsed
    const [open, setOpen] = useState(true);

    const meta = useMemo(() => {
        return {
            id: "physicalDataLinkEssentials",
            title: "Physical and Data Link Essentials",
            sub: "Signals, cables, frames, MAC, ARP, switching, VLAN, and STP basics in one block.",
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
                        <FiRadio />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Layer 1 and 2</span>
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
                    <div className="grid">
                        {/* Signals */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiZap />
                                </span>
                                <h3 className="h3">
                                    Signals - analog vs digital
                                </h3>
                            </div>

                            <p className="p">
                                A <b>signal</b> is the physical form of data
                                travelling through a medium. Networks carry data
                                as electrical pulses, light pulses, or radio
                                waves.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Analog</b> - continuous wave form where
                                    values change smoothly.
                                    <span className="small">
                                        Example: old radio voice transmission
                                    </span>
                                </li>
                                <li>
                                    <b>Digital</b> - discrete values, usually 0
                                    and 1 represented as pulses.
                                    <span className="small">
                                        Example: Ethernet uses pulses, fiber
                                        uses light on and off
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                In modern networks we mostly send digital data,
                                but the physical carrier can look like an analog
                                wave.
                            </p>
                        </div>

                        {/* Media */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiHardDrive />
                                </span>
                                <h3 className="h3">
                                    Media - UTP, STP, fiber, wireless
                                </h3>
                            </div>

                            <p className="p">
                                <b>Media</b> means the path that carries
                                signals. It decides speed, distance, noise
                                resistance, and cost.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>UTP</b> - Unshielded Twisted Pair
                                    <span className="small">
                                        Most common Ethernet cable. Twisting
                                        reduces noise.
                                    </span>
                                </li>
                                <li>
                                    <b>STP</b> - Shielded Twisted Pair
                                    <span className="small">
                                        Like UTP but with shielding to reduce
                                        interference. Used in noisy areas.
                                    </span>
                                </li>
                                <li>
                                    <b>Fiber</b> - Optical Fiber
                                    <span className="small">
                                        Uses light pulses. Very fast and long
                                        distance. Low interference.
                                    </span>
                                </li>
                                <li>
                                    <b>Wireless</b>
                                    <span className="small">
                                        Uses radio waves like Wi-Fi. Convenient
                                        but interference and walls affect it.
                                    </span>
                                </li>
                            </ul>

                            <p className="note">
                                Simple idea: UTP is cheap and common, fiber is
                                fastest and farthest, wireless is flexible but
                                variable.
                            </p>
                        </div>

                        {/* MAC */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCpu />
                                </span>
                                <h3 className="h3">
                                    MAC address - role and format
                                </h3>
                            </div>

                            <p className="p">
                                <b>MAC</b> means <b>Media Access Control</b>. A{" "}
                                <b>MAC address</b> is the hardware address used
                                for local delivery on the same network segment.
                                Switches use MAC addresses to forward frames.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Role</div>
                                    <div className="v">
                                        Identify a network interface on a local
                                        link (Layer 2).
                                    </div>
                                </div>
                                <div className="kv">
                                    <div className="k">Format</div>
                                    <div className="v">
                                        48-bit address written as 6 bytes in
                                        hex.
                                        <span className="small">
                                            Example: "AA:BB:CC:11:22:33"
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                IP is for routing across networks. MAC is for
                                delivery inside a local network.
                            </p>
                        </div>

                        {/* Frames, MTU, MSS */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">Framing, MTU, MSS</h3>
                            </div>

                            <p className="p">
                                At Data Link layer, data is packed into a{" "}
                                <b>frame</b>. A frame is like an envelope that
                                includes source MAC, destination MAC, and error
                                check information.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">Frame</div>
                                    <div className="v">
                                        Data Link unit that wraps a network
                                        layer packet with MAC info.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">MTU</div>
                                    <div className="v">
                                        <b>MTU</b> is{" "}
                                        <b>Maximum Transmission Unit</b>.
                                        Largest frame payload allowed on a link.
                                        <span className="small">
                                            Example: Ethernet MTU is often 1500
                                            bytes (payload)
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">MSS</div>
                                    <div className="v">
                                        <b>MSS</b> is{" "}
                                        <b>Maximum Segment Size</b>. TCP data
                                        size that fits inside IP without
                                        fragmentation.
                                        <span className="small">
                                            Rough idea: MSS is MTU minus headers
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                MTU is about link size. MSS is about TCP payload
                                size. Both can cause weird web issues when
                                mismatched.
                            </p>
                        </div>

                        {/* CRC */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">Error detection - CRC</h3>
                            </div>

                            <p className="p">
                                <b>CRC</b> means <b>Cyclic Redundancy Check</b>.
                                It is an error detection method used to detect
                                if bits got corrupted during transmission.
                            </p>

                            <ul className="list">
                                <li>
                                    Sender calculates a CRC value and adds it to
                                    the frame.
                                </li>
                                <li>Receiver recalculates CRC and compares.</li>
                                <li>
                                    If mismatch, the frame is considered
                                    corrupted and discarded.
                                </li>
                            </ul>

                            <p className="note">
                                CRC detects errors, it does not fix them. Fixing
                                happens by retransmission in higher layers like
                                TCP.
                            </p>
                        </div>

                        {/* ARP */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiGitMerge />
                                </span>
                                <h3 className="h3">ARP basics</h3>
                            </div>

                            <p className="p">
                                <b>ARP</b> means{" "}
                                <b>Address Resolution Protocol</b>. It finds the
                                MAC address for a given IP address inside a
                                local network.
                            </p>

                            <div className="mini">
                                <span className="pill">I know IP</span>
                                <span className="dash">-</span>
                                <span className="pill">Need MAC</span>
                                <span className="dash">-</span>
                                <span className="pill">ARP request</span>
                                <span className="dash">-</span>
                                <span className="pill">ARP reply</span>
                            </div>

                            <ul className="list">
                                <li>
                                    Device sends an ARP broadcast: "Who has this
                                    IP"
                                </li>
                                <li>The owner replies with its MAC address</li>
                                <li>
                                    Result is stored in ARP cache for some time
                                </li>
                            </ul>

                            <p className="note">
                                ARP is for IPv4. IPv6 uses a different approach
                                called Neighbor Discovery.
                            </p>
                        </div>

                        {/* Switch, CAM, flooding */}
                        <div className="card span12">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiCpu />
                                </span>
                                <h3 className="h3">
                                    Switch basics - CAM table and flooding
                                </h3>
                            </div>

                            <p className="p">
                                A <b>switch</b> is a Layer 2 device that
                                forwards frames using MAC addresses. It learns
                                which MAC address is on which port and builds a
                                table.
                            </p>

                            <div className="kvs">
                                <div className="kv">
                                    <div className="k">CAM table</div>
                                    <div className="v">
                                        <b>CAM</b> is{" "}
                                        <b>Content Addressable Memory</b>.
                                        Switch stores "MAC to port" mappings
                                        here.
                                        <span className="small">
                                            Example: "AA:BB:CC:11:22:33" is on
                                            port 5
                                        </span>
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Learning</div>
                                    <div className="v">
                                        Switch learns source MAC of incoming
                                        frames and records the port.
                                    </div>
                                </div>

                                <div className="kv">
                                    <div className="k">Flooding</div>
                                    <div className="v">
                                        If destination MAC is unknown, switch
                                        sends the frame to all ports except the
                                        source port. Once destination replies,
                                        switch learns it and flooding reduces.
                                    </div>
                                </div>
                            </div>

                            <p className="note">
                                Flooding is normal at first. Too much flooding
                                can indicate loops or misconfiguration.
                            </p>
                        </div>

                        {/* VLAN */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiLayers />
                                </span>
                                <h3 className="h3">
                                    VLAN basics - tagging concept
                                </h3>
                            </div>

                            <p className="p">
                                <b>VLAN</b> means{" "}
                                <b>Virtual Local Area Network</b>. It splits one
                                physical switch into multiple logical networks.
                                Devices in different VLANs are separated like
                                they are on different switches.
                            </p>

                            <ul className="list">
                                <li>
                                    <b>Access port</b> - carries traffic for one
                                    VLAN (end devices connect here)
                                </li>
                                <li>
                                    <b>Trunk port</b> - carries traffic for
                                    multiple VLANs between switches
                                </li>
                                <li>
                                    <b>Tagging</b> - frames carry a VLAN ID so
                                    switches know which VLAN it belongs to
                                </li>
                            </ul>

                            <p className="note">
                                VLAN helps isolation and security. Communication
                                between VLANs needs routing (Layer 3).
                            </p>
                        </div>

                        {/* STP */}
                        <div className="card">
                            <div className="cardTop">
                                <span className="cIcon">
                                    <FiAlertTriangle />
                                </span>
                                <h3 className="h3">
                                    STP basics - loops are dangerous
                                </h3>
                            </div>

                            <p className="p">
                                <b>STP</b> means <b>Spanning Tree Protocol</b>.
                                It prevents Layer 2 loops when switches are
                                connected in a way that creates multiple paths.
                            </p>

                            <ul className="list">
                                <li>
                                    Loop can cause broadcast storms because
                                    frames keep circulating.
                                </li>
                                <li>
                                    Switch CAM table can keep changing, causing
                                    unstable forwarding.
                                </li>
                                <li>
                                    STP blocks some ports so there is only one
                                    active path between switches.
                                </li>
                            </ul>

                            <p className="note">
                                We keep redundant links for safety, but STP
                                ensures only one path is active to avoid loops.
                            </p>
                        </div>
                    </div>

                    <div className="bottomNote">
                        <div className="bnIcon">
                            <FiRadio />
                        </div>
                        <div className="bnText">
                            <div className="bnTitle">Quick memory</div>
                            <div className="bnSub">
                                Physical is signals and media. Data Link is
                                frames, MAC, switching, VLAN, and loop
                                protection.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default PhysicalDataLinkEssentials;
