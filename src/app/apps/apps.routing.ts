import { UsersEditComponent } from './users/users-edit/users-edit.component';
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersAddComponent } from './users/users-add/users-add.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { Routes } from '@angular/router';

import { FullcalendarComponent } from './fullcalendar/fullcalendar.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { TicketlistComponent } from './ticketlist/ticketlist.component';
import { TicketdetailsComponent } from './ticketdetails/ticketdetails.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './employee/employee.component';
import { NotesComponent } from './notes/notes.component';
import { CoursesComponent } from './courses/courses.component';
import { ListingComponent } from './mailbox/listing/listing.component';
import { DetailComponent } from './mailbox/detail/detail.component';
import { MailboxComponent } from './mailbox/mailbox.component';



import { InvoiceListComponent } from './invoice/invoice-list/invoice-list.component';
import { InvoiceViewComponent } from './invoice/invoice-view/invoice-view.component';
import { AddInvoiceComponent } from './invoice/add-invoice/add-invoice.component';
import { EditInvoiceComponent } from './invoice/edit-invoice/edit-invoice.component';
import { TodoComponent } from './todo/todo.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { SingleEmployeeComponent } from './employee/single-employee/single-employee.component';


export const AppsRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'employeelist',
                component: EmployeeComponent,
                data: {
                    title: 'Employee List',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Employee List' }
                    ]
                }
            },
            {
                path: 'taskboard',
                component: TaskboardComponent,
                data: {
                    title: 'Taskboard',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Taskboard' }
                    ]
                }
            },
            {
                path: 'singleemploy',
                component: SingleEmployeeComponent,
                data: {
                    title: 'Single',
                    urls: [
                        { title: 'Dashboard', url: '/dashboard' },
                        { title: 'Single' }
                    ]
                }
            },
            {
              path: 'user_list',
              component: UsersListComponent,
              data: {
                  title: 'User',
                  urls: [
                      { title: 'Dashboard', url: '/dashboard' },
                      { title: 'USer' }
                  ]
              }
          },
          {
              path: 'add_user',
              component: UsersAddComponent,
              data: {
                  title: 'Add User',
                  urls: [
                      { title: 'Dashboard', url: '/dashboard' },
                      { title: '' }
                  ]
              }
          },
          {
              path: 'user_view/:id',
              component: UsersViewComponent,
              data: {
                  title: 'View User',
                  urls: [
                      { title: 'Dashboard', url: '/dashboard' },
                      { title: 'View User' }
                  ]
              }
          },
          {
              path: 'user_edit/:id',
              component: UsersEditComponent,
              data: {
                  title: '',
                  urls: [

                  ]
              }
          },
            // {
            //     path: 'calendar',
            //     component: FullcalendarComponent,
            //     data: {
            //         title: 'Calendar',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Calendar' }
            //         ]
            //     }
            // },
            // { path: 'mailbox', redirectTo: 'mailbox/inbox', pathMatch: 'full' },

            // {
            //     path: 'mailbox/:type',
            //     component: MailboxComponent,
            //     children: [
            //         {
            //             path: ':id', component: DetailComponent,
            //             data: {
            //                 title: 'New Email',
            //                 urls: [
            //                     { title: 'Dashboard', url: '/dashboard' },
            //                     { title: 'Email' }
            //                 ]
            //             }
            //         },

            //     ],
            //     data: {
            //         title: 'New Email',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Email' }
            //         ]
            //     }
            // },
            // {
            //     path: 'messages',
            //     component: MailComponent,
            //     data: {
            //         title: 'Email',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Email' }
            //         ]
            //     }
            // },
            // {
            //     path: 'chat',
            //     component: ChatComponent,
            //     data: {
            //         title: 'Chat',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Chat' }
            //         ]
            //     }
            // },
            // {
            //     path: 'notes',
            //     component: NotesComponent,
            //     data: {
            //         title: 'Notes',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Notes' }
            //         ]
            //     }
            // },
            // {
            //     path: 'ticketlist',
            //     component: TicketlistComponent,
            //     data: {
            //         title: 'Ticket List',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Ticket List' }
            //         ]
            //     }
            // },
            // {
            //     path: 'ticketdetails',
            //     component: TicketdetailsComponent,
            //     data: {
            //         title: 'Ticket Details',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Ticket Details' }
            //         ]
            //     }
            // },
            // {
            //     path: 'contact',
            //     component: ContactComponent,
            //     data: {
            //         title: 'Contact',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Contact' }
            //         ]
            //     }
            // },
            // {
            //     path: 'courses',
            //     component: CoursesComponent,
            //     data: {
            //         title: 'Courses',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Courses' }
            //         ]
            //     }
            // },
            // {
            //     path: 'courses/coursesdetail/:id',
            //     component: CourseDetailComponent,
            //     data: {
            //         title: 'Courses Detail',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'Courses' }
            //         ]
            //     }
            // },
            // {
            //     path: 'viewInvoice/:id',
            //     component: InvoiceViewComponent,
            //     data: {
            //         title: 'View Invoice',
            //         urls: [
            //             { title: 'Dashboard', url: '/dashboard' },
            //             { title: 'View Invoice' }
            //         ]
            //     }
            // },
            // {
            //     path: 'editinvoice/:id',
            //     component: EditInvoiceComponent,
            //     data: {
            //         title: '',
            //         urls: [

            //         ]
            //     }
            // },
            // {
            //     path: 'todo',
            //     component: TodoComponent,
            //     data: {
            //         title: 'Todo',
            //         urls: [

            //         ]
            //     }
            // }
        ]
    }
];
