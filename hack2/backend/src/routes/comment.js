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
    const id = req.query.restaurantId
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

    let result = []
    try {
        await Comment.find({id: id}, (err, data) => {
            if (err) throw new Error("guerying error: GetComment")
            console.log(data.length)
            result = data
            // result = tidyUpData(data, result)
        } ).clone();
        console.log('data send')
        res.status(200).send({
          message: 'success',
          data: result// the data after tidy up
        })
    } catch (err) {
      console.error(err.name + ' ' + err.message)
      res.status(403).send({
        message: 'error',
        data: []// the data after tidy up
      })
    }

}

exports.CreateComment = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const body = req.body
    /****************************************/
    // TODO Part III-3-b: create a new comment to a restaurant
}
