// App.jsx
import React, { useEffect, useRef, useState } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutComputerNetworks from "./components/aboutComputerNetworks";
import NetworkBasicsModels from "./topics/networkBasicsModels";
import PhysicalDataLinkEssentials from "./topics/physicalDataLinkEssentials";
import IpAddressing from "./topics/ipAddressing";
import RoutingBasics from "./topics/routingBasics";
import TransportLayerTcpUdp from "./topics/transportLayerTcpUdp";
import ApplicationLayerProtocols from "./topics/applicationLayerProtocols";
import WebNetworkingPracticalStuff from "./topics/webNetworkingPracticalStuff";
import WirelessMobileBasics from "./topics/wirelessMobileBasics";
import SecurityBasics from "./topics/securityBasics";
import NetworkDevicesTools from "./topics/networkDevicesTools";
import PerformanceReliability from "./topics/performanceReliability";
import MustKnowQna from "./topics/mustKnowQna";
import { FiArrowUp } from "react-icons/fi";

const App = () => {
    const [activeTopic, setActiveTopic] = useState("about");
    const mainRef = useRef(null);
    const topics = [
        ["about", "Overview", AboutComputerNetworks],
        ["basics", "Network Basics", NetworkBasicsModels],
        ["physical", "Physical and Data Link", PhysicalDataLinkEssentials],
        ["ip", "IP Addressing", IpAddressing],
        ["routing", "Routing", RoutingBasics],
        ["transport", "Transport Layer", TransportLayerTcpUdp],
        ["application", "Application Protocols", ApplicationLayerProtocols],
        ["web", "Web Networking", WebNetworkingPracticalStuff],
        ["wireless", "Wireless and Mobile", WirelessMobileBasics],
        ["security", "Security Basics", SecurityBasics],
        ["devices", "Network Devices", NetworkDevicesTools],
        ["performance", "Performance and Reliability", PerformanceReliability],
        ["qna", "Must-Know Q&A", MustKnowQna],
    ];
    const ActiveTopic = topics.find(([id]) => id === activeTopic)?.[2] || AboutComputerNetworks;

    useEffect(() => {
        mainRef.current?.scrollTo({ top: 0, behavior: "auto" });
    }, [activeTopic]);

    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main ref={mainRef}>
                <div className="workspaceLayout">
                    <aside className="sideMenu" aria-label="Computer networks topics">
                        <p className="menuLabel">Study guide</p>
                        <nav>{topics.map(([id, label]) => <button key={id} type="button" className={activeTopic === id ? "active" : ""} onClick={() => setActiveTopic(id)}>{label}</button>)}</nav>
                    </aside>
                    <section className="contentWrapper" aria-live="polite"><ActiveTopic /></section>
                </div>

                <button
                    type="button"
                    className="scrollTopButton"
                    aria-label="Scroll content to top"
                    title="Scroll to top"
                    onClick={() => mainRef.current?.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <FiArrowUp />
                </button>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
