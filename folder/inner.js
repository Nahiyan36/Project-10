
const lastdone = (nahiyan) => {
fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${nahiyan}`)
.then(ll=>ll.json())
.then(lll=>dd(lll.data))
} 
const dd=(pp)=>{
const jj=document.getElementById("modalContainer");
jj.innerHTML=` <div class="flex items-center gap-3">
            <p class="p-2 bg-green-500 rounded-xl w-[80px] text-white">Opened</p>
            <p>Opened by  ${pp.assignee}</p>
            <p>${new Date(pp.createdAt).toLocaleDateString('en-US')}</p>

        </div>
        <div class="flex gap-2 mt-2 max-w-[200px] flex-wrap">
                    ${pp.labels.includes('bug') ? '<p class="p-3 bg-[#FEECEC] text-error rounded-md">Bug</p>' : ''}
                    ${pp.labels.includes('help wanted') ? '<p class="p-3 bg-[#FFF8DB] text-warning rounded-md">Help Wanted</p>' : ''}
                    ${pp.labels.includes("good first issue") ? '<p class="p-3 bg-[#FFF8DB] text-warning rounded-md h-full">Good First Issue</p>' : ''}
                    ${pp.labels.includes("enhancement") ? '<p class="p-3 bg-[#D1FAE5] text-green-700 rounded-md h-full">Enhancement</p>' : ''}
                    ${pp.labels.includes("documentation") ? '<p class="p-3 bg-[yellow] text-purple-700 rounded-md h-full">Documentation</p>' : ''}
                </div><br>
           
                <p class="text-gray-500">${pp.description}</p>
                <div class="flex gap-20 bg-slate-400 p-7 rounded-3xl my-9">
                <p class="font-bold">Assignee:<br>
                ${pp.assignee}
                <p class="font-bold">Priority:
              ${pp.priority.includes('high')  ? ' <p class="bg-[#FEECEC] p-2 rounded-md text-error">High</p>' : ''}
             ${pp.priority.includes('medium')  ? ' <p class="bg-[#FFF6D1] p-2 rounded-md text-warning">Medium</p>' : ''}
             ${pp.priority.includes('low')  ? ' <p class="bg-[#EEEFF2] p-2 rounded-md text-default">Low</p>' : ''}
            
                </p>
                </div>
                 <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
                `
document.getElementById('my_modal_5').showModal()


}
