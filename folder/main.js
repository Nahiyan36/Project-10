// {
// "id": 1,
// "title": "Fix navigation menu on mobile devices",
// "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
// "status": "open",
// "labels": [
// "bug",
// "help wanted"
// ],
// "priority": "high",
// "author": "john_doe",
// "assignee": "jane_smith",
// "createdAt": "2024-01-15T10:30:00Z",
// "updatedAt": "2024-01-15T10:30:00Z"
// }


const spin=(nap)=>{
    const spinn=document.getElementById("spinner");
spinn.classList.add('hidden')
    if(nap===true){
        spinn.classList.remove("hidden");
    }
    else{
        spinn.classList.add("hidden")
    }
}

const count=()=>{
    const co=document.getElementById('number');
   const real=document.querySelectorAll(".boddd")
       co.innerText=real.length;
   allButton.addEventListener('click', function(){

       co.innerText=real.length;
   })
    openButton.addEventListener('click', function(){
        co.innerText=document.querySelectorAll('.border-green-600').length
    })
    closeButton.addEventListener('click', function(){
        co.innerText=document.querySelectorAll('.border-purple-600').length
    })

}






const apiShow = () => {
     spin(true); // ✅ Show spinner
    const proxy = 'https://corsproxy.io/?';
    const url = 'https://phi-lab-server.vercel.app/api/v1/lab/issues';
    
    fetch(proxy + url)
        .then((res) => res.json())
        .then((data) => findApi(data.data))
        .catch((err) => {
            console.error("Fetch failed:", err.message);
                spin(false)
        });
}

const findApi=(apidata)=>{

    const container=document.getElementById("apiContainer");
    container.innerHTML=``;
apidata.forEach(element => {
    const newDiv=document.createElement('div');

    if(element.status.includes("open")){
        newDiv.classList.add('boddOpen')
    }
    else{
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

            <div class="flex flex-wrap">
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
count()
}



const tab = () => {
  
    const allTabs = document.querySelectorAll(".tab");

    allTabs.forEach(ele => {
        ele.addEventListener("click", function() {
            allTabs.forEach(t => t.classList.remove('tab-active'));
            ele.classList.add('tab-active');

               spin(true);
            setTimeout(() => {
                spin(false);
            }, 200);
        });
    });

}
tab();



const allButton=document.getElementById('all');
const openButton=document.getElementById('open');
const closeButton=document.getElementById('closed');

const buttonDone=()=>{

allButton.addEventListener('click', function(){
    const allDiv1 = document.querySelectorAll('.boddOpen');
const allDiv2 = document.querySelectorAll('.boddClose');

    allDiv1.forEach(e => e.classList.remove('hidden'));
    allDiv2.forEach(e => e.classList.remove('hidden'));
});

openButton.addEventListener('click', function(){
    const allDiv1 = document.querySelectorAll('.boddOpen');
const allDiv2 = document.querySelectorAll('.boddClose');

    allDiv1.forEach(e => e.classList.remove('hidden'));  
    allDiv2.forEach(e => e.classList.add('hidden'));     
});

closeButton.addEventListener('click', function(){
    const allDiv1 = document.querySelectorAll('.boddOpen');
const allDiv2 = document.querySelectorAll('.boddClose');

    allDiv2.forEach(e => e.classList.remove('hidden')); 
    allDiv1.forEach(e => e.classList.add('hidden'));     
});
spin(false)
}
apiShow();
 buttonDone();


