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
            <div class="notification ${this.type}" style="--value:20s" id="notificationMessage">
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
        window.setTimeout(this.remove, this.duration);
        //console.log(this.element === document.getElementById('notificationMessage'));
    }

    show() {
        if(document.getElementById('notificationMessage')) {
            document.getElementById('notificationMessage').remove();
        }
        this.render();
    }

    hide() {

    }

    remove() {
        document.getElementById('notificationMessage').remove()
        //if(this.element) {
        //    this.element.remove();
        //}
    }
    
    destroy() {
        this.remove();
        this.element = {};
        this.subElements = {};
    }
}
