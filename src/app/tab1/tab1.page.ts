import { Component, ViewChild } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Platform } from '@ionic/angular';
import { MediaSession } from '@jofr/capacitor-media-session';


declare var cordova: any;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private audio!: HTMLAudioElement;

  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.prepareAudio();
    });
  }

  prepareAudio() {
    // const audioFile = '../../assets/audio/drake.mp3';
    const audioFile = 'https://streamingecuador.com:7046/stream';

    
    this.audio = new Audio(audioFile);

    // this.audio.onplay = () => this.updateMediaSessionMetadata();
    // this.audio.onpause = () => this.updateMediaSessionMetadata();
    // this.audio.onended = () => this.resetMediaSession();

    // this.setupMediaSession();
    // this.audio.play();
  }

  setupMediaSession() {
    const mediaMetadata = {
      title: 'Your Audio Title',
      artist: 'Your Artist Name',
      album: 'Your Album Name',
      artwork: [
        { src: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anBnfGVufDB8fDB8fHww', sizes: '512x512', type: 'image/jpeg' },
      ],
    };

    // MediaSession.setMetadata(mediaMetadata);

    // MediaSession.setActionHandler({action:'play'}, () => {
    //   this.audio.play();
    // });

    // MediaSession.setActionHandler({action:'pause'}, () => {
    //   this.audio.pause();
    // });

    // MediaSession.setActionHandler({action:'seekbackward'}, (details) => {
    //   this.audio.currentTime = Math.max(this.audio.currentTime - (details.seekTime || 10), 0);
    // });

    // MediaSession.setActionHandler({action:'seekforward'}, (details) => {
    //   this.audio.currentTime = Math.min(this.audio.currentTime + (details.seekTime || 10), this.audio.duration);
    // });

    // MediaSession.setActionHandler({action:'stop'}, () => {
    //   this.audio.pause();
    //   this.audio.currentTime = 0;
    // });
  }

  // updateMediaSessionMetadata() {
  //   const mediaState = {
  //     playbackRate: this.audio.playbackRate,
  //     duration: this.audio.duration,
  //     currentTime: this.audio.currentTime,
  //     paused: this.audio.paused,
  //   };

  //   MediaSession.setPositionState(mediaState);
  // }

  // resetMediaSession() {
  //   MediaSession.setPositionState({
  //     playbackRate: 1,
  //     duration: 0,
  //     position:0
  //   });
  // }
}
