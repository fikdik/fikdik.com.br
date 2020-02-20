export default function imagecb(
  img,
  cbimg,
  prefix = "",
  dotedpath = "childImageSharp.fluid.src"
) {
  if (typeof img === typeof "") {
    return prefix + img
  }
  let image = cbimg
  try {
    const path = dotedpath.split(".")
    switch (path.length) {
      case 3: {
        image = img[path[0]][path[1]][path[2]]
        break
      }
      default: {
        console.log("return callback image")
      }
    }
  } catch (err) {
    console.log(err)
  }
  return prefix + image
}
