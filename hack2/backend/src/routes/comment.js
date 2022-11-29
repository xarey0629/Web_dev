// * ////////////////////////////////////////////////////////////////////////
// *
// * FileName     [ comment.js ]
// * PackageName  [ server ]
// * Synopsis     [ Apis of comment ]
// * Author       [ Chin-Yi Cheng ]
// * Copyright    [ 2022 11 ]
// *
// * ////////////////////////////////////////////////////////////////////////

import Comment from '../models/comment'

exports.GetCommentsByRestaurantId = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const id = req.query.id
    /****************************************/
    // TODO Part III-3-a: find all comments to a restaurant

    // NOTE USE THE FOLLOWING FORMAT. Send type should be 
    // if success:
    // {
    //    message: 'success'
    //    contents: the data to be sent
    // }
    // else:
    // {
    //    message: 'error'
    //    contents: []
    // }

    try {
        const result = await Comment.find({restaurantId: id})
        //     (err, data) => {
        //     if (err) throw new Error("guerying error: GetComment")
        //     console.log(data.length)
        //     result = data
        //     // result = tidyUpData(data, result)
        // } ).clone();
        if( result ){
            console.log('Comments send')
            res.status(200).send(
                {
                    message: 'success',
                    contents: result// the data after tidy up
            })
        }
        else{
            throw new Error('Something Wrong !')
        }
    } catch (err) {
      console.error(err.name + ' ' + err.message)
      res.status(403).send(
        {
            message: 'error',
            contents: []// the data after tidy up
      })
    }

}

exports.CreateComment = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const restaurantId = req.body.restaurantId;
    const name = req.body.name;
    const rating = req.body.rating;
    const content = req.body.content;
    /****************************************/
    // TODO Part III-3-b: create a new comment to a restaurant
    console.log("Create comment",restaurantId, name, rating, content)

    try {
        const newComment = new Comment({
            restaurantId: restaurantId, 
            name: name,
            rating: rating,
            content: content
        })
        await newComment.save();
        if( newComment){
            console.log(' Create New Comment successfully')
            res.status(200).send(
                {
                    message: 'success',
            })
        }
        else{
            throw new Error('Something Wrong !')
        }
        // await Comment.insertMany(body, (err) => {
        //     if (err) throw new Error("add error: AddComment")
        //   } )
    } catch (err) {
      console.error(err.name + ' ' + err.message)
      res.status(403).send({
        message: 'error',
      })
    }
}
