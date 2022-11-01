import React from 'react';
import styled from 'styled-components';

export default function ModeNight() {
  function HeadingBox() {
    const HeadingText = styled.p`
      font-size: 1.5rem;
      line-height: 1.5rem;
      /* background-color: #c7f49d; */
      width: 300px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'GangwonEduSaeeum_OTFMediumA';
    `;
    return (
      <div className="wrap" style={{ position: 'relative' }}>
        <img src="img/homememo.png" alt="메모지" width={'90%'} />
        <HeadingText>
          𝑻𝒉𝒂𝒏𝒌𝒔 𝒂𝒏𝒅 𝑮𝒐𝒐𝒅𝒃𝒚𝒆
          <br />
          {/* Thanks and Goodbye 2022✨ <br /> */}
          고마웠고 잘가라 2022! <br />
          그런데.. <br />나 올해 뭐했지🙄 ⁉
        </HeadingText>
      </div>
    );
  }
}
