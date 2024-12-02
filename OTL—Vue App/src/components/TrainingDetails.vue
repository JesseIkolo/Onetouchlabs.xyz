<template>
    <TopBar />

    <div class="idRecieved show">
        <div class="loader"></div>
    </div>

    <div class="section cards-section full hide" data-loaded=0>

        <div class="cards">
            <div class="card-column card-row-3 card-column-9">
                <div class="card text-left justify-between card-large card-no-hover training_cover">

                    <!-- Backgrounds  -->

                    <img class="bkg_backward" :src="`http://localhost:1337` + detail_cover[2]" alt="" />

                    <img class="bkg_forward" :src="`http://localhost:1337` + detail_cover[1]" alt="" />

                    <!-- End Backgrounds  -->

                    <img class="training-page-cover" :src="`http://localhost:1337` + detail_cover[0]" alt="" />


                    <div class="card-header">
                        <div class="label">Formation en {{ detail.sub_domain }}</div>
                    </div>

                    <div class="card-intro-text">
                        <h2 class="card-heading-text">
                            <span class="colored">{{ detail.title }}</span>
                        </h2>
                        <p class="card-para">
                            {{ detail.description }}
                        </p>
                    </div>
                </div>
            </div>
            <!-- This is special to show the cover image outside of de card -->


            <div class="card-column card-row-1 card-column-9">
                <div class="card text-left card-medium card-no-hover card-additional-info">
                    <div class="header-additional-info ">
                        <span class="additional-info label">Duree de <br>la formation</span>
                        <span class="additional-value colored">{{ detail.training_duration }}<span> Mois</span></span>
                    </div>
                    <div class="header-additional-info ">
                        <span class="additional-info label">Date de début de la<br> prochaine session</span>
                        <span class="additional-value colored">{{ formatDate(detail.next_date) }}<span></span></span>
                    </div>
                    <div class="header-additional-info">
                        <span class="additional-info label">Nombre places <br>restantes</span>
                        <span class="additional-value colored">{{ detail.cadidate_amount }}<span></span></span>
                    </div>

                    <div class="header-additional-info">
                        <span class="additional-info label">Frais <br>d'inscription</span>
                        <span class="additional-value colored">{{ detail.installation_fee }}<span> FCFA</span></span>
                    </div>

                    <div class="header-additional-info">
                        <span class="additional-info label">Coût de la <br>formation</span>
                        <span class="additional-value colored">{{ detail.trainning_fee }}<span> FCFA</span></span>
                    </div>
                </div>

            </div>
        </div>

        <div class="cards auto-height" id="#text_bloc">

            <div class="card-column card-row-full card-column-6" v-for="text_bloc in text_blocs" :key="text_bloc.id">
                <div class="card text-left card-full justify-start card-no-hover card-text-bloc no-border">

                    <h2 class="card-heading-text">
                        {{ text_bloc.heading_title }}
                    </h2>
                    <p class="card-para">
                        {{ text_bloc.text_paragraph }}
                    </p>
                    <div class="para-bloc card-para" :id='`para-` + para.id' :data-blocid='`para-` + para.id'
                        v-for="para in text_bloc.para_bloc" :key="para.id">
                        <div class="card-text-bloc-header">

                            <h3 class="card-text-bloc-header-heading-text">
                                <span class="mono number">0{{ para.id }}</span>{{ para.heading_title }}
                            </h3>
                            <div class="icon x2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                        stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                    <path d="M8.47 10.74L12 14.26L15.53 10.74" stroke="white" stroke-width="1.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                        {{ appendPara(para.para_text, para.id) }}

                    </div>
                    <!-- <img :src=`` alt="" srcset=""> -->
                </div>
            </div>

            <div class="card-column card-row-6 card-column-3">
                CTA
            </div>

        </div>

        <div class="cards full">
            <div class="card-column card-row-4 card-column-4">
                <div class="card text-center card-standard">
                    <h4 class="card-heading-text">
                        Nos anciens apprenants et leur portfolio
                    </h4>
                    <div class="alumni-header"></div>
                    <div class="alumni-cards">

                        <div class="alumni-card">
                            <div class="cover"></div>
                            <div class="alumni">
                                <div class="alumni-user-profile"></div>
                                <div class="alumni-user-info">
                                    <div class="alumni-name">Jesse B. Ikolo</div>
                                    <div class="alumni-job">Decembre 2023, <span>Douala</span></div>
                                </div>
                            </div>
                        </div>
                        <div class="alumni-card">
                            <div class="cover"></div>
                            <div class="alumni">
                                <div class="alumni-user-profile"></div>
                                <div class="alumni-user-info">
                                    <div class="alumni-name">Jesse B. Ikolo</div>
                                    <div class="alumni-job">Decembre 2023, <span>Douala</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-column card-row-4 card-column-5">
                <div class="card text-center card-standard">
                    <div class="card-header">
                        <div class="label">Quelques temoignages</div>
                        <div class="label">1 <div class="dot"></div> 3</div>

                    </div>
                    <div class="testi-cards">
                        <div class="testi-card">
                            <div class="testi-header">
                                <div class="testi-user-profile"></div>
                                <div class="testi-user-info">
                                    <div class="testi-name">Jesse B. Ikolo</div>
                                    <div class="testi-job">Product Designer, <span>OneTouch Labs</span></div>
                                </div>
                            </div>
                            <div class="testi-text-content">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor debitis magni quidem
                                    voluptas eius eveniet. Voluptatem quos incidunt hic ipsa culpa, a dicta debitis
                                    magni quasi, in quidem nihil alias similique distinctio, dolore voluptatum eaque.
                                    Debitis doloremque eaque exercitationem, provident recusandae iste rem fuga omnis!
                                    Velit sit laudantium, architecto natus eos quo magnam praesentium assumenda labore
                                    animi a? Itaque doloremque perspiciatis eveniet.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="users">
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                        <div class="testi-user-profile-picture" data-user-id=""></div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    <div class="bottom-bar">
        <div class="toTopButton bottom-bar-icon 2x icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.07 9.57L12 3.5L5.92999 9.57" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 20.4999V3.66992" stroke="white" stroke-width="1.5" stroke-miterlimit="10"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <div class="bottom-links">
            <div class="special">
                <span class="text-opaced">Autres</span>
                <span class="colored">formations</span>
                <span class="icon x1 icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08 8.94995"
                            stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </span>
            </div>
            <div class="links">
                <div class="link">S'inscrire</div>
                <div class="link">Rejoindre la communauté</div>
            </div>

            <div class="bottom-cta">S'inscrire</div>

        </div>
        <div class="support bottom-bar-icon 2x icon">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M17.0156 18.4302H13.0156L8.56561 21.3902C7.90561 21.8302 7.01562 21.3602 7.01562 20.5602V18.4302C4.01562 18.4302 2.01562 16.4302 2.01562 13.4302V7.43018C2.01562 4.43018 4.01562 2.43018 7.01562 2.43018H17.0156C20.0156 2.43018 22.0156 4.43018 22.0156 7.43018V13.4302C22.0156 16.4302 20.0156 18.4302 17.0156 18.4302Z"
                    stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                <path
                    d="M12.0156 11.3599V11.1499C12.0156 10.4699 12.4357 10.1099 12.8557 9.81989C13.2657 9.53989 13.6756 9.1799 13.6756 8.5199C13.6756 7.5999 12.9356 6.85986 12.0156 6.85986C11.0956 6.85986 10.3557 7.5999 10.3557 8.5199"
                    stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.0111 13.75H12.0201" stroke="white" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </div>
    </div>
    {{ console.log(this.detail) }}
</template>

<script>
import TopBar from './micro-elements/TopBar.vue'
import axios from 'axios';
const api = `http://localhost:1337/api/trainings/`



export default {
    components: {
        TopBar
    },
    props: ['parametre'],
    data() {
        return {
            detail: {},
            detail_cover: [],
            text_blocs: [],
            paras: [],
            error: null,
            paraEl: '#app',
            mounted: false
        }
    },
    async mounted() {
        var pageId = getIdFromUrl();
        const response = await axios.get(api + pageId + "?populate[training_cover]=true&populate[content_bloc][populate][para_bloc][populate][bloc_illustration]=true");
        try {

            this.detail = response.data.data.attributes;

            //Attention jonglage
            this.detail_cover = [response.data.data.attributes.training_cover.data[0].attributes.url, response.data.data.attributes.training_cover.data[1].attributes.url, response.data.data.attributes.training_cover.data[2].attributes.url]
            this.text_blocs = response.data.data.attributes.content_bloc;
            this.para = response.data.data.attributes.content_bloc;
            console.log("--------->", this.text_blocs);

        } catch (error) {
            this.error = error;
        }
        hideLoader();
        this.$mounted = true;

    },
    methods: {
        formatDate(newDate) {

            const str = '' + newDate
            // convert newDate to a french format 
            const date = str.split('-');
            const month = parseInt(date[1], 10) - 1;

            //Get the french month
            const months = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre']
            // const date = new Date();
            // console.log(newDate, month, months[month])

            return '' + date[2] + ' ' + months[month] + ' ' + date[0]
        },
        selectElement() {
            console.log("OKayay")
        },
        appendPara(data, id) {
            if (this.$mounted) {
                // var app = document.querySelector("#app");


                setTimeout(() => {
                    // var paraContent = app.querySelectorAll('#para-' + id);
                     var paraContent = document.getElementById('para-' + id);
                     console.log(paraContent);

                    if (data.includes('(array)')) {
                        const newList = document.createElement("ul");
                        newList.classList.add('para-list');


                        // Removing array label in the text
                        data = data.replace('(array)', '');
                        data = data.split(';');

                        // Creating list Items
                        data.forEach(el => {
                            const newListItem = document.createElement("li");
                            const newContent = document.createTextNode(el);

                            newListItem.classList.add('para')

                            newListItem.appendChild(newContent);

                            //Adding list item to the list elment
                            newList.appendChild(newListItem)
                            
                        });

                        paraContent.appendChild(newList)

                    }else{
                        var newPara = document.createElement("p");
                        newPara.classList.add('para-text');
                        newPara.appendChild(document.createTextNode(data));

                        paraContent.appendChild(newPara)

                    }





                    // console.log(this.mounted)
                // if (data.includes('(array)')) {
                //     // console.log(true);

                //     data = data.replace('(array)', '');
                //     const newdata = data.split(';')
                //     rended += "<ul>"
                //     newdata.forEach(element => {
                //         rended += "<li>" + element + "/<li>"
                //     });

                //     rended += "</ul>"

                // } else {
                //     rended = data
                // }

                // paraContent.innerText += rended
                // paraContent.appendChild(newList);

                }, 200);

                

            }
        }
    }

}

function getIdFromUrl() {
    var id = window.location.pathname.split('/')[2];
    // console.log(id);
    return id;
    // do something with the value in variable named `id`
}

function hideLoader() {
    // <div class="idRecieved"> <div class="loader"></div> <span class="value">{{ $route.params.id }}</span></div>
    var loader = document.querySelector(".idRecieved"),
        section = document.querySelector(".section");

    loader.classList.remove("show");
    section.classList.remove("hide");
    // console.log(this.mounted)
}
</script>

<style></style>
