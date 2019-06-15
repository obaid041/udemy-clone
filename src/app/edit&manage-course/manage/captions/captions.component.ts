import { Component, OnInit } from '@angular/core';


declare var $:any;

declare var $fewseconds:any;

@Component({
  selector: 'app-captions',
  templateUrl: './captions.component.html',
  styleUrls: ['./captions.component.css']
})
export class CaptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("button[name='g_list']").click(function(){
          $(this).text($(this).text() == 'Enable' ? 'Disable' : 'Enable');

          if(($(this).text() == 'Enable')){
            $(this).prop('disabled', true);
            setTimeout(function(){
             $(this).prop('disabled', false);
          }, $fewseconds*1000);
            $(this).css('background-color', '#007791');
            $(this).css('color', '#fff');

        } else if(($(this).text() == 'Disable')){
          $(this).css('background-color', 'white');
          $(this).css('color', '#007791');
          $(this).css('border', '1px solid #007791');

        }
      });
  });

}
}
