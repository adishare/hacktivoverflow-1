<template>
    <div id="app" class="hero-bkg-animated">

        <div id="navAndNotifWrapper">
            <navbar 
                :user='user' 
                @fetchUser="fetchUser" 
                :logNotification="logNotification"
            ></navbar>
            <transition name="fade" mode="out-in">
                <div v-if="notificationModel.status" :class="notificationModel.status" >
                    <span class="text-center"> {{notificationModel.message}} </span>
                    <button type="button" class="close"  @click.prevent="notificationModel = {}" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </transition>
        </div>
        
        <div style="height:54px;"></div>

        <transition name="fade" mode="out-in">
            <router-view 
                :getUserByToken='getUserByToken'
                :user='user'
                :logNotification='logNotification'
                @fetchUser="fetchUser"
            ></router-view>
        </transition>

        <transition name="fade" mode="out-in">
            <footerSection 
                :user='user'
                :logNotification='logNotification'
            ></footerSection>
        </transition>

    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    components: {
        navbar: () => import("./components/Navbar"),
        footerSection : () => import('./components/FooterSection.vue')
    },
    data() {
        return {
            notificationModel: {},
            user : null,
        }
    },
    created() {
        if(localStorage.getItem('token')) {
            this.getUserByToken()
        } 
    },
    mounted () {
        
    },
    methods: {
        ...mapActions(['setUser']),
        
        logNotification(message, status, timeout) {
            document.body.classList.remove('loading-indicator');
            this.notificationModel = {
                status: `alert text-center alert-${status || 'info'} alert-dismissible fade show`,
                message
            }
            if (timeout) {
                setTimeout(() => {
                    this.notificationModel = {}
                }, timeout);
            }
        },

        fetchUser(value) {
            this.user = value
        },

        getUserByToken() {
            this.$server.get(`/verify`,{
                headers : {
                    token : localStorage.getItem('token')
                }
            })
            .then((result) => {
                this.user = result.data
                this.setUser(result.data)
                this.logNotification('wellcome back '+result.data.name, 'info', 3000)      
            })
            .catch((err) => {
                this.logNotification(err.response.data.message, 'danger', 3000)      
            });
        },

    }
}
</script>

<style>
    @import './assets/main.css';
    
    @import './assets/bootstrap.css';
    /* @import './assets/bootswatch.css'; */


    #app {
        box-sizing: border-box;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }

    .hero-bkg-animated {
        background: gray url(https://subtlepatterns.com/patterns/geometry2.png) repeat 0 0;
        width: 100%;
        height: 100%;
        min-height: 600px;
        box-sizing: border-box;
        -webkit-animation: slide 20s linear infinite;
    }

    @-webkit-keyframes slide {
        from {
            background-position: 0 0;
        }

        to {
            background-position: -400px 0;
        }
    }

    #navAndNotifWrapper {
        width: 100%;
        height: 50px;
        /* background: red; */
        position: fixed;
        z-index: 99;
    }

    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }
    .headroom--pinned {
        transform: translateY(0%);
    }
    .headroom--unpinned {
        transform: translateY(-100%);
    }
</style>