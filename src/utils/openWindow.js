export default function openWindow(url) {
  let pollingTimer = null;
  let popupWindow = window.open('about:blank', '_blank', 'width=600,height=800');

  const closePopupWindow = () => {
    if (popupWindow) {
      popupWindow.close();
      popupWindow = null;
    }
  };

  const stopPolling = () => {
    if (pollingTimer) {
      clearInterval(pollingTimer);
      pollingTimer = null;
    }
  };

  return new Promise((resolve, reject) => {
    if (!popupWindow) {
      return reject('팝업이 생성되지 않았습니다.');
    }
    popupWindow.location.href = url;
    pollingTimer = setInterval(() => {
      try {
        if (!popupWindow || popupWindow.closed) {
          stopPolling();
          return resolve({status: 'closed'});
        }

        if (window.location.origin === popupWindow.location.origin) {
          resolve({
            status: 'matched',
            search: popupWindow.location.search.slice(1),
            hash: popupWindow.location.hash.slice(1),
          });

          stopPolling();
          closePopupWindow();
        }
      } catch (e) {
        // 크로스 도메인 에러
        console.log(e)
      }
    }, 500);
  });
}