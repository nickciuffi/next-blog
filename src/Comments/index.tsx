import Script from 'next/script';
import { Container } from './style';

type CommentsProps = {
  slug: string;
  title: string;
  id: number;
};

export function Comments({ id, slug, title }: CommentsProps) {
  return (
    <Container>
      <div id="disqus_thread"></div>
      <Script>
        {`
      var disqus_config = function () {
    this.page.url = document.location.href;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = document.location.href.split(".app")[1]; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://blog-next-4.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
    `}
      </Script>
    </Container>
  );
}
