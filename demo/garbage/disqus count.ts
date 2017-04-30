
getCount(url: string) {

  // TODO: http://ng2.disqus.com/count-data.js?2=https://murhafsousli.github.io/ng2-disqus/
  const proto = 'https:';
  const forum = 'ng2';
  const domain = 'disqus.com';
  url = 'https://murhafsousli.github.io/ng2-disqus/';

  const finalUrl = `${proto}//${forum}.${domain}/count-data.js?2=${url}&callback=JSONP_CALLBACK`;

  console.log(finalUrl);
  return this.jsonp.get(finalUrl)
    .map((data: any) => {
      console.log('x', data);
      return data;
    });
  // data = data.text();
  // let result = JSON.parse(data.replace(/^displayCount\((.*)\)/, '$1'));
  // console.log(result);
  // return result.count || 0;
  // })
  // .catch((err) => {
  //   console.log(err);
  //   return Observable.empty()
  // });

}
