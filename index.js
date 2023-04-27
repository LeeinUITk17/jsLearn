//console.log("hello world");
//fillter lọc dữ liệu
const users=[
    {
        id:22521276,
        email:'mrtaivietbac@gmail.com',
        first_name:"Tai",
        last_name:"Lee",
        avatar:'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325474941_537028828380153_5136577827081988493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WLV-hzOIIWsAX_BHVDJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVLI2HhKrIzKO4SMqolgmHFj0XyxsxsWWf3JL2qXqFHQ&oe=644FF271',
    },
    {
        id:22521277,
        email:'22521276@gm.uit.edu.vn',
        first_name:"Tuan",
        last_name:"Lee",
        avatar:'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325474941_537028828380153_5136577827081988493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WLV-hzOIIWsAX_BHVDJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVLI2HhKrIzKO4SMqolgmHFj0XyxsxsWWf3JL2qXqFHQ&oe=644FF271',
    },
    {
        id:22521278,
        email:'lethanhtuan.thptgianghia@gmail.com',
        first_name:"Tu",
        last_name:"Lee",
        avatar:'https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/325474941_537028828380153_5136577827081988493_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=WLV-hzOIIWsAX_BHVDJ&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfBVLI2HhKrIzKO4SMqolgmHFj0XyxsxsWWf3JL2qXqFHQ&oe=644FF271',
    }
]
users.filter(
    (users)=>{
        console.log(users.email);
    }
)
const fillterUser=users.filter(
    (users)=>{
        return users.first_name=='Tai'||users.first_name=='Tu';
    }
)
console.log({fillterUser});
const findUser=users.find(
    (users)=>{
        return users.first_name=="Tai"||users.first_name=="Tu";
    }
)
console.log({findUser});
const customUsers=users.map(
    (users)=>{
        return users.email;
    }
)
console.log((customUsers));
const changeUsers=users.map(
    (users)=>{
        return {
            ...users,
            last_name:`${users.last_name} Thanh`
        }
    }
)
console.log({changeUsers});