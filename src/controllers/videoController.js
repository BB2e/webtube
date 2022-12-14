import Video from '../models/Video'

// res.render.(pug 템플릿 파일명, 보낼 변수들)

export const home = async(req, res) => {
    const videos = await Video.find({});
    return res.render('home', {pageTitle: "Home", videos})
}

// => fakeUser: fakeUser
export const watch = async (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const video = await Video.findById(id).exec();
    if(!video) {
        return res.render("404", {
            pageTitle: 'Video not found.'
        });
    }
    return res.render("watch", {
        pageTitle: video.title, video
    })
   
}

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const video = await Video.findById(id).exec();
    if(!video) {
        return res.render("404", {
            pageTitle: 'Video not found.'
        });
    }
    return res.render("edit", {
        pageTitle: `Editing: ${video.title}`, video
    })
}

export const postEdit = async (req, res) => {
    const { id } = req.params;
    const { title, description, hashtags} = req.body;
    const video = await Video.findById(id).exec();
    if(!video) {
        return res.render("404", {
            pageTitle: 'Video not found.'
        });
    }
    video.title = title;
    video.description = description;
    video.hashtags = hashtags.split(',').map(word=> word.startsWith('#') ? word : `#${word}`);
    await video.save();
    return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
    return res.render("upload", {
        pageTitle: `Upload video`
    });
}

export const postUpload = async (req, res) => {
    let { title, description, hashtags } = req.body
    try {
        await Video.create({
            title,
            description,
            // createdAt: Date.now(), 
            //Video.js에서 default로 설정됨
            hashtags: hashtags.split(',').map(word=> `#${word}`),
            meta: {
                views: 0,
                rating: 0
            },
        })
        return res.redirect("/")
    } catch (error) {
        return res.render("upload", {
            pageTitle: "Upload video",
            errorMessage: error._message
        })
    }
   
    // let { title, description, hashtags } = req.body
    // await Video.create({
    //     title,
    //     description,
    //     createdAt: Date.now(),
    //     hashtags: hashtags.split(',').map(word=> `#${word}`),
    //     meta: {
    //         views: 0,
    //         rating: 0
    //     },
    // })
    // return res.redirect("/");
}

export const search = (req, res) => res.send("search")