const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

const bloglist = [{
        name: "A new Ice Age: How you can become a subzero cool peep and lead an exclusive lifestyle",
        nameVN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?",
        img: "/assets/Blog-post/blog1.png",
        link: "./article.html",

    },
    {
        name: "Why should boys have all the fun? it's the women who are making india an alcohol-loving contry",
        nameVN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?",
        img: "/assets/Blog-post/blog2.png",
        'link': "https://www.youtube.com/embed/7HEmMDWHikM",

    },
    {
        name: "New data recording system to better analyse road accidents",
        nameVN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?",
        img: "/assets/Blog-post/blog3.png",
        link: "https://www.youtube.com/embed/BoohRoVA9WQ",

    },
    {
        name: "New data recording system to better analyse road accidents",
        nameVN: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptas deserunt beatae adipisci iusto totam placeat corrupti ipsum, tempora magnam incidunt aperiam tenetur a nobis, voluptate, numquam architecto fugit. Eligendi quidem ipsam ducimus minus magni illum similique veniam tempore unde?",
        img: "/assets/Blog-post/blog4.png",
        link: "https://r2---sn-i3belnl7.c.drive.google.com/videoplayback?expire=1591288810&ei=quvYXrmaJMTervIP25W88Ac&ip=118.70.33.86&cp=QVNOU0NfV1hPQVhOOjVpbkltbXN5OW9ic09LUmNVVmNyWWhKSG1SUkdDb0Z3eVByZGN2TVF2cnc&id=8ff854269faa75ef&itag=18&source=webdrive&requiressl=yes&mh=RW&mm=32&mn=sn-i3belnl7&ms=su&mv=u&mvi=1&pl=20&ttl=transient&susc=dr&driveid=1HstLGiEzeS0U_ZVELv-WcasxeifnN3au&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=7685.642&lmt=1588782089206595&mt=1591273908&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRgIhAPjFcYIxsL8KZUa_4VFw7uD1HQ76PPErg-2ORe5ok7fbAiEAgMfO0nniCEOlYRvid_x7plN2COwPh-1Dvra_t4PiKGQ=&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRAIgFzxsTGx-1SZDHiaFDeB2MDrjTJudGtyi2DkOIHPHI5cCICY9PQQlxOgJfGq_KoR-NKHYO5P9myX89HL5u1NyE6zd&cpn=Fsf8anSm8y7cU97s&c=WEB_EMBEDDED_PLAYER&cver=20200603",

    }
]

const blog = document.querySelector('.container .site-content .posts')
console.log(blog)

function render() {
    for (const item of bloglist) {
        blog.innerHTML += `
            <div class="post-content" data-aos="zoom-in" data-aos-delay="200">
            <div class="post-image">
                <div>
                    <img src="${item.img}" class="img" alt="blog1">
                </div>
                <div class="post-info flex-row">
                    <span><i class="fas fa-user text-gray"></i>&nbsp;&nbsp;Admin</span>
                    <span><i class="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                </div>
            </div>
            <div class="post-title">
                <a href="${item.link}">${item.name}</a>
                <p>${item.nameVN}
                </p>
                <button class="btn post-btn">Read More &nbsp; <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>`
    }
}
render();