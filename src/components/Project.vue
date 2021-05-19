<template>
    <v-container >
        <v-row >
            <v-col align="center">
                <h2> {{ name }}</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col lg="8" offset-lg="2">
                <ul id="list" class="mx-2">
                    <li><span class="title">Description</span>: <span v-if="mobile == true"><br/></span> {{ description }}</li>
                    <li><span class="title" v-if="plur1 == true">Languages</span><span class="title" v-else>Language</span>: <span v-if="mobile == true"><br/></span>{{ languages }} </li>
                    <li><span class="title" v-if="plur2 == true">Technologies</span><span class="title" v-else>Technology</span>: <span v-if="mobile == true"><br/></span>{{ technologies }}</li>
                </ul>
            </v-col>
        </v-row>

        <v-row>
            <v-col lg="8" offset-lg="2">
                <div v-for="(link, index) in links"
                :key="index">
                    <v-col align="center">
                        <v-btn @click="accessLink(link)" 
                        v-if="linksName !== null"
                        outlined
                        color="primary">{{linksName[index]}}</v-btn>
                        <v-btn 
                        @click="accessLink(link)" 
                        v-else
                        outlined
                        color="primary">Check out the code!</v-btn>
                    </v-col>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>

h2 {
    font-size: 3.5rem;
}

ul {
  list-style-type: none;
}

li {
    text-align: justify;
    padding-bottom: 30px;
    font-size: 1.3rem;
}

li span.title {
    
    font-weight: bold;
    font-size: 1.8rem !important;

}

title {
    font-size: 3rem;
}
</style>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "Project",
    data: function ():any{
        return {
            selectedItem: null,
            mobile: null
        }
    },

    props: {
        name: {
            type: String,
            required: true
        },
        technologies: {
            type: String,
            required: true
        },
        languages: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required:true
        },
        linksName: {
            type: Array,
            required: false,
            default: function ():any { return null}
        },
        plur1 : {
            type: Boolean,
            required:false,
            default: true
        },
        plur2 : {
            type: Boolean,
            required:false,
            default: true
        }
    },

    methods: {
        accessLink: function(link: string):void {
            window.location.href=link;
        },
        checkMobile: function():boolean {
            if(screen.width <= 760) {
                return true;
            }
            else {
                return false;
            }
        }
    },

    created() {
        if (this.checkMobile()) {
            this.mobile = true;
        }
        else {
            this.mobile = false;
        }
    }
});
</script>