







const serc=document.getElementById('see')
const newIss=document.getElementById('newIssue')






newIss.addEventListener("click",function(){
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${serc.value}`)
.then(jss=>jss.json())
.then(dat=>com(dat.data))
   

    const com=(da)=>{
        
          const co=document.getElementById('number');
          co.innerText=da.length;
   allButton.addEventListener('click', function(){

       co.innerText=da.length;
   })
    openButton.addEventListener('click', function(){
        co.innerText=document.querySelectorAll('.border-green-600').length
    })
    closeButton.addEventListener('click', function(){
        co.innerText=document.querySelectorAll('.border-purple-600').length
    })
         const container=document.getElementById("apiContainer");
    container.innerHTML=``;
    da.forEach(element => {
    const newDiv=document.createElement('div');
if (element.status.includes("open")) {
    newDiv.classList.add('boddOpen')
} else {
    newDiv.classList.add('boddClose')
}
newDiv.innerHTML=`
<div class="shadow-2xl p-10 rounded-2xl h-full flex flex-col border-t-8 boddd " onclick="lastdone(${element.id})">

            <div class="flex justify-between ">
            ${element.status.includes('open') ? '<img src="./assets/Open-Status.png" class="p-1 w-10 bg-[#CBFADB]">' : '<img src="./assets/Closed- Status .png" class="p-1 w-10 ">'}
             ${element.priority.includes('high')  ? ' <p class="bg-[#FEECEC] p-2 rounded-md text-error">High</p>' : ''}
             ${element.priority.includes('medium')  ? ' <p class="bg-[#FFF6D1] p-2 rounded-md text-warning">Medium</p>' : ''}
             ${element.priority.includes('low')  ? ' <p class="bg-[#EEEFF2] p-2 rounded-md text-default">Low</p>' : ''}
            </div>

            <div>
                <p class="text-2xl font-bold">${element.title}</p>
                <p class="text-gray-500">${element.description}</p>
            </div>

            <div class="mt-auto">
                <div class="flex gap-2 mt-2 max-w-[200px] flex-wrap">
                    ${element.labels.includes('bug') ? '<p class="p-3 bg-[#FEECEC] text-error rounded-md">Bug</p>' : ''}
                    ${element.labels.includes('help wanted') ? '<p class="p-3 bg-[#FFF8DB] text-warning rounded-md">Help Wanted</p>' : ''}
                    ${element.labels.includes("good first issue") ? '<p class="p-3 bg-[#FFF8DB] text-warning rounded-md h-full">Good First Issue</p>' : ''}
                    ${element.labels.includes("enhancement") ? '<p class="p-3 bg-[#D1FAE5] text-green-700 rounded-md h-full">Enhancement</p>' : ''}
                    ${element.labels.includes("documentation") ? '<p class="p-3 bg-[yellow] text-purple-700 rounded-md h-full">Documentation</p>' : ''}
                </div>
                <br>
                <hr>
                <div>
                    <p class="text-gray-500">#1 by ${element.author}</p>
                    <p class="text-gray-500">${new Date(element.createdAt).toLocaleDateString('en-US')}</p>
                </div>
            </div>

        </div>`

const card = newDiv.querySelector('.boddd');
    if (element.status.includes('open')) {
        card.classList.add('border-green-600');
    } else {
        card.classList.add('border-purple-600');
    }

    container.appendChild(newDiv);

    


})
}})


 buttonDone();




