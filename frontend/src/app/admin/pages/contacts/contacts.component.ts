import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

  searchText='';

leads:any[]=[

{
name:'Rahul Sharma',
email:'rahul@gmail.com',
phone:'9876543210',
message:'Need villa construction',
date:'12 Feb 2026',
status:'new'
},

{
name:'Priya Patel',
email:'priya@gmail.com',
phone:'9876543200',
message:'Interior design quotation',
date:'10 Feb 2026',
status:'contacted'
}

];

filteredLeads(){

return this.leads.filter(l =>

l.name.toLowerCase().includes(this.searchText.toLowerCase()) ||

l.email.toLowerCase().includes(this.searchText.toLowerCase()) ||

l.phone.includes(this.searchText)

);

}

markContacted(index:number){

this.leads[index].status='contacted';

}

deleteLead(index:number){

if(confirm("Delete lead?")){

this.leads.splice(index,1);

}

}
}
