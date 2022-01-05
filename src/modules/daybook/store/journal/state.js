export default () => ({
    isLoading: true,
    entries: [{
            id: new Date().getTime(), // 1215215132
            date: new Date().toDateString(), // sat 23, january
            text: 'Veniam adipisicing cillum cupidatat consequat Lorem mollit reprehenderit. Cupidatat incididunt reprehenderit est fugiat aute ea minim labore laborum pariatur commodo. Deserunt ipsum magna elit reprehenderit sit labore minim sunt mollit adipisicing.',
            picture: null // https://www.example.com   
        },
        {
            id: new Date().getTime() + 1000, // 1215215132
            date: new Date().toDateString(), // sat 23, january
            text: 'Id ullamco velit in veniam Lorem in dolore velit eu exercitation non laboris. Anim reprehenderit deserunt sunt velit minim velit consectetur aliquip nulla anim sit. Ullamco exercitation magna dolore nulla non mollit amet magna.',
            picture: null // https://www.example.com
        },
        {
            id: new Date().getTime() + 2000, // 1215215132
            date: new Date().toDateString(), // sat 23, january
            text: 'Ut laborum incididunt excepteur veniam culpa. Commodo dolore labore labore officia. Irure enim incididunt labore ipsum esse reprehenderit ullamco et. Excepteur cupidatat sunt cupidatat reprehenderit ullamco irure est magna minim fugiat fugiat est veniam. Minim enim culpa ea ipsum quis duis voluptate sit laboris est do ullamco velit.',
            picture: null // https://www.example.com
        },
    ]
})