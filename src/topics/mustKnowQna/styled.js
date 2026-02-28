// src/topics/mustKnowQna/styled.js

import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        margin-bottom: 10px;

        .mainHead {
            width: 100%;
            padding: 14px;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            cursor: pointer;
        }

        .mainHead h2 {
            font-size: 16px;
        }

        .mainHead .left {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .chev {
            transition: transform 0.2s ease;
        }

        .mainHead.open .chev {
            transform: rotate(180deg);
        }

        .content {
            display: none;
            margin-top: 12px;
        }

        .content.show {
            display: block;
        }

        .category {
            margin-bottom: 16px;
        }

        .catTitle {
            font-size: 14px;
            margin-bottom: 8px;
            color: var(--color-text-secondary);
        }

        .qnaItem {
            margin-bottom: 6px;
        }

        .question {
            width: 100%;
            padding: 10px;
            border-radius: 12px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: var(--color-surface-2);
            border: 1px solid var(--color-border);
            cursor: pointer;
        }

        .question span {
            text-align: left;
            font-size: 13px;
        }

        .answer {
            display: none;
            padding: 10px;
            font-size: 13px;
            line-height: 1.6;
            color: var(--color-text-secondary);
        }

        .answer.show {
            display: block;
        }
    `,
};
