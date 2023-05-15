type fontTag = {
  as: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

type valiableOptions = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

const span: fontTag = { as: "span" }
const p: fontTag = { as: "p" }
const h1: fontTag = { as: "h1" }
const h2: fontTag = { as: "h2" }
const h3: fontTag = { as: "h3" }
const h4: fontTag = { as: "h4" }
const h5: fontTag = { as: "h5" }
const h6: fontTag = { as: "h6" }

const propProvider = (
  fontSize: string,
  lineHeight: string,
  fontWeight: number
) => ({
  fontSize,
  lineHeight,
  fontWeight
})

const PropAcessor = () =>
  ({
    span: {
      ...span,
      ...propProvider("12px", "12px", 400)
    },
    p: {
      ...p,
      ...propProvider("16px", "16px", 400)
    },
    h1: {
      ...h1,
      ...propProvider("36px", "36px", 800)
    },
    h2: {
      ...h2,
      ...propProvider("32px", "32px", 600)
    },
    h3: {
      ...h3,
      ...propProvider("28px", "28px", 400)
    },
    h4: {
      ...h4,
      ...propProvider("22px", "22px", 400)
    },
    h5: {
      ...h5,
      ...propProvider("20px", "20px", 400)
    },
    h6: {
      ...h6,
      ...propProvider("18px", "18px", 300)
    }
  } as const)

export { valiableOptions }

export default PropAcessor
