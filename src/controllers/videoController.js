import Video from '../models/Video'

// res.render.(pug 템플릿 파일명, 보낼 변수들)

export const home = (req, res) => {
    Video.find({}, (error, videos) => {
        // callback이라 db연결이 된후에 아랫줄이 실행된다
        res.render("home", {
            pageTitle: "Home",
            videos
        })
    }) // {} : search term 비어있으면 모든 타입을 찾는다 

}

// => fakeUser: fakeUser
export const watch = (req, res) => {
    // const id = req.params.id;
    const {
        id
    } = req.params;
    return res.render("watch", {
        pageTitle: `Watching`
    })
}

export const getEdit = (req, res) => {
    const {
        id
    } = req.params;
    return res.render("edit", {
        pageTitle: `Editing:`
    })
}

export const postEdit = (req, res) => {
    const {
        id
    } = req.params;
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", {
        pageTitle: `Upload video`
    });
}

export const postUpload = (req, res) => {
    let {
        title
    } = req.body
    return res.redirect("/");
}

export const search = (req, res) => res.send("search")