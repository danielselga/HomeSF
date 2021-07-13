<template>
    
    <b-container>
        <b-row>
          <h1>Artigos sobre operação de vendas</h1>
            <b-col v-for="(info) in infos" :key="info" style="padding: 1rem;">
                <img style="margin: auto; border-radius: 5px" :src="info.imageUrl" alt="">
                    <h1>{{info.titulo}}</h1>
                    <p>{{info.p}}</p>
            </b-col>     
        </b-row>
    </b-container>

</template>

<script>
export default {
    data() {
        return {
            infos: [{imageUrl:'https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', titulo: "Titulo Blog", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus officiis incidunt. Ipsum eius, explicabo natus delectus, atque totam aperiam voluptatibus, quae dolorem nam est mollitia aliquam vel tempora optio!"}, {imageUrl:'https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', titulo: "Titulo Blog", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus officiis incidunt. Ipsum eius, explicabo natus delectus, atque totam aperiam voluptatibus, quae dolorem nam est mollitia aliquam vel tempora optio!"},{imageUrl:'https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdvcmtpbmd8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80', titulo: "Titulo Blog", p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur delectus officiis incidunt. Ipsum eius, explicabo natus delectus, atque totam aperiam voluptatibus, quae dolorem nam est mollitia aliquam vel tempora optio!"},]
        }
    }
}
</script>

<style scoped>
    img {
        width: 20rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
        
    }

    h1{
        color: white;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }

    .row {
        margin-top: 1rem;
    }

    
</style>

