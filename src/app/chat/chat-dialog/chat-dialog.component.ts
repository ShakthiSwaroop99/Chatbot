import { Component, OnChanges, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable, pipe } from 'rxjs';
import { scan,tap } from 'rxjs/operators';
import { BotResponse } from 'src/app/Model/bot-response';
declare var $: any;
// @ts-ignore
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser'; 

@Component({
selector:'chat-dialog',
templateUrl:'./chat-dialog.component.html',
styleUrls: ['./chat-dialog.component.css']
})

export class ChatDialogComponent implements OnInit {
    messages!: Observable<Message[]>;
    formValue: string = '';
    Title = 'micRecorder';
    Callid:string = '';
//Lets declare Record OBJ
//Will use this flag for toggeling recording
recording = false;
//URL of Blob
public url :any;
public error:any;
public record:any;
config: BotResponse | undefined;
  
constructor(public chat: ChatService,private domSanitizer: DomSanitizer) { }

ngOnInit() {
// appends to array after each new message is added to feedSource
this.messages = this.chat.conversation.asObservable().pipe((scan((acc, val) => acc.concat(val))))
this.SetInitializeCallResponse();
}

sanitize(url: string) {
    return this.domSanitizer.bypassSecurityTrustUrl(url);
    }

SetInitializeCallResponse() {
        this.chat.getInitializeCallResponse()
          .subscribe(
        // The 1st callback
            (data: BotResponse) => {
                this.InitializeBot(data.response,data.id);
                                   },
        // The 2nd callback handles errors.
            (err) => console.error("Bot Initialization Fail" + err),
        // The 3rd callback handles the "complete" event.
            () => console.log("Call Initialized"));
      }    

InitializeBot(msg: string,id: string)
{
    this.chat.UpdateBotMsg(msg);
    this.Callid = id;
}

SendResponse(msg:any,type:string)
{
    
    if(type === 'Text')
    {
        this.chat.UpdateUserMsg(msg);
        var data = JSON.stringify({'text': msg});
        this.chat.postUserTextResponse(data,this.Callid)
        .subscribe(
      // The 1st callback
          (data: BotResponse) => {
              this.InitializeBot(data.response,data.id);
                                 },
      // The 2nd callback handles errors.
          (err) => console.error("Text Response Failed" + err),
      // The 3rd callback handles the "complete" event.
          () => console.log("Received Text Response"));
    }
    else
    {
        this.chat.UpdateVoiceMsg(msg);
        this.chat.postUserVoiceResponse(msg,this.Callid)
        .subscribe(
      // The 1st callback
          (data: BotResponse) => {
              this.InitializeBot(data.response,data.id);
                                 },
      // The 2nd callback handles errors.
          (err) => console.error("Voice Response Failed" + err),
      // The 3rd callback handles the "complete" event.
          () => console.log("Received Voice Response"));
    }
}

sendMessage() {
this.SendResponse(this.formValue,'Text');
this.formValue = '';
}

public initiateRecording() {
    this.recording = true;
    let mediaConstraints = {
    video: false,
    audio: true
    };
    navigator.mediaDevices.getUserMedia(mediaConstraints).then(this.successCallback.bind(this), this.errorCallback.bind(this));
}

/**
* Will be called automatically.
*/
successCallback(stream:any) {
    var options = {
    mimeType: "audio/wav",
    numberOfAudioChannels: 1,
    sampleRate: 44000,
    bufferSize : 1024
    };
    //Start Actuall Recording
    //var StereoAudioRecorder = RecordRTC.MediaStreamRecorder;
    var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;   
    this.record = new StereoAudioRecorder(stream, options);
    this.record.record();
    }

    /**
* Stop recording.
*/
stopRecording() {
    this.recording = false;
    this.record.stop(this.processRecording.bind(this));
    }
    /**
    * processRecording Do what ever you want with blob
    * @param  {any} blob Blog
    */
    processRecording(blob:any) {
    this.url = URL.createObjectURL(blob);
    console.log("blob", blob);
    console.log("url", this.url);
    this.SendResponse(blob,'Voice');
    }
    /**
    * Process Error.
    */
    errorCallback(error:any) {
    this.error = 'Can not play audio in your browser';
    }


}