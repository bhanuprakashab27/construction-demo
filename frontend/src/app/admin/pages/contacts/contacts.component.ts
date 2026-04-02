import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-contacts',
  imports: [CommonModule, FormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent implements OnInit {

  searchText='';
  leads:any[]=[];

// leads:any[]=[

// {
// name:'Rahul Sharma',
// email:'rahul@gmail.com',
// phone:'9876543210',
// message:'Need villa construction',
// date:'12 Feb 2026',
// status:'new'
// },

// {
// name:'Priya Patel',
// email:'priya@gmail.com',
// phone:'9876543200',
// message:'Interior design quotation',
// date:'10 Feb 2026',
// status:'contacted'
// }

// ];

constructor(private dataService:DataService){

}
  ngOnInit() {

    this.getAllLeads();
  }

  getAllLeads(){
    this.dataService.getAllContactLead().subscribe(data =>{
      this.leads = data;
    })
  }

filteredLeads(){

return this.leads.filter(l =>

l.name.toLowerCase().includes(this.searchText.toLowerCase()) ||

l.email.toLowerCase().includes(this.searchText.toLowerCase()) ||

l.phone.includes(this.searchText)

);

}

markContacted(lead: any, index: number) {

  // optimistic UI update
  const oldStatus = lead.status;
  lead.status = 'contacted';

  this.dataService.updateLeadStatus(lead.id, 'contacted').subscribe({
    next: () => {
      console.log('Updated successfully');
    },
    error: (err) => {
      console.error('Update failed', err);

      // rollback if API fails
      lead.status = oldStatus;
      alert('Failed to update status');
    }
  });

}

deleteLead(id:any){

if(confirm("Delete lead?")){

this.dataService.deleteContactLead(id).subscribe({
  next: () => {
    this.getAllLeads();
  },
  error: err => console.error(err)
})

}

}
}
