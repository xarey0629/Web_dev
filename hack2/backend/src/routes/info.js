// * ////////////////////////////////////////////////////////////////////////
// *
// * FileName     [ info.js ]
// * PackageName  [ server ]
// * Synopsis     [ Get restaurant info from database ]
// * Author       [ Chin-Yi Cheng ]
// * Copyright    [ 2022 11 ]
// *
// * ////////////////////////////////////////////////////////////////////////

import Info from '../models/info'

exports.GetSearch = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const priceFilter = req.query.priceFilter
    const mealFilter  = req.query.mealFilter
    const typeFilter  = req.query.typeFilter
    const sortBy      = req.query.sortBy
    /****************************************/

    // NOTE Hint: 
    // use db.collection.find({condition}).exec(err, data) {...}
    // When success, 
    //   do res.status(200).send({ message: 'success', contents: ... })
    // When fail,
    //   do res.status(403).send({ message: 'error', contents: ... }) 
    let result = []

    // conso
    
    try {
        const data = await Info.find({
            // ******** Todo - filters ********
            // ... some Object-key filters

        }).sort({[sortBy]: 1}) // sort
        if (data.length) {
            res.status(200).send(
                {
                    message: 'success',
                    contents: data // the data after tidy up
                }
            );
            // console.log('data send', data);
        }
        else {
            throw new Error('Something Wrong !')
        }
        
    } catch (err) {
      console.error(err.name + ' ' + err.message)
      res.status(403).send(
        {
            message: 'error',
            contents: null // the data after tidy up
        }
      )
    }

    // TODO Part I-3-a: find the information to all restaurants
    
    // TODO Part II-2-a: revise the route so that the result is filtered with priceFilter, mealFilter and typeFilter
    // TODO Part II-2-b: revise the route so that the result is sorted by sortBy
}

exports.GetInfo = async (req, res) => {
    /*******    NOTE: DO NOT MODIFY   *******/
    const id = req.query.id
    /****************************************/

    // NOTE USE THE FOLLOWING FORMAT. Send type should be 
    // if success:
    // {
    //    message: 'success'
    //    contents: the data to be sent. Hint: A dictionary of the restaruant's information.
    // }
    // else:
    // {
    //    message: 'error'
    //    contents: []
    // }
    let result = []
    try {
        await Info.find({id: id}, (err, data) => {
            if (err) throw new Error("guerying error: GetInfo")
            console.log(data)
            result = data[0]
        } ).clone();
        console.log('data send')
        res.status(200).send({
          message: 'success',
          contents: result// the data after tidy up
        })
    } catch (err) {
      console.error(err.name + ' ' + err.message)
      res.status(403).send({
        message: 'error',
        contents: null// the data after tidy up
      })
    }
}