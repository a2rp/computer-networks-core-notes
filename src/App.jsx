// App.jsx
import React from "react";
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

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutComputerNetworks />

                    <NetworkBasicsModels />
                    <PhysicalDataLinkEssentials />
                    <IpAddressing />
                    <RoutingBasics />
                    <TransportLayerTcpUdp />
                    <ApplicationLayerProtocols />
                    <WebNetworkingPracticalStuff />
                    <WirelessMobileBasics />
                    <SecurityBasics />
                    <NetworkDevicesTools />
                    <PerformanceReliability />
                    <MustKnowQna />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
