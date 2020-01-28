// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const newsTopics = document.querySelector('.topics')

axios
.get(`https://Lambda-times-backend.herokuapp.com/topics`)
.then(response => {
    console.log(response);
    response.data.topics.forEach(item => {
        const topics = tabsComponent(item);
        newsTopics.appendChild(topics);

    });
    
})
.catch(function (error) {
    console.log(error);
});

function tabsComponent(data) {
    let tabTopic = document.createElement('div');


    tabTopic.classList.add('tab');


    tabTopic.textContent = `${data}`;

    console.log(data);
    
    return tabTopic;
}