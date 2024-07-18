  // 解析JSON请求体
  let jsonBody = JSON.parse(body);

  // 修改商品ID为9NBLGGH52XT6
  jsonBody.itemsToAdd.items.forEach(item => {
    if (item.productId === '9NBLGGH52PD2') {
      item.productId = '9NBLGGH52XT6';
    }
  });

  // 打印修改后的请求体
  console.log("Modified Request Body:", JSON.stringify(jsonBody));

  // 返回修改后的请求体
  $done({ body: JSON.stringify(jsonBody) });
} else {
  $done({});
}