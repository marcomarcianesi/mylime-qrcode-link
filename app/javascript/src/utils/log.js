export default (content) => {
  const logs = document.querySelector("#logs")
  const p = document.createElement("p")
  p.append(JSON.stringify(content, null, 2))
  logs.append(p)
}