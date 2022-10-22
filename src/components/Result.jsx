import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Base = styled.p`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  position: relative;
  width: 500px;
  background-color: dodgerblue;
`;

export default function Result() {
  return (
    <Base>
      <Container>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 드라마는?</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 영화는?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 장소는?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 사진은?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>

          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 물건은?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>
        </div>
      </Container>
    </Base>
  );
}

/* 
class Result extends Component {
  render() {
    const container = {
      position: "relative",
      width: "50vw",
      height: "100vh",
      margin: "0 auto",
      backgroundColor: "olive",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    };
    return (
      <div style={container}>
        <div class="list-group">
          <a
            href="#"
            class="list-group-item list-group-item-action active"
            aria-current="true"
          >
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 드라마는?</h5>
              <small>3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 영화는?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>
          <a href="#" class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">올해 당신이 뽑은 최고의 장소는?</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">Some placeholder content in a paragraph.</p>
            <small class="text-muted">And some muted small print.</small>
          </a>
        </div>
      </div>
    );
  }
}

export default Result; */
