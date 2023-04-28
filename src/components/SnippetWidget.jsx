import React, { useState, useEffect } from 'react';

export default function SnippetWidget() {

  const snippetUrl = "https://wringapiutils.s3.us-west-2.amazonaws.com/interceptor-packages/interceptor.min.js";
  const snippetCheckSumUrl = "https://wringapiutils.s3.us-west-2.amazonaws.com/interceptor-packages/interceptor.min.js.SRI-CHECKSUM";

  const [ checksum, setCheckSum ] = useState("");

  const generatePreItem = () => {
    return `<script src="${snippetUrl}"
  integrity="sha384-${checksum}"
  crossorigin="anonymous"></script>
<script>
  wringInterceptor.init("phc_XXXX");
</script>
`;
  };

  // get the checksum
  useEffect(() => {
    fetch(snippetCheckSumUrl).then((resp) => {
      return resp.text();
    }).then((text) => {
      setCheckSum(text);
    });
  }, []);

  return (
    <div>
      <p>Include the following snippet in your <code>index.html</code> or main template HTML file:</p>
      <pre>
	{ generatePreItem() }
      </pre>
    </div>
  );

}
