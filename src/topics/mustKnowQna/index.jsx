// src/topics/mustKnowQna/index.jsx

import React, { useState } from "react";
import { Styled } from "./styled";
import { qnaData } from "./qnaData";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const MustKnowQna = () => {
    const [openMain, setOpenMain] = useState(true);
    const [openMap, setOpenMap] = useState({});

    const toggleItem = (key) => {
        setOpenMap((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <Styled.Wrapper id="mustKnowQna">
            <button
                className={`mainHead ${openMain ? "open" : ""}`}
                onClick={() => setOpenMain((s) => !s)}
            >
                <div className="left">
                    <FiHelpCircle />
                    <h2>Must Know Interview QnA</h2>
                </div>
                <FiChevronDown className="chev" />
            </button>

            <div className={`content ${openMain ? "show" : ""}`}>
                {qnaData.map((group, gi) => (
                    <div className="category" key={gi}>
                        <h3 className="catTitle">{group.category}</h3>

                        {group.items.map((item, qi) => {
                            const key = `${gi}-${qi}`;
                            return (
                                <div className="qnaItem" key={key}>
                                    <button
                                        className={`question ${
                                            openMap[key] ? "open" : ""
                                        }`}
                                        onClick={() => toggleItem(key)}
                                    >
                                        <span>{item.q}</span>
                                        <FiChevronDown />
                                    </button>

                                    <div
                                        className={`answer ${
                                            openMap[key] ? "show" : ""
                                        }`}
                                    >
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ))}
            </div>
        </Styled.Wrapper>
    );
};

export default MustKnowQna;
