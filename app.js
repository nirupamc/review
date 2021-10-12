const reviews=[
    {
        id:1,
        name:"Itachi Uchiha",
        job:"Anbu Captain",
        img:"https://res.cloudinary.com/dwkyc7esz/image/upload/v1624636498/it_z9upsd.jpg",
        text:"Itachi Uchiha is the elder brother of Sasuke and the man responsible for the elimination of the Uchiha Clan six years prior to the main plot. When first introduced, he is a S-ranked rogue ninja and a member of the terrorist organization Akatsuki, which becomes the primary antagonist in Part II. Itachi is one of the more mysterious characters, making few appearances in the series and having a limited information about his background. For the majority of the series, Itachi is treated as a villain, having been responsible for the Uchiha massacre and being a member of Akatsuki. However, shortly after his death later in the series, his role as the villain is downplayed when his true background is revealed.Itachi is a generally calm, soft-spoken person who tends to keep his thoughts and emotions to himself. It is because of this that he carries a mysterious atmosphere about him everywhere he goes; even those who are closest to him, such as his partner Kisame Hoshigaki, have no knowledge of his true motives. "

    },
    {
        id: 2,
        name:"Madara Uchiha",
        job: "Co-founder of the leaf village",
        img: "https://res.cloudinary.com/dwkyc7esz/image/upload/v1624636725/madara-uchiha-29_crjrrp.jpg",
        text: "Madara Uchiha (うちはマダラ, Uchiha Madara) was the legendary leader of the Uchiha clan. He founded Konohagakure alongside his childhood friend and rival, Hashirama Senju, with the intention of beginning an era of peace. When the two couldn't agree on how to achieve that peace, they fought for control of the village, a conflict which ended in Madara's death. Madara, however, rewrote his death and went into hiding to work on his own plans. Unable to complete it in his natural life, he entrusted his knowledge and plans to Obito Uchiha shortly before his actual death. Years later, Madara would be revived, only to see his plans foiled and ultimately, and finally, realising the error of his ways and making amends with Hashirama before his final death.Madara Uchiha was born around a century before the start of the story. In these times, ninja were organized as clans of mercenaries hired by the lords of warring nations. The most powerful clans in existence were the Uchiha and the Senju, both descendants of Hagoromo Ōtsutsuki: the legendary Sage of the Six Paths"
    },
    {
        id: 3,
        name:"Shisui Uchiha",
        job:"Anbu",
        img:"https://res.cloudinary.com/dwkyc7esz/image/upload/v1624636915/shi_uwt9dn.jpg",
        text:'Uchiha Shisui is a member of the Uchiha clan and one of the few who managed to get the Mangekyo Sharingan. He was an extremely competent shinobi, and very few could handle his speed. He was called “Shisui of the Body Flicker”, owing to his great mastery of the body flicker technique and was one of the best at fire element techniques. His taijutsu and kenjutsu ninja skills were top class and he could easily classify as hokage material.He was also the role model of Itachi and played a very important role indirectly in the Fourth Shinobi World War (although dead) with his special genjutsu technique: “Kotoamatsukami”. He loved Konoha more than anything and (spoiler) died to protect it.In the anime, Team Shisui was assigned a long mission, which they were tasked with chasing away Kirigakure forces being lead by Ao. The team completed their mission after Ao realised they were facing Shisui and had his team retreat.When Itachi began to act oddly, Shisui was instructed by the Konoha Military Police Force to monitor Itachi because the younger Uchihas position in Anbu was instrumental to the Uchihas future status in Konoha.'
    },
    {
        id:4,
        name:"Sasuke Uchiha",
        job:"right hand of Naruto",
        img:"https://res.cloudinary.com/dwkyc7esz/image/upload/v1624637162/kkk_rsoino.jpg",
        text:"Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) is one of the last surviving members of Konohagakure's Uchiha clan. After his older brother, Itachi, slaughtered their clan, Sasuke made it his mission in life to avenge them by killing Itachi. He is added to Team 7 upon becoming a ninja and, through competition with his rival and best friend, Naruto Uzumaki, Sasuke starts developing his skills. Dissatisfied with his progress, he defects from Konoha so that he can acquire the strength needed to exact his revenge. His years of seeking vengeance and his actions that followed become increasingly demanding, irrational and isolates him from others, leading him to be branded as an international criminal.After learning the truth of his brother's sacrifice, later proving instrumental in ending the Fourth Shinobi World War, and being happily redeemed by Naruto, Sasuke decides to return to Konoha and dedicate his life to help protect the village and its inhabitants,becoming referred to as the 'Supporting Kage'"
    },
    {
        id:5,
        name:"Obito Uchiha",
        job:"rogue ninja",
        img:"https://res.cloudinary.com/dwkyc7esz/image/upload/v1624637230/obito_gl7lu6.jpg",
        text:"Obito Uchiha (うちはオビト, Uchiha Obito) was a member of Konohagakure's Uchiha clan. He was believed to have died during the Third Shinobi World War, his only surviving legacy being the Sharingan he gave to his teammate, Kakashi Hatake. In truth, Obito was saved from death and trained by Madara Uchiha, but the events of the war left Obito disillusioned with reality, and he inherited Madara's plan to create an ideal world. Resurfacing under the names of Tobi (トビ, Tobi) and Madara Uchiha himself, Obito subtly took control of the Akatsuki, using them as a means to advance his machinations, eventually going public and starting the Fourth Shinobi World War. However, towards the war's conclusion, Obito had a change of heart and, as atonement, sacrificed his life to save the same world he sought to replace.Using the aliases of Tobi (トビ, Tobi) and Madara Uchiha, Obito manipulated the Akatsuki from the shadows to further his plans, eventually going public with them and in the process starting the Fourth Shinobi World War. He nonetheless killed Konan to transplant the Rinnegan from Nagato's corpse into his missing left eye. "
    },

]

//select item
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

//selecting button

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem);
    })

//show person

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent=item.text;

}

//show next person
nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem=0;
    }
    showPerson(currentItem);
})

//show prev person
prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson();
})


