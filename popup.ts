const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  const preference = (document.querySelector('input[name="preference"]:checked') as HTMLInputElement).value;

  browser.storage.local.set({ preference });

  browser.webRequest.onBeforeSendHeaders.addListener(
    (details: browser.webRequest.OnBeforeSendHeadersDetailsType) => {
      const headers = details.requestHeaders;

      if (preference === 'reject') {
        headers.forEach((header: { name: string; value: string }) => {
          if (header.name.toLowerCase() === 'cookie') {
            header.value = '';
          }
        });
      } else if (preference === 'minimal') {
        const minimalCookies: string[] = [];

        headers.forEach((header: { name: string; value: string }) => {
          if (header.name.toLowerCase() === 'cookie') {
            const cookies = header.value.split(';');

            cookies.forEach((cookie: string) => {
              const [name] = cookie.split('=');

              if (name.trim().toLowerCase() === 'essential') {
                minimalCookies.push(cookie);
              }
            });
          }
        });

        if (minimalCookies.length > 0) {
          headers.push({ name: 'Cookie', value: minimalCookies.join(';') });
        } else {
          headers.push({ name: 'Cookie', value: '' });
        }
      }

      return { requestHeaders: headers };
    },
    { urls: ['<all_urls>'] },
    ['blocking', 'requestHeaders']
  );
});

browser.storage.local.get(['preference'], (result: { preference: string }) => {
  const preference = result.preference || 'reject';
  (document.querySelector(`input[value="${preference}"]`) as HTMLInputElement).checked = true;
});

