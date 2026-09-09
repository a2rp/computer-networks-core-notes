// src/topics/wirelessMobileBasics/index.jsx
import React, { useMemo, useState } from "react";
import { Styled } from "./styled";
import {
    FiChevronDown,
    FiWifi,
    FiRadio,
    FiAperture,
    FiBluetooth,
    FiSmartphone,
    FiShield,
} from "react-icons/fi";

const WirelessMobileBasics = () => {
    // by default collapsed
    const [open, setOpen] = useState(true);

    const meta = useMemo(() => {
        return {
            id: "wirelessMobileBasics",
            title: "Wireless and Mobile Basics",
            sub: "Wi-Fi terms, frequency bands, access points, Bluetooth, and cellular basics.",
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
                        <FiWifi />
                    </span>

                    <div className="text">
                        <div className="titleRow">
                            <h2 className="title">{meta.title}</h2>
                            <span className="badge">Wireless</span>
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
                    {/* Wi-Fi core terms */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiWifi />
                            </span>
                            <h3 className="h3">Wi-Fi basics</h3>
                        </div>

                        <p className="p">
                            <b>Wi-Fi</b> is wireless networking based on IEEE
                            802.11 standards. It lets devices connect to a local
                            network using radio waves.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">SSID</div>
                                <div className="v">
                                    <b>Service Set Identifier</b> - the Wi-Fi
                                    network name you see.
                                    <span className="small">
                                        Example: "Ash-Home-5G"
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">BSSID</div>
                                <div className="v">
                                    <b>Basic Service Set Identifier</b> - the
                                    access point identifier, usually its MAC
                                    address.
                                    <span className="small">
                                        Useful when multiple access points share
                                        the same SSID.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">WPA2</div>
                                <div className="v">
                                    <b>Wi-Fi Protected Access 2</b> - common
                                    Wi-Fi security standard.
                                    <span className="small">
                                        Uses strong encryption (typically AES)
                                        for protection.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">WPA3</div>
                                <div className="v">
                                    <b>Wi-Fi Protected Access 3</b> - newer and
                                    stronger security than WPA2.
                                    <span className="small">
                                        Better protection against password
                                        guessing attacks.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            Simple rule: use WPA3 if available, otherwise WPA2
                            is still standard for most networks.
                        </p>
                    </div>

                    {/* 2.4 vs 5 */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiRadio />
                            </span>
                            <h3 className="h3">2.4 GHz vs 5 GHz</h3>
                        </div>

                        <p className="p">
                            <b>GHz</b> means gigahertz, a unit of frequency.
                            Wi-Fi uses radio frequency bands, most commonly 2.4
                            GHz and 5 GHz.
                        </p>

                        <div className="split">
                            <div className="box">
                                <div className="boxTitle">2.4 GHz</div>
                                <ul className="list">
                                    <li>
                                        Better <b>range</b> - travels farther
                                        and through walls
                                    </li>
                                    <li>
                                        Usually more <b>interference</b> - many
                                        devices use it
                                    </li>
                                    <li>
                                        Often lower <b>speed</b> compared to 5
                                        GHz
                                    </li>
                                </ul>
                            </div>

                            <div className="box">
                                <div className="boxTitle">5 GHz</div>
                                <ul className="list">
                                    <li>
                                        Higher <b>speed</b> - better for
                                        streaming and fast downloads
                                    </li>
                                    <li>
                                        Lower <b>range</b> - weaker through
                                        walls
                                    </li>
                                    <li>
                                        Usually less <b>interference</b> than
                                        2.4 GHz
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <p className="note">
                            Quick pick: close to router use 5 GHz, far or many
                            walls use 2.4 GHz.
                        </p>
                    </div>

                    {/* AP vs Router */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiAperture />
                            </span>
                            <h3 className="h3">Access point vs router</h3>
                        </div>

                        <p className="p">
                            People often call everything "Wi-Fi", but devices
                            have different roles. Understanding this makes
                            troubleshooting easier.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">AP</div>
                                <div className="v">
                                    <b>Access Point</b> - provides Wi-Fi to
                                    devices and connects them to the local
                                    network.
                                    <span className="small">
                                        Think: "Wi-Fi transmitter for your LAN"
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Router</div>
                                <div className="v">
                                    Sends traffic between networks. Connects
                                    your home network to the internet (WAN).
                                    <span className="small">
                                        Home "router" is usually router + switch
                                        + access point in one box.
                                    </span>
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Modem</div>
                                <div className="v">
                                    <b>Modulator Demodulator</b> - converts ISP
                                    signal to usable internet connection.
                                    <span className="small">
                                        Fiber setups often use ONT, not classic
                                        modem.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            If Wi-Fi works but internet does not, AP is fine but
                            router or ISP link may be the issue.
                        </p>
                    </div>

                    {/* Bluetooth */}
                    <div className="card">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiBluetooth />
                            </span>
                            <h3 className="h3">Bluetooth</h3>
                        </div>

                        <p className="p">
                            <b>Bluetooth</b> is a short-range wireless
                            technology used mainly for personal devices. It is
                            designed for low power and quick connections.
                        </p>

                        <ul className="list">
                            <li>
                                Use cases: earphones, keyboard, mouse,
                                smartwatch, car audio
                            </li>
                            <li>
                                Range: usually a few meters to tens of meters
                                depending on device class
                            </li>
                            <li>
                                Bluetooth is not for normal internet browsing
                                like Wi-Fi, it is more for device-to-device
                                links
                            </li>
                        </ul>

                        <p className="note">
                            Wi-Fi is for network and internet. Bluetooth is for
                            nearby device connection.
                        </p>
                    </div>

                    {/* Cellular */}
                    <div className="card span12">
                        <div className="cardTop">
                            <span className="cIcon">
                                <FiSmartphone />
                            </span>
                            <h3 className="h3">Cellular high level</h3>
                        </div>

                        <p className="p">
                            <b>Cellular network</b> is mobile internet provided
                            by telecom companies. The area is split into cells,
                            each served by a base station (mobile tower). Your
                            phone connects to the nearest cell and moves between
                            cells as you travel.
                        </p>

                        <div className="kvs">
                            <div className="kv">
                                <div className="k">SIM</div>
                                <div className="v">
                                    <b>Subscriber Identity Module</b> -
                                    identifies you to the carrier network.
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">LTE</div>
                                <div className="v">
                                    <b>Long Term Evolution</b> - commonly called
                                    4G.
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">5G</div>
                                <div className="v">
                                    Fifth Generation mobile network - higher
                                    speed and lower latency in many cases.
                                </div>
                            </div>

                            <div className="kv">
                                <div className="k">Base station</div>
                                <div className="v">
                                    Mobile tower equipment that connects phones
                                    to the carrier network.
                                </div>
                            </div>
                        </div>

                        <p className="note">
                            In simple words: Wi-Fi connects you to a local
                            router. Cellular connects you to a carrier tower.
                        </p>

                        <div className="callout">
                            <span className="callIcon">
                                <FiShield />
                            </span>
                            <div className="callText">
                                <div className="callTitle">Security note</div>
                                <div className="callBody">
                                    Prefer HTTPS sites on both Wi-Fi and
                                    cellular. Public Wi-Fi can be risky if
                                    misconfigured.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footerLine">
                    <div className="hint">
                        Quick memory: 2.4 GHz is range, 5 GHz is speed. Router
                        connects networks, AP gives Wi-Fi.
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default WirelessMobileBasics;
