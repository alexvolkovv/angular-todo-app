import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TaskListsModule } from './shared/modules/taskLists/taskLists.module'
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './home/home.module'
import { TasksService } from './services/tasks.service'
import { ListService } from './services/list.service'
import { ColorService } from './services/color.service'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TaskListsModule, HttpClientModule],
  providers: [TasksService, ListService, ColorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
