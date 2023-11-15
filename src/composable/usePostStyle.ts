const POST_STYLE = {
  politika: {
    backgroundColor: "#c79f01",
    backgroundImage: "/img/blog/16by9/01.jpg"
  },
  dilo: {
    backgroundColor: "#a6ab00",
    backgroundImage: "/img/blog/16by9/09.jpg"
  },
  sport: {
    backgroundColor: "#4da2db",
    backgroundImage: "/img/blog/16by9/big/01.jpg"
  },
  "zdorov-ya": {
    backgroundColor: "#5ac343",
    backgroundImage: "/img/blog/16by9/07.jpg"
  },
  dozvillya: {
    backgroundColor: "#e6009e",
    backgroundImage: "/img/blog/16by9/05.jpg"
  },
  suspilstvo: {
    backgroundColor: "#fc7000",
    backgroundImage: "/img/blog/16by9/02.jpg"
  }
}
export const usePostStyle = (categorySlug = "suspilstvo") => {
  const getPostStyle = (slug = "suspilstvo") => {
    return POST_STYLE[slug as keyof typeof POST_STYLE] || POST_STYLE["suspilstvo"]
  }

  return {
    getPostStyle,
    postStyle: POST_STYLE[categorySlug as keyof typeof POST_STYLE] || POST_STYLE["suspilstvo"]
  }
}
