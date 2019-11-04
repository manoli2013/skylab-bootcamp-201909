function Feedback(container) {
    Component.call(this, container);
}

Feedback.extend(Component);

Feedback.prototype.render = function (text) {
    var message = this.container.getElementsByClassName('feedback__message')[0];
    message.innerText = text;
};