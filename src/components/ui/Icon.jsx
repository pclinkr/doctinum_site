import React from 'react';

const icons = {
  // Arrow trending icons
  'arrow-trending-up-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  ),
  'arrow-trending-up-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M12.5 2.25a.75.75 0 0 0-1.5 0v5.688L8.034 4.97a.75.75 0 0 0-1.06 1.06l4.5 4.5a.75.75 0 0 0 1.06 0l4.5-4.5a.75.75 0 0 0-1.06-1.06L12.5 7.938V2.25ZM3.75 12a.75.75 0 0 0-.75.75v6.5c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5H4.5V12.75A.75.75 0 0 0 3.75 12Z" clipRule="evenodd" />
    </svg>
  ),

  // Bell icons
  'bell-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  ),
  'bell-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm6.75-6a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5h-1.5Z" clipRule="evenodd" />
    </svg>
  ),

  // Chart pie icons
  'chart-pie-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
    </svg>
  ),
  'chart-pie-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
    </svg>
  ),

  // Check badge icons
  'check-badge-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  ),
  'check-badge-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.551a4.49 4.49 0 0 1 3.398-1.55 4.49 4.49 0 0 1 3.398 1.55 4.49 4.49 0 0 1 1.55 3.398c0 1.357-.6 2.572-1.55 3.397a4.49 4.49 0 0 1 1.55 3.398 4.49 4.49 0 0 1-1.55 3.398A4.49 4.49 0 0 1 18.75 21a4.49 4.49 0 0 1-3.397-1.551A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.551A4.49 4.49 0 0 1 5.25 21a4.49 4.49 0 0 1-3.398-1.55 4.49 4.49 0 0 1-1.55-3.398 4.49 4.49 0 0 1 1.55-3.397A4.49 4.49 0 0 1 .75 9.75a4.49 4.49 0 0 1 1.55-3.398A4.49 4.49 0 0 1 5.25.75a4.49 4.49 0 0 1 3.398 1.55 4.49 4.49 0 0 1 3.397-1.55Zm-2.632 8.695a.75.75 0 1 0-1.06-1.06l-2.391 2.39a.75.75 0 0 0 0 1.061l2.391 2.39a.75.75 0 0 0 1.06-1.06l-1.125-1.125h8.444a.75.75 0 0 0 0-1.5H6.17l1.125-1.124Z" clipRule="evenodd" />
    </svg>
  ),

  // Phone arrow up icons
  'phone-arrow-up-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
    </svg>
  ),
  'phone-arrow-up-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M15 3.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0V5.56l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97h-2.69a.75.75 0 0 1-.75-.75Zm-12.75 9a2.25 2.25 0 0 1 2.25-2.25h2.25a.75.75 0 0 0 0-1.5H4.5A3.75 3.75 0 0 0 .75 12.75v6.5A3.75 3.75 0 0 0 4.5 23h2.25a.75.75 0 0 0 0-1.5H4.5a2.25 2.25 0 0 1-2.25-2.25v-6.5Z" clipRule="evenodd" />
    </svg>
  ),

  // Clipboard document list icons
  'clipboard-document-list-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  ),
  'clipboard-document-list-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M17.663 3.118c.225.012.44.037.66.075.34.07.66.18.95.32a2.639 2.639 0 0 1 .386.218c.3.24.56.54.75.87.16.28.28.58.35.91.07.33.11.67.11 1.01v6.5A2.25 2.25 0 0 1 18.75 21h-2.25a.75.75 0 0 1 0-1.5h2.25a.75.75 0 0 0 .75-.75v-6.5c0-.34-.04-.68-.11-1.01a2.639 2.639 0 0 0-.35-.91 2.639 2.639 0 0 0-.75-.87 2.639 2.639 0 0 0-.386-.218c-.29-.14-.61-.25-.95-.32a4.023 4.023 0 0 0-.66-.075 4.023 4.023 0 0 0-.66.075c-.34.07-.66.18-.95.32a2.639 2.639 0 0 0-.386.218c-.3.24-.56.54-.75.87-.16.28-.28.58-.35.91-.07.33-.11.67-.11 1.01v6.5a.75.75 0 0 1-1.5 0v-6.5c0-.34.04-.68.11-1.01.07-.33.19-.63.35-.91.19-.33.45-.63.75-.87.12-.08.25-.15.386-.218.29-.14.61-.25.95-.32.22-.038.435-.063.66-.075ZM6.75 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V12Zm0 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V15Zm0 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V18ZM7.5 8.25a.75.75 0 0 1-.75-.75v-.008a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75V7.5a.75.75 0 0 1-.75.75H7.5Z" clipRule="evenodd" />
    </svg>
  ),

  // Circle stack icons
  'circle-stack-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  'circle-stack-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 6.375c0 2.062-3.164 3.75-7.062 3.75S6.875 8.437 6.875 6.375 10.039 2.625 13.938 2.625 21 4.313 21 6.375ZM12 10.875c-2.343 0-4.392.375-5.859 1.012a2.531 2.531 0 0 1-1.366-.983C4.666 10.08 4.5 9.062 4.5 8.25v-.75c0-.412.207-.79.553-1.012C6.608 5.875 9.156 5.625 12 5.625s5.392.25 7.447.863c.346.222.553.6.553 1.012v.75c0 .812-.166 1.83-.775 2.654a2.531 2.531 0 0 1-1.366.983C16.392 11.25 14.343 10.875 12 10.875Zm0 3c-2.539 0-4.8.375-6.328 1.012A2.531 2.531 0 0 1 4.5 15.75v-.75c0-.412.207-.79.553-1.012C7.108 13.875 9.656 13.625 12 13.625s5.392.25 7.447.863c.346.222.553.6.553 1.012v.75c0 .812-.166 1.83-.775 2.654a2.531 2.531 0 0 1-1.366.983C16.8 20.625 14.539 21 12 21Z" />
    </svg>
  ),

  // Presentation chart line icons
  'presentation-chart-line-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
    </svg>
  ),
  'presentation-chart-line-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3.75 3.75 0 0 0 3.75 3.75h9a3.75 3.75 0 0 0 3.75-3.75V3.75h.75a.75.75 0 0 0 0-1.5H2.25ZM19.5 3.75H4.5v10.5a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25V3.75Z" clipRule="evenodd" />
      <path fillRule="evenodd" d="M6.75 6.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm6.75 0a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Z" clipRule="evenodd" />
    </svg>
  ),

  // Server stack icons
  'server-stack-outline': (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z" />
    </svg>
  ),
  'server-stack-solid': (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" d="M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V5.25Zm7.5 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm-1.5 0a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm7.5-3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
    </svg>
  ),
};

export default function Icon({ 
  name, 
  size = 24, 
  strokeColor = 'currentColor', 
  fillColor = 'currentColor',
  className = '',
  type = 'outline'
}) {
  const iconKey = `${name}-${type}`;
  const icon = icons[iconKey];
  
  if (!icon) {
    console.warn(`Icon "${iconKey}" not found`);
    return null;
  }

  const iconStyle = {
    width: size,
    height: size,
    color: type === 'solid' ? fillColor : strokeColor,
  };

  return (
    <span 
      className={`inline-flex items-center justify-center ${className}`}
      style={iconStyle}
    >
      {icon}
    </span>
  );
}
