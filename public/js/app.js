const Home = {template:
        '<section  id="fullSize">' +
        '<div class="fullSection">' +
            '<div class="fullContent">' +
                '<div class="homeLeft">' +
                    '<h2>Ab</h2>' +
                '</div>' +
                '<div class="homeRight">' +
                    '<h2>by</h2>' +
                '</div>' +
            '</div>' +
            '<div class="buttonBox">' +
                '<router-link class="buttonLink" to="/about">Who am I?</router-link>' +
            '</div>' +
        '</div>' +
        '</section>'
            };
const About = {template: '' +
        '<section  id="fullSize">' +
        '<div class="fullSection">' +
        '<div class="fullContent">' +
        '<div class="contactBox">' +
    '<div class="aboutLeft">'+
            '<h2 class="aboutHeader">Abbigail Merrill | Web Developer</h2>' +
            '<h3 class="aboutSubHeader">Grad Student at IUPUI</h3>' +
            '<div class="aboutBox">' +
                '<div>' +
                '<p>Abbigail Merrill is a graduate student at ' +
                'IUPUI that is actively involved on campus. She hopes to ' +
                'one day teach at collegiate level, and is looking for ' +
                'experience in the field now. Abby grew up on a farm in' +
                'Boone County, Indiana where she showed animals in 4-H ' +
                'and was a ten-year 4-H member.</p>' +
                '<p>Experience</p>' +
                '<ul>' +
                '<li>Graduate Assistant at IUPUI</li>' +
                '<li>Tutor at IUPUI</li>' +
                '<li>Previous Instructor at iDTech</li></ul>' +
                '<li>Self-Employed Projecy Manager</li>' +
                '</div>' +
                '<img src="images/profileImage.png" alt="profile image">' +
            '</div>' +
        '</div>' +
        '<div class="aboutRight">' +
            '<a target="_blank" href="https://www.facebook.com/abbigail.merrill"><img class="icon" src="images/icons/facebook.png" alt="sm icon"></a>' +
            '<a target="_blank" href="mailto:abbigail.merrill@gmail.com"><img class="icon" src="images/icons/mail.png" alt="sm icon"></a>' +
            '<a target="_blank" href="https://www.linkedin.com/in/abbigail-merrill-398624126/"><img class="icon" src="images/icons/linkedIn.png" alt="sm icon"></a>' +
            '<a target="_blank" href="https://www.instagram.com/aquafire1113/"><img class="icon" src="images/icons/insta.png" alt="sm icon"></a>' +
            '<a target="_blank" href="https://twitter.com/Firestar1113"><img class="icon" src="images/icons/twitter.png" alt="sm icon"></a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="buttonBox">' +
        '<router-link class="buttonLink" to="/myWork">See My Work</router-link>' +
        '</div>' +
        '</div>' +
        '</section>'
        };
const MyWork = {template: '' +
        '<section  id="largeSize">' +
        '<div class="largeSection">' +
        '<div class="largeContent">' +
            '<div class="workContainer">' +
    '<h1 class="pageTitle">My Works</h1>' +

        '<div class="workBox">' +
        '<div class="workImageBox">' +
        '<a class="siteLink" target="_blank" href="https://indygrowngames.firebaseapp.com/"><img class="workImage" src="images/igg.JPG" alt="workImage"></a>' +
        '</div>' +
        '<div class="workDesc">' +
        '<h3 class="workTitle">Indy Grown Games</h3>' +
        '<p class="workText">This site was built with client Travis Faas, the administrator' +
        'for the Indy Grown Games community in Indiana. Indy Grown games is used to promote ' +
        'the knowledge on game development in Indiana. It features SEO optimization, research, ' +
        'sign-in functionalities, and the ability to submit events to an admin (Travis) who can then ' +
        'manage which events are posted and which are deleted. It has been optimized for mobile.</p>' +
        '</div>' +
        '</div>' +
        '<div class="workBox">' +
        '<div class="workImageBox">' +
        '<a class="siteLink" target="_blank" href="https://aquafire1113.github.io/sidewaysSite"><img class="workImage" src="images/sidewaysSite.JPG" alt="workImage"></a>' +
        '</div>' +
        '<div class="workDesc">' +
        '<h3 class="workTitle">The Sideways Site</h3>' +
        '<p class="workText">The sideways site is a side project that I built to teach myself' +
        'how to do animations in css and in javascript. It is meant to be a fun' +
        'and unseen take on what web developemnt is. It has been optimized for mobile.</p>' +
        '</div>' +
        '</div>' +
        '<div class="workBox">' +
        '<div class="workImageBox">' +
        '<a class="siteLink" target="_blank" href="https://phan-site.firebaseapp.com/"><img class="workImage" src="images/phanSite.JPG" alt="workImage"></a>' +
        '</div>' +
        '<div class="workDesc">' +
        '<h3 class="workTitle">The Phan-Site</h3>' +
        '<p class="workText">The phan-site is a side project of mine based off of my favorite videogame, Persona 5. The site features a login functionality, ' +
        'a message board, a landing screen, and a page where JSON has been used to append data on the thieves. It has been optimized for mobile.</p>' +
        '</div>' +
        '</div>' +
        '<div class="workBox">' +
        '<div class="workImageBox">' +
        '<a class="siteLink" target="_blank" href="https://aquafire1113.github.io/photoSite/#/home"><img class="workImage" src="images/photoSite.JPG" alt="workImage"></a>' +
        '</div>' +
        '<div class="workDesc">' +
        '<h3 class="workTitle">The Photo Site</h3>' +
        '<p class="workText">The photo site is a site built in Vue meant to mimic the ' +
        'idea of having a centralized location to have freelance photography for free use, ' +
        'while giving credit to the original photographers. (For visual display only)</p>' +
        '</div>' +
        '</div>' +
        //write here to add another
        '</div>' +
        '</div>' +
        '<div class="buttonBox">' +
        '<router-link class="buttonLink" to="/contact">Contact Me</router-link>' +
        '</div>' +
        '</div>' +
        '</section>'
        };
Vue.component('contact',{
    data: function(){
      return {
          name: "",
          email:"",
          message:""
      };
    },
    methods:{
        submitMessage: function (e) {
            e.preventDefault();
            db.collection('messages').add({
                name:this.name,
                email:this.email,
                message:this.message,
                timestamp:firebase.firestore.FieldValue.serverTimestamp()
            }).then(function(docRef){
                console.log(docRef);
                Swal.fire(
                    'Your message has been submitted',
                    'success'
                );
            });
            this.name = "";
            this.email = "";
            this.message = "";
        }
    },
    template:
        '<section id="fullSize">' +
        '<div class="fullSection">' +
        '<div class="fullContent">' +
        '<div class="contactBox">' +
        '<div class="contactLeft">' +
        '<h2 class="aboutHeader">Contact Abby</h2>' +
        '<form id="contact">' +
        '<div>Name:<br> <input v-model="name" type="text"></div>' +
        '<div>Email:<br> <input v-model="email" type="email"></div>' +
        '<div>Name:<br> <textarea v-model="message" placeholder="Your message here..."></textarea></div>' +
        '<input v-on:click= "submitMessage" id="submit" class="button" type="submit">' +
        '</form>' +
        '</div>' +
        '<div class="contactRight">' +
        '<a target="_blank" href="https://www.facebook.com/abbigail.merrill"><img class="icon" src="images/icons/facebook.png" alt="sm icon"></a>' +
        '<a target="_blank" href="mailto:abbigail.merrill@gmail.com"><img class="icon" src="images/icons/mail.png" alt="sm icon"></a>' +
        '<a target="_blank" href="https://www.linkedin.com/in/abbigail-merrill-398624126/"><img class="icon" src="images/icons/linkedIn.png" alt="sm icon"></a>' +
        '<a target="_blank" href="https://www.instagram.com/aquafire1113/"><img class="icon" src="images/icons/insta.png" alt="sm icon"></a>' +
        '<a target="_blank" href="https://twitter.com/Firestar1113"><img class="icon" src="images/icons/twitter.png" alt="sm icon"></a>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '</section>' +
        ''
});

const Contact = {template:'<contact></contact>'};

const router  =new VueRouter({
    routes:[
        {path: '/home', component:Home},
        {path: '/about', component: About},
        {path: '/myWork', component: MyWork},
        {path:'/contact', component: Contact}
    ]
});

const app = new Vue({
    router,
    methods: {

    }
}).$mount("#app");

