import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import alertService from "../../../services/alert.service";
import './style.scss';

const centerStyle = css`
  top: 50%;
  left: 50%;
`;
const bottomStyle = css`
  bottom: 10%;
  left: 50%;
`;
const StyledAlert = styled.div`
    ${({ position }) => position === "center" && centerStyle}
    ${({ position }) => position === "bottom" && bottomStyle}
    background: ${({ color, theme }) => theme.color[color] || "#fff"};
    color: ${({ isDark }) => isDark && "#000"};
    transform: translate(-50%, -50%) ${({ active }) => (active ? "scale(1)" : "scale(0)")};
    .graphic {
      .emoji {
        &::after {
          background: ${({ color, theme }) => theme.color[color] || "#fff"};
        }
      }
    }
  
`;

const typeStyle = {
  SUCCESS: {
    isDark: true,
    color: "success",
  },
  ERROR: {
    isDark: true,
    color: "danger",
  },
};

function Alert({ position = "center" }) {
  const [active, setActive] = useState();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [style, setStyle] = useState({});
  useEffect(() => {
    const alertSubs = alertService
      .onAlert()
      .subscribe(({ type, title, content }) => {
        setActive(true);
        setTitle(title);
        setContent(content);
        setTimeout(() => setActive(false), 1500);
        setStyle(typeStyle[type]);
      });
    return () => alertSubs.unsubscribe();
  }, []);

  return (
    <StyledAlert {...{ active, position, ...style }} className="alert">
        <div className="graphic">
          <span className="emoji">
            <i
              className="em em-laughing"
              aria-label="SMILING FACE WITH OPEN MOUTH AND TIGHTLY-CLOSED EYES"
            ></i>
          </span>
        </div>
        <div className="text">
          <div className="title">
            <h3>{title}</h3>
          </div>
          <div className="content">{content}</div>
        </div>
    </StyledAlert>
  );
}

export default Alert;
