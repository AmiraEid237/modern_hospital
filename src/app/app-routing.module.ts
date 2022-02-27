import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './modules/admin/admin.component';
import { DoctorComponent } from './modules/doctor/doctor.component';
import { NurseComponent } from './modules/nurse/nurse.component';
import { ReceptionistComponent } from './modules/receptionist/receptionist.component';
import { MedicalAnalysisComponent } from './modules/medical-analysis/medical-analysis.component';
import { RadiologistComponent } from './modules/radiologist/radiologist.component';
import { HomeComponent } from './main component/home/home.component';
import { LoginComponent } from './main component/login/login.component';
import { MakeAppoinmentComponent } from './main component/make-appoinment/make-appoinment.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'appointment',component:MakeAppoinmentComponent},
  {path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule) },
  {path: 'doctor', loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule) },
  {path: 'nurse', loadChildren: () => import('./modules/nurse/nurse.module').then(m => m.NurseModule) },
  {path: 'receptionist', loadChildren: () => import('./modules/receptionist/receptionist.module').then(m => m.ReceptionistModule) },
  {path: 'medical analysis', loadChildren: () => import('./modules/medical-analysis/medical-analysis.module').then(m => m.MedicalAnalysisModule) },
  {path: 'radiologist', loadChildren: () => import('./modules/radiologist/radiologist.module').then(m => m.RadiologistModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
