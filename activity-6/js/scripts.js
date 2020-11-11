var messages = [];

var messageType =
{
    out: 'out-message',
    in: 'in-message',
    butt_in: 'butt-in-message',
    unknown: 'unknown-message'
};

var data = [
    {
        type: messageType.out,
        user: 'Jeremy B.',
        message: "Sup, James. You got Zoom plans?"
    },
    {
        type: messageType.in,
        user: 'James S.',
        message: "Hello there, my little Tengaged legend! Of course I have Zoom plans!"
    },
    {
        type: messageType.butt_in,
        user: 'Derek Z.',
        message: "Honestly, it's gonna suck so much anyways..."
    },
    {
        type: messageType.out,
        user: 'Jeremy B.',
        message: "Get out of here, Tyler! You should know not to butt into our little chats like that!"
    },
    {
        type: messageType.butt_in,
        user: 'Derek Z.',
        message: "Fine, be a jerk...and my name's Derek!"
    },
    {
        type: messageType.out,
        user: 'Jeremy B.',
        message: "Sorry about that, James."
    },
    {
        type: messageType.in,
        user: 'James S.',
        message: "It's OK, J.B. Now, would 1 p.m. work for you?"
    },
    {
        type: messageType.out,
        user: 'Jeremy B.',
        message: "Of course it would work for me! See you then!"
    },
    {
        type: messageType.in,
        user: 'James S.',
        message: "You too, man..."
    }
];

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message)
{
    var messageText = document.createTextNode(message.user + ': ' + message.message);

    var messageEl = document.createElement('div');
    messageEl.appendChild(messageText);

    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event)
{
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch (event.target.id)
    {
        case 'send-button':
            user = "Jeremy B.";
            type = messageType.out;
            break;
        case 'reply-button':
            user = "James S.";
            type = messageType.in;
            break;
        case 'butt-in-button':
            user = "Derek Z.";
            type = messageType.butt_in;
            break;
        default:
            user = "unknown";
            type = messageType.unknown;
    }

    if (messageType.value != '')
    {
        var message = new Message(type, user, messageInput.value);
        messages.push(message);

        var el = createMessageElement(message);
        messagesContainerEl.appendChild(el);

        messageInput.value = '';
    }
}

function loadSeedData()
{
    for (var i = 0; i < data.length; i++)
    {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }

    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++)
    {
        var message = messages[i];
        var el = createMessageElement(message);

        messagesContainerEl.appendChild(el);
    }
}

var init = function()
{
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
    document.getElementById('butt-in-button').onclick = addMessageHandler;

    loadSeedData();
};

init();