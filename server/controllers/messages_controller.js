var arr = [];
var id = 0;
module.exports = {
    create: (req, res) => {

        arr.push({
            time: req.body.time,
            text: req.body.text,
            id: id
        });

        id++;
        res.send(arr);
    },
    read: (req, res) => {
        res.send(arr);
    },
    update: (req, res) => {
        message = arr.find(e => e.id == req.params.id);
        message.text = req.body.text
            ?
            req.body.text
            :
            message.text

        res.send(arr)
    },
    delete: (req, res) => {
        arr.splice(arr.findIndex(e => e.id === req.params.id), 1);
        res.send(arr);

    }
}