cmd.on('covidindo', ['covidindo'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/info/covid-indo`)
  let anu = res.data.result[0]
  client.reply(msg, functions.parseResult(anu))
});

cmd.on('infogempa', ['infogempa'], ['info'], async(msg, {
  query, client
})=> {
  res = await functions.axios.get(`${botinfo.linkApi.zacros}/info/gempa`)
  let anu = res.data.result
  let b = ``
  for (let c of anu) b+= functions.parseResult(c,{title:'Info Gempa / BMKG'})+'\n'
  return client.sendText(msg.from, b.trim())
},{param:functions.needed('query')});

cmd.on('sc', ['sc','script','scriptbot'], ['info'], async(msg, {
  query, client
})=> {
  client.sendText(msg.from, `
Base Bot : Baileys
`, msg)
});
