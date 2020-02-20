import React from "react"

import PropTypes from "prop-types"

function Preview({ entry }) {
  const data = entry.getIn(["data"]).toJS()

  if (data) {
    return (
      <div className="flex flex-col">
        <div
          className={`p-6 flex justify-around`}
          style={{ backgroundColor: data.theme_color }}
        >
          <div
            className="h-16 w-16 rounded-full flex justify-center items-center"
            style={{
              backgroundColor: data.background_color,
              color: data.theme_color,
            }}
          >
            <img className="w-10" src={data.icon} alt="logo" />
          </div>
          <div
            className="h-16 w-16 flex justify-center items-center"
            style={{
              backgroundColor: data.background_color,
              color: data.theme_color,
            }}
          >
            <img className="w-10" src={data.icon} alt="logo" />
          </div>
        </div>
        {[100, 300, 500, 700, 900].map(lightness => (
          <div
            className={`bg-gray-${lightness} p-6 flex justify-around`}
            key={lightness}
          >
            <div
              className="h-16 w-16 rounded-full flex justify-center items-center"
              style={{
                backgroundColor: data.background_color,
                color: data.theme_color,
              }}
            >
              <img className="w-10" src={data.icon} alt="logo" />
            </div>
            <div
              className="h-16 w-16 flex justify-center items-center"
              style={{
                backgroundColor: data.background_color,
                color: data.theme_color,
              }}
            >
              <img className="w-10" src={data.icon} alt="logo" />
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return <div>Loading ...</div>
  }
}

Preview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default Preview
