<template>
    <div class="container">
        <h1>Add Products</h1>
        <form @submit.prevent="addProduct">
            
            <div class="form-group">
                <label for="name">Product Name: <sup>*</sup></label>
                <input type="text" v-model="product.name" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="price">Product Price: <sup>*</sup></label>
                <input type="number" v-model="product.price" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="quantity">Product Quantity: <sup>*</sup></label>
                <input type="number" v-model="product.quantity" class="form-control" required>
            </div>
            
            <div class="form-group">
                <label for="description">Product Description: <sup>*</sup></label>
                <textarea style="resize:none;" v-model="product.description" class="form-control" required></textarea>
            </div>
            
            <div class="form-group">
                <label for="category">Product Category: <sup>*</sup></label>
                <select class="form-control" v-model="product.category_id">
                    <option value="">Choose a category</option>
                    <option v-for="category in categories" :value="category.id">{{category.name}}</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="image">Product Image: <sup>*</sup></label>
                <br>
                <input type="file" @change="onFileChange" accept="image/png, image/jpeg" class="form-control">
              
            </div>
            <div>
                <input type="submit" value="Submit" class="btn btn-primary">    
            </div>      
        </form>   
    </div>
</template>
<script>
export default {
    computed:{
        categories(){
            return this.$store.getters.getCategories;
        }
    },
    data(){
        return{
            product:{
                user_id: this.$store.getters.userData.id,
                name: '',
                price: 0,
                quantity: 0,
                description: '',
                category_id: '',
                image: ''
            }
        }
    },
    methods:{
        onFileChange(event){
            this.product.image = event.target.files[0].name;
            // console.log(URL.createObjectURL(event.target.files[0]));
            // console.log(event.target.files[0]);
            // console.log(event.target.value);
            // const a = document.createElement('a');
            // a.setAttribute('download', event.target.files[0].name);
            // a.setAttribute('href', URL.createObjectURL(event.target.files[0]));
            // a.click();
            
        },
        addProduct(){
            this.$store.dispatch('createProduct', this.product);
            this.$router.push('/');
        }
    }
}
</script>