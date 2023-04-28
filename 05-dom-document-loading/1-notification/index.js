export default class NotificationMessage {

    constructor(text, {
        duration = 0,
        type = '',
    } = {}) {
        this.duration = duration;
        this.type = type;
        this.text = text;
    }

    get template() {
        return `
            <div class="notification ${this.type}" style="--value:${this.duration / 100}s" id="notificationMessage">
                <div class="timer"></div>
                <div class="inner-wrapper">
                    <div class="notification-header">${this.type}</div>
                    <div class="notification-body">
                        ${this.text}
                    </div>
                </div>
            </div>
        `
    }
    
    render() {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = this.template;
        this.element = wrapper.firstElementChild;
        document.body.append(this.element);
        setTimeout(this.remove, this.duration);
    }

    show() {
        if(document.getElementById('notificationMessage')) {
            document.getElementById('notificationMessage').remove();
        }
        this.render();
    }

    remove() {
        document.getElementById('notificationMessage').remove()
    }
    
    destroy() {
        this.remove();
        this.element = {};
        this.subElements = {};
    }
}
