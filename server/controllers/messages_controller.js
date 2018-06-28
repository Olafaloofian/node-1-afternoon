let messages = [];
let id = 0

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body
        messages.push({ id, text, time});
        id++;
        res.status(200).send(messages)
    },

    read: (req, res) => {
        res.status(200).send(messages)
    },

    update: (req, res) => {
        const { text } = req.body
        messages.forEach(element => {
            if (element.id===Number(req.params.id)) {
                element.text = text
            }
        })
        res.status(200).send(messages)
    },

    delete: (req, res) => {
        messages.forEach(element => {
            if (element.id===Number(req.params.id)) {
                messages.splice(messages.indexOf(element),1)
            }
        })
        res.status(200).send(messages)
    }
}