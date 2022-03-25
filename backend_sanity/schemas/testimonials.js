export default{
    name:'testimonials',
    title:'testimonials',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
        },
        {
            name:'company',
            title:'Company',
            type:'string',
        },
        {
            name:'imageUrl',
            title:'ImgeUrl',
            type:'image',
            options:{
                hotspot: true, //significa que el usuario sera capaz de recortar la imagen
            }
        },
        {
            name:'feedback',
            title:'Feedback',
            type:'string',
        },
    ]

}