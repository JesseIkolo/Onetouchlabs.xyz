<template>
    <div class="mediaquery-inspector">
        <div class="device laptop">Made with ❤️ for you Laptop by OneTouch Labs </div>
        <div class="device tv">Made with ❤️ for you TV by OneTouch Labs </div>
        <div class="device phone">Made with ❤️ for you Phone by OneTouch Labs </div>
        <div class="device tablet">Made with ❤️ for you Tablette by OneTouch Labs </div>
    </div>
    <div class="top-space"></div>
    <div class="section card-section full padding4x">
        <div class="program-section-header">
            <h3>
                Nos futurs programmes de formation
            </h3>
        </div>
        <div class="cards">
            <div class="card-column card-column-3 card-row-5" v-for="training in trainings" :key="training.id">
               
                <div class="card text-center justify-start card-xlarge">


                    <img class="bkg_backward"
                        :src="`http://localhost:1337` + training.attributes.training_cover.data[2].attributes.url"
                        alt="" />

                    <img class="bkg_forward"
                        :src="`http://localhost:1337` + training.attributes.training_cover.data[1].attributes.url"
                        alt="" />

                    <div class="card-header">
                        <div class="label">{{ training.attributes.sub_domain }} </div>
                        <div class="label">{{ training.attributes.training_type }} sur {{
                            training.attributes.training_duration }} Mois</div>

                    </div>



                    <div class="card-intro-text">
                        <h4 class="card-heading-text">
                            <span class="colored">{{ training.attributes.title }}</span>
                        </h4>
                        <p class="card-para">
                            {{ training.attributes.description }}
                        </p>
                    </div>

                    <img class="cover"
                        :src="`http://localhost:1337` + training.attributes.training_cover.data[0].attributes.url"
                        alt="" />
                        
                    <div class="card-bottom-infos">
                        <!-- <router-link :to="{ name: 'TrainingDetails', 
                            params: { details: JSON.stringify(training.attributes)}}" custom v-slot="{ navigate }">
                            <div class="button bottom-info" @click="navigate" role="link">
                                    Decouvrir le programe
                            </div>
                        </router-link> -->
                        {{ console.log('--->>', training.id) }}
                        <router-link :to="{path : `/trainings/`+ training.id, params: { parametre: parametreParent }}" custom v-slot="{ navigate }">
                            
                            <div class="button bottom-info" @click="navigate" role="link">
                                    Decouvrir le programe
                            </div>
                        </router-link>

                        <!-- <div class="button bottom-info" @click=openModal(training.id) role="link">
                                    Decouvrir le programe
                            </div>

 -->

                        <div class="bottom-mention">
                            <span class="emphase colored">10</span>
                            <span>Places restantes</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="overlay">
        <div class="btn" @click=closeModal()>close</div>
        <div class="section cards-section full">

        </div>
    </div>
</template>
<script>

import axios from 'axios';

// axios.get('http://localhost:1337/api/trainings?populate=*').then(response => {
//     console.log(response.data.data);
// });

export default {
    name: 'TrainingList',
    props: {
        msg: String
    },
    data() {
        return {
            trainings: [],
            error: null,
            parametre: 'exampleParam'
        }
    },
    async mounted() {
        try {
            const response = await axios.get('http://localhost:1337/api/trainings?populate=*')
            this.trainings = response.data.data
        } catch (error) {
            this.error = error;
        }
    },
    methods : {
        openModal(id){
            // Open overlay
            document.querySelector(".overlay").classList.add("show");
            createModal(id)
    },
        closeModal(){
            document.querySelector(".overlay").classList.remove("show");
        }
}
}

function createModal(id) {
    console.log("Affichage des donneé ", id)
    const section = document.querySelector(".overlay .section");


    // create a new card container element
    const container = document.createElement("div"),
        containerClasses = ["cards", "full"];

    container.classList.add(...containerClasses);
    section.appendChild(container);

    // create a new card column
    const cardColumOne = document.createElement("div"),
    cardColumOneClasses = ["card-column", "card-column-3"];
    cardColumOne.classList.add(...cardColumOneClasses);

    // // create a card for the training cover
    // const cardCover = document.createElement("div"),
    // cardColumOneClasses = ["card-column", "card-column-3"];



    container.appendChild(cardColumOne);
    // Add this card to the container

}

// function closeModal(){

// }
</script>

<style scoped lang="css">


</style>