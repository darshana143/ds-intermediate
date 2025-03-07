import { Component, OnInit } from '@angular/core';
import { Interconnect } from 'ng-interconnect';
import { MainViews } from '../app.types';
import { settingPopupScreen } from '../ds-components/ds-types';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'dream-stakes';
  currentMainView: number = MainViews.enterScreen;
  rightPanal: boolean = false;
  _MainViews = MainViews;
  showSettingsDialog: boolean = false;
  popupScreen = settingPopupScreen.addNewCard;
  showCaption = 'hidden';
  showBackBtn: boolean = false;
  
  
  constructor(
	  private interconnect: Interconnect,
    private chat: ChatService
  ) { }

  ngOnInit(): void {

		//--------------- Home UI Listeners --------------------//
		this.interconnect.createListener('home/changeView', (_connection, command) => {

			this.currentMainView = command.mainView;

      if(this.currentMainView === this._MainViews.dashboard)
        this.rightPanal = true;
      else
        this.rightPanal = false;
			
		});

    this.interconnect.createListener('home/changeSettingPopup', (_connection, command) => {

			this.popupScreen = command.view;
      this.showCaption = command.caption;
      this.showBackBtn = command.showBackBtn;
      this.showSettingsDialog = true;
			
		});

    this.chat.join();

  }

  closeDialog(){
    this.showSettingsDialog = false;
    this.showCaption = 'hidden';
    this.showBackBtn = false;
  }

}
