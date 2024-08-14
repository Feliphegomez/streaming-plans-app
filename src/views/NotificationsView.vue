<template>
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton goBack">
                <ion-icon name="chevron-back-outline"></ion-icon>
            </a>
        </div>
        <div class="pageTitle">
            Notificaciones
        </div>
        <div class="right">
            <a href="#" class="headerButton" @click="toastbox('toast-example-1', 3000)">
                <ion-icon name="notifications-off-outline"></ion-icon>
            </a>
        </div>
    </div>

    <div id="toast-example-1" class="toast-box toast-bottom bg-primary">
        <div class="in">
            <ion-icon name="notifications-off-outline"></ion-icon>
            <div class="text">
                Notification sounds have been muted
            </div>
        </div>
        <button type="button" class="btn btn-sm btn-text-light close-button">OK</button>
    </div>

    <div id="appCapsule">
        <div class="section full">
            <ul class="listview image-listview flush">
                <li class="active">
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Payment Received</strong></div>
                                <div class="text-small mb-05">John sent you <b>$ 50</b></div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                            <span class="badge badge-primary badge-empty"></span>
                        </div>
                    </a>
                </li>
                <li class="active">
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-success">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Money has been sent</strong></div>
                                <div class="text-small mb-05">The money you sent to John was successfully sent.</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                            <span class="badge badge-primary">3</span>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-danger">
                            <ion-icon name="key-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Password changed</strong></div>
                                <div class="text-small mb-05">Your password has been changed</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-warning">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>New Messages</strong></div>
                                <div class="text-small mb-05">You have new messages from John</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="arrow-down-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Payment Received</strong></div>
                                <div class="text-small mb-05">John sent you <b>$ 50</b></div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-success">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Money has been sent</strong></div>
                                <div class="text-small mb-05">The money you sent to John was successfully sent.</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-danger">
                            <ion-icon name="key-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Password changed</strong></div>
                                <div class="text-small mb-05">Your password has been changed</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="app-notification-detail.html" class="item">
                        <div class="icon-box bg-warning">
                            <ion-icon name="chatbubble-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>New Messages</strong></div>
                                <div class="text-small mb-05">You have new messages from John</div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotificationsView',
    methods: {
        closeToastBox() {
            var toastBoxes = document.querySelectorAll(".toast-box");
            toastBoxes.forEach(function (el) {
                el.classList.remove("show")
            })
        },
        toastbox(target, time) {
            var a = document.getElementById(target);
            this.closeToastBox()
            setTimeout(() => {
                a.classList.add("show")
            }, 1000);
            if (time) {
                time = time + 1000;
                setTimeout(() => {
                    this.closeToastBox()
                }, time);
            }
        },
    },
}
</script>