import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';

// import { ApiAiClient } from 'api-ai-javascript'
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { observable } from 'rxjs';

import { BehaviorSubject } from 'rxjs';
import { map } from "rxjs/operators";

import { BotResponse } from '../Model/bot-response'

const httpOptionsjson = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

// Message class for displaying messages in the component

export class Message {
constructor(public content: any, public sentBy: string) {}
}

@Injectable()
export class ChatService {
    
    private InitializeURL: string = "http://be4d7e09efce.in.ngrok.io/dms/initialise_call";
    private TextRequestURL: string = "http://be4d7e09efce.in.ngrok.io/dms/predict_text";
    private AudioRequestURL: string = "http://be4d7e09efce.in.ngrok.io/dms/predict_audio";
    
    conversation = new BehaviorSubject<Message[]>([]);

constructor(private http: HttpClient){}

getInitializeCallResponse() {
  // now returns an Observable of Config
  return this.http.get<BotResponse>(this.InitializeURL);
}

postUserTextResponse(msg: string , callId : string){
  return this.http.post<BotResponse>(this.TextRequestURL, msg,this.getHeaders(callId))
}

postUserVoiceResponse(msg: any, callId :string){
  return this.http.post<BotResponse>(this.AudioRequestURL, msg,this.getHeadersAudio(callId));
}

UpdateUserMsg(msg:any)
{
  const botMessage = new Message(msg, 'user');
  this.push(botMessage);
}
UpdateVoiceMsg(msg:any)
{
  const botMessage = new Message(msg, 'Voice');
  this.push(botMessage);
}

UpdateBotMsg(msg:any)
{
  const botMessage = new Message(msg, 'bot');
  this.push(botMessage);
}

push(msg: Message) {
this.conversation.next([msg]);
}

getHeaders(id:string)
{
  const httpOptionsjson = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json' ,'id' : id
    })
    
  }
  return httpOptionsjson;
}
getHeadersAudio(id:string)
{
  const httpOptionsjson = {
    headers: new HttpHeaders({
      'id' : id
    })
    
  }
  return httpOptionsjson;
}
}