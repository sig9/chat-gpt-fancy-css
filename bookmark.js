javascript:(function() {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([
        `<!DOCTYPE html><html><head>
        <style>
    [class^="react-scroll-to-bottom"] > .flex > div:nth-child(2n+1) {
        background: #3B3F41;
        white-space: pre-wrap;
    }
    [class^="react-scroll-to-bottom"] > .flex > div:nth-child(2n+2) {
        background: #52575A;
        white-space: pre-wrap;
    }
    [class^="react-scroll-to-bottom"] > .flex > div:not(:last-child) {
        padding: 10px;
        margin: 10px;
        border-radius: 5px;
    }
    [class^="react-scroll-to-bottom"] > .flex > div .relative.flex [style*="inline-block"] {
        display: none !important;
    }
    p:first-child {
        margin-top: 0;
    }
    p:last-child {
        margin-bottom: 0;
    }
    body {
        color: #D8D7D4 !important;
        background: #232526;
        font-family: Arial, sans-serif !important;
    }
    [class^="p"] {
        font-weight: !important;
        background: #161717 !important;
        padding: 5px;
        border-radius: 5px;
    }
    [class^="hljs"] {
        font-weight: bold !important;
    }
    [class^="hljs-comment"], [class^="hljs-regexp"] {
        color: #DAD9D8 !important;
    }
    [class^="hljs-keyword"] {
        color: #4CA3D8 !important;
    }
    [class^="hljs-params"] {
        color: #ff6c87 !important;
    }
    [class^="hljs-variable language_"] {
        color: #E24B8A !important;
    }
    [class^="hljs-title function_"] {
        color: #F24554 !important;
    }
    [class^="hljs-string"] {
        color: #56FEC1 !important;
    }
    [class^="hljs-property"] {
        color: #FFFFFF !important;
    }
    [class^="hljs-built_in"] {
        color: #F3AC35 !important;
    }
    [class^="hljs-attribute"] {
        color: #60FED7 !important;
    }
    [class^="hljs-attr"], [class^="hljs-selector-attr"], [class^="hljs-selector-pseudo"] {
        color: #E24B8A !important;
    }
    [class^="hljs-number"] {
        color: #dad9d8 !important;
    }
    [class^="bot"]{
        color: #10A37F;
        background-color: #52575A !important;
    }
    [class^="you"]{
        color: #cc1a58;
    }
  </style>
  </head>
  <body>`+ document.querySelector('[class^="react-scroll-to-bottom"]').innerHTML
    .replace(/<img[^>]*>/g, '')

    .replace(
        /<div class="relative flex">(.*?)<\/div>/g,
        '<h3 class="you">You</you>'
      )
    .replace(/<button[^>]*>.*?<\/button>/g, '')
    .replace(/<svg[^>]*>.*?<\/svg>/g, '<h3 class="bot">Bot</h3>') + '</body></html>'], {type: 'text/html'}));
    a.download = prompt('Enter filename');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  })()
