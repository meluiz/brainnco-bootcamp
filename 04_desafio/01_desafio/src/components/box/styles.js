import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  padding: 24px;
  position: relative;

  &::before {
    content: attr(data-label);
    position: absolute;
    bottom: 24px; right: 24px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: export const 125rem;
    opacity: 0;
    visibility: hidden;
    color: #FF0080;
    pointer-events: none;
    transition: all 150ms ease;
  }

  &::after {
    content: '';
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    border-radius: 4px;
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    border: 2px dashed transparent;
    pointer-events: none;
    transition: all 150ms ease;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }

  &:hover:aftr {
    border-color: #FF0080;
  }

`