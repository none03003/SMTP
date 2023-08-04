<!DOCTYPE html>
<html>
<head>
  <title>SMTP</title>
  <meta charset="UTF-8">
  <style type="text/css">
    .style1 {
      font-size: 12px;
      font-weight: bold;
    }
    .style2 {
      font-size: 10px;
      font-weight: bold;
      font-family: tahoma;
      text-align: center;
    }
    input[type="radio"].rad {
      padding: 0;
      vertical-align: middle;
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha384-Ky7Lofk3OnYNSZwAib2MZBnVGv6rQQMXT+nngbEbsX7R2K7K7IqO8hXGyW3yIEvX" crossorigin="anonymous"></script>
  <script>
    $(document).ready(function() {
      // Template loading
       $('#tt').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var selectedTemplate = $(this).find('select[name="tempp"]').val();
        if (selectedTemplate) {
          // Perform AJAX request to load template content
          $.ajax({
            url: 'load_template.php',
            method: 'POST',
            data: { template: selectedTemplate },
            success: function(response) {
              $('#message').val(response); // Set the loaded template content to the message field
              $('#error-container').empty(); // Clear any previous error messages
            },
            error: function() {
              $('#error-container').text('Failed to load template.'); // Display error message
            }
          });
        }
      });

      // Form submission
      $('#frm1').on('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        var form = $(this);
        var fromEmail = form.find('input[name="ip"]').val();

        // Validate form fields
        if (fromEmail === '') {
          displayError('From Email Address field is required.');
          highlightField('ip');
          return;
        }

        // Perform AJAX request or any other necessary actions
        // ...

        // Form validation success, submit the form
        form.unbind('submit').submit();
      });

      // Error message display
      function displayError(message) {
        $('#error-container').text(message);
      }

      // Field highlighting
      function highlightField(fieldName) {
        $('input[name="' + fieldName + '"]').css('border-color', 'red');
      }

      function displayHTML(form) {
        var inf = form.message.value;
        win = window.open("", 'popup', 'toolbar=no, status=no');
        win.document.write("" + inf + "");
      }

      function myFunction(val) {
        alert("The input value has changed. The new value is: " + val);
      }
    });
  </script>
  <link rel="stylesheet" href="styles.css" type="text/css" media="all">
</head>
<body>
  <fieldset style="border: 1px solid #000000; border: 2px dotted #000000; left:5px">
    <legend></legend>
    <form name="tempload" id="tt" method="post" action="saved_temp.php">
      <select name="tempp" style="width:250px">
        <option value="" selected="selected">&lt;-<b>Select Name Of Approved Templates</b>-&gt;</option>
      </select>
      <input type="submit" value="Load" name="submit">
    </form>
    <form name="form1" id="frm1">
      <table align="right">
        <tr>
          <td colspan="3"></td>
        </tr>
      </table>
      <table width="90%" align="center" style="height: 100%;" cellpadding="10" cellspacing="0" border="2">
        <tr>
          <td style="background-color:#000033; color:#fff">
            <h2>SMTP AUTO</h2>
          </td>
          <td valign="middle" align="center" height="30" style="border:1px dotted #999">
            <table width="100%">
              <tr>
                <td align="center">
                  &nbsp;&nbsp;&nbsp;&nbsp;From Email Address ----
                  <input style="border:1px dotted #999; font-weight:500" type="text" name="ip" size="40" id="ip" value="" />
                </td>
                <td align="right"></td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td width="30%" valign="top" style=" border:1px solid #666; font-size:13.5px; padding:10px; line-height:28px; text-align:inherit;">
            <p style="border-bottom:1px dotted #666">List Of Accounts</p>
            <textarea style="width:325px; height:300px;" name="accs" cols="55" rows="15" id="accs" placeholder="put ip here"></textarea>
            <p>
              <div id="mailing1"></div>
            </p>
            <textarea name="custom_header" cols="60" rows="10" id="custom_header">
custom_header_1
custom_header_2
custom_header_3
custom_header_4
</textarea>
          </td>
          <td width="70%" valign="top">
            <div align="center">
              <input name="mode" type="radio" value="test" checked="checked">Test
              <input name="mode" type="radio" value="bulk">Bulk
            </div>
            <div align="center" style="padding-top:10px; text-align:left">
              <table align="center" cellpadding="0" border="0" cellspacing="0" style="font-size:12px;">
                <tbody>
                  <tr>
                    <td align="left" style="padding-right:20px;"><strong>Subject</strong></td>
                    <td align="left" style="padding-bottom:10px;">
                      <input type="text" name="sub" id="sub2" size="60" value="">
                      <br>
                      <div>
                        <input type="radio" name="sencode" value="ascii"> UTF8-Q
                        <input type="radio" name="sencode" value="base64"> UTF8-B
                        <input type="radio" name="sencode" value="reset" checked> RESET
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="padding-right:20px;"><strong>From</strong></td>
                    <td align="left" style="padding-bottom:10px;">
                      <input type="text" name="from" id="from2" size="60" value="">
                      <br>
                      <div>
                        <input type="radio" name="fmencode" value="ascii"> UTF8-Q
                        <input type="radio" name="fmencode" value="base64"> UTF8-B
                        <input type="radio" name="fmencode" value="reset" checked> RESET
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="padding-right:20px;"><strong>Test Email</strong></td>
                    <td align="left" style="padding-bottom:10px;">
                      <textarea name="emails" cols="0" rows="0" style="width:374px; height:75px;" id="emails"></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" style="padding-right:20px;"><strong>Headers</strong></td>
                    <td align="left" style="padding-bottom:10px;">
                      <textarea name="header" cols="60" rows="10" id="header">
From:_FROM<_FEMAILADD>
To:_TO
MIME-Version: 1.0
Subject: _Subject
Message-ID:<_UNI@_domain>
Date: _RFCdate
Return-Path: <_RP>
Content-Type: text/_type; charset=_CHARSET
Content-Transfer-Encoding: _ENCODE
</textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table align="center" style="font-size:12px;" cellpadding="0" border="0" cellspacing="0" width="50%">
                <tbody align="center">
                  <tr>
                    <td align="left" style="padding-right:20px;"><strong>Body</strong></td>
                    <td>
                      <p>Type:
                        <input name="type" type="radio" value="plain" onClick="document.getElementById('mime').style.display = 'none'" class="rad">Plain
                        <input name="type" type="radio" value="html" onClick="document.getElementById('mime').style.display = 'none'" class="rad" checked="checked">Html
                        <input name="type" type="radio" value="mime" onClick="document.getElementById('mime').style.display = 'none'" class="rad">MIME
                        <input type="button" value=" Preview " onClick="displayHTML(this.form)">
                      </p>
                      <table cellpadding="5" cellspacing="0" border="0" style="padding:0px;">
                        <tr>
                          <td>
                            <textarea style="width:375px; margin-left:54px; height:270px;" name="message" cols="55" rows="25" id="message"></textarea>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <textarea style="width:375px; margin-left:54px; height:50px;" name="textm" cols="55" rows="25"></textarea>
                          </td>
                        </tr>
                      </table>
                      <div align="center">
                        Send Type:
                        <input name="sen_t" type="radio" value="manual" checked="checked">Manual
                        <input name="sen_t" type="radio" value="auto">Auto
                      </div>
                      <table style="font-size:12px;" width="450" border="0">
                        <tr>
                          <td id="mdata">
                            <div align="right"><strong>DataFile</strong></div>
                          </td>
                          <td>
                            <input type="text" name="data" id="data3" value="">
                          </td>
                          <td id="mlimit">
                            <div align="right"><strong>Limit</strong></div>
                          </td>
                          <td width="193">
                            <input name="limit" type="text" value="">
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Limit_to_Send</strong></div>
                          </td>
                          <td>
                            <input type="text" name="ls" id="ls" value="">
                          </td>
                        </tr>
                        <tr>
                          <td id="mdata">
                            <div align="right"><strong>Offerid</strong></div>
                          </td>
                          <td>
                            <input type="text" name="offer" id="offer" value="">
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Msgid</strong></div>
                          </td>
                          <td>
                            <input type="text" name="msid" id="msid" value="">
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Domain</strong></div>
                          </td>
                          <td>
                            <input type="text" name="domain" id="domain" value="">
                          </td>
                        </tr>
                        <tr>
                          <td id="mdata">
                            <div align="right"><strong>Wait Time</strong></div>
                          </td>
                          <td>
                            <select name="wait" id="wait" style="width: 130px;">
                              <option value="0">0</option>
                              <option value="1">1</option>
                              <option value="2" selected="selected">2</option>
                              <option value="3">3</option>
                            </select>
                          </td>
                          <td id="sleepid">
                            <div align="right"><strong>Sleep time</strong></div>
                          </td>
                          <td>
                            <input type="text" name="sp" id="sp" value="">
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Times_To_Send</strong></div>
                          </td>
                          <td>
                            <input type="text" name="times" id="times" value="1">
                          </td>
                        </tr>
                        <tr>
                          <td id="sleepid">
                            <div align="right"><strong>Char_Encoding</strong></div>
                          </td>
                          <td>
                            <select name="charen" id="charen" style="width: 130px;">
                              <option value="UTF-8" selected="selected">UTF-8</option>
                              <option value="ISO-8859-1">I-8859</option>
                              <option value="US-ASCII">USA</option>
                              <option value="windows-1250">windows-1250</option>
                              <option value="windows-1251">windows-1251</option>
                            </select>
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Cont_Encoding</strong></div>
                          </td>
                          <td>
                            <select name="contend" id="contend" style="width: 130px;">
                              <option value="8bit">8bit</option>
                              <option value="binary">binary</option>
                              <option value="quoted-printable" selected="selected">quoted-printable</option>
                              <option value="7bit">7bit</option>
                              <option value="base64">base64</option>
                              <option value="x-uuencode">uue</option>
                            </select>
                          </td>
                          <td id="mdata">
                            <div align="right"><strong>Temp-Name</strong></div>
                          </td>
                          <td>
                            <input type="text" name="name" id="name" value="">
                          </td>
                        </tr>
                      </table>
                      <table>
                        <tr>
                          <td style="padding-top:10px; padding-bottom:10px;">
                            <div align="center" style=" width:148px; height:18px; z-index:1 ; background-color: #0479C0; border: 1px none #000000;display:none;" id="loadingreport123">
                              <div align="center" class="style2">
                                <font color="#FFFFFF"><strong><font size="2">Sending .. </font></strong></font>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </form>
  </fieldset>
  <script>
    // Check if running on laptop
    if (!window.navigator.userAgent.includes("Mobile")) {
      // Disable form submission on Enter key press
      $(document).on('keypress', 'form', function(event) {
        return event.keyCode != 13;
      });
    }
  </script>
</body>
</html>
