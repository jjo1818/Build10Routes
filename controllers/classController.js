const classes = require("../models/classes");

// The callback functions originally the second argument from -> app.get('/', () => {})
module.exports.index = (req, res) => {

   
    // Looks in the views folder for "class/Index" and passes { class } data to the view (kind of like a server props object)
    res.render('classes/Index', { classes: classes })
}

// show
module.exports.show = (req, res) => {
    
    res.render('classes/Show', { class: classes[req.params.index] })
// { item: data[req.params.index], index:req.params.index }
};

