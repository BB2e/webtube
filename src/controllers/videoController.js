export const trending = (req, res) => res.send("home page videos")
export const see = (req, res) => {
    console.log(req.params.id);
    return res.send("watch")
}
export const edit = (req, res) => {
    console.log(req.params.id);
    return res.send("edit")
}
export const search = (req, res) => res.send("search")
export const upload = (req, res) => res.send("upload")
export const deleteVideo = (req, res) => {
    console.log(req.params);
    return res.send("deleteVideo")
}

// export default trending;
