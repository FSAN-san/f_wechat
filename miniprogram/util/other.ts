const createPage = <TD, TM> ({data, methods, ...life}: {data?: TD, methods?: TM, [k: string]: TD|TM|Function|undefined}) => Page({
  data,
  ...methods,
  ...life
})

export {
	createPage
}