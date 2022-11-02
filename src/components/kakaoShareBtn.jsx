//Init KAKAO API
if (!window.Kakao.isInitialized()) {
  window.Kakao.init('9ac1829fbbfee48aff621ccf2440ac96');
  console.log(window.Kakao.isInitialized());
}

const userId = '난 아이디임';

const shareKakaoLink = (userId) => {
  // @ts-ignore
  window.Kakao.Link.createCustomButton({
    container: '#kakao-link-btn',
    templateId: 84780,
    templateArgs: {
      userId: `${userId}`,
    },
  });
};

const onShareKakaoClick = () => {
  shareKakaoLink(userId);
};
