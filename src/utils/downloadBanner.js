import html2canvas from 'html2canvas';

export function downloadBanner() {
  const bannerElem = document.querySelector('.banner');

  html2canvas(bannerElem).then(canvas => {
    const link = document.createElement('a');
    link.download = 'linkedin-banner.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}